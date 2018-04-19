import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from '../datatypes/message.type';
import { Contact } from '../datatypes/contact.type';
import { debug } from 'util';

export class ChatService {
  private url = 'http://localhost:5000';
  private socket;
  
  sendMessage(message: Message):void {
    this
      .socket
      .emit('add-message', message.toJsonObject());
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this
        .socket
        .on('message', (data) => {
          // this code will be refactored... during lesson
          observer.next(
            new Message(
              new Contact(
                data.data.data.from.data.name,
                data.data.data.from.data.email,
                data.data.data.from.data.lastActiveTime,
                data.data.data.from.data.photo
              ),
              new Contact(
                data.data.data.to.data.name,
                data.data.data.to.data.email,
                data.data.data.to.data.lastActiveTime,
                data.data.data.to.data.photo
              ),
              new Date(data.data.data.cdate),
              data.data.data.message,
              []
            )
          );
        });
      return () => {
        this
          .socket
          .disconnect();
      };
    });
    return observable;
  }
}