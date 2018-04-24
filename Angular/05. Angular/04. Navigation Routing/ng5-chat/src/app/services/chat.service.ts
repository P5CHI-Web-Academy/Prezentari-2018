import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from '../datatypes/message.type';
import { Contact } from '../datatypes/contact.type';
import { debug } from 'util';

export class ChatService {
  private url = 'http://192.168.43.126:5000';
  private socket;
  public  messagesSource;

  getSocket() {
    if (!this.socket)
      this.socket = io(this.url);    
    return this.socket;
  }
  
  sendMessage(message: Message):void {
    this
      .getSocket()
      .emit('send-message', message.toJsonObject());
  }

  messageMapper(data):Message {
    console.log(data);
    return new Message(
      new Contact(
        data.data.from.data.name,
        data.data.from.data.email,
        data.data.from.data.lastActiveTime,
        data.data.from.data.photo
      ),
      new Contact(
        data.data.to.data.name,
        data.data.to.data.email,
        data.data.to.data.lastActiveTime,
        data.data.to.data.photo
      ),
      new Date(data.data.cdate),
      data.data.message,
      []
    );
  }

  getChatMessages(room:string, currentUser:string) {
    if (room === "all") {
      // keep it
    } else {
      room = (
        room + '-' + currentUser
      ).split('-').filter(v => !!v).sort().join('-');
      console.log("Messages From Room: ", room);
    }
    let source = new Observable(observer => {
      this.getSocket()
        .emit("get-history", room, (messages) => {
          messages.forEach(
            data => {
              observer.next(
                this.messageMapper(data)
              )
            }
          );
          // retrieve new messages;
          this.getSocket()
            .on('message', (data) => {
              let message = this.messageMapper(data);
              observer.next(
                message
              )
            });
        });

      return () => {
        this
          .socket
          .disconnect();
      };
    });

    return source;
  }
}