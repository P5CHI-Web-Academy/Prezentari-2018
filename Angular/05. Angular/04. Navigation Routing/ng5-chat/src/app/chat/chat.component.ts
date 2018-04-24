import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {debug} from 'util';
import {DomSanitizer} from '@angular/platform-browser'

import {Message} from '../datatypes/message.type';
import {Contact} from '../datatypes/contact.type';

import {ChatService} from '../services/chat.service';
import {Observable} from 'rxjs/Observable';
import {OnDestroy} from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../services/auth.service'


@Component({selector: 'app-chat', templateUrl: './chat.component.html', styleUrls: ['./chat.component.sass'], providers: [ChatService]})

export class ChatComponent implements OnInit,
OnDestroy {

  contacts : Contact[] = [];

  currentNickName : string;

  currentMessage : string;

  chatWith: string = '';

  messages : Message[];

  me : Contact;
  messagesSource;

  constructor(private activeRoute : ActivatedRoute, private router : Router, private sanitizer : DomSanitizer, private chatService : ChatService, private auth: AuthService) {
    this
      .activeRoute
      .params
      .subscribe(params => {
        this.currentNickName = params.nickname || null;
        this.updateSource()
      });

    this.auth.authState().subscribe(params => {
      if (params.user) {
        this.me = new Contact(
          params.user,
          "email@sample.com",
          new Date(),
          ""
        );
        this.updateSource();
      }
    })

    this.contacts.push(this.me);
  }

  updateSource() {
    this.messages = [];
    if (this.messagesSource) {
      // this
      //   .messagesSource
      //   .unsubscribe();
      this.messagesSource = null;
    }
    if (this.currentNickName && this.me) {
      this.messagesSource = this
        .chatService
        .getChatMessages(this.currentNickName, this.me.name);
      this
        .messagesSource
        .subscribe((message : Message) => {
          this
            .messages
            .push(message);
        })
    }
  }

  chatChange() {
    if (this.chatWith) {
      this.router.navigate([
        `messages/${this.chatWith}`
      ])
    }
  }

  safeUrl(url : string) {
    return this
      .sanitizer
      .bypassSecurityTrustUrl(url);
  }

  ngOnInit() {}

  getContactByNickName(nick : string) {
    // TODO use a service
    return new Contact(nick, "me@example.com", new Date(), "");
  }

  messageSubmit() {
    this
      .chatService
      .sendMessage(new Message(this.me, this.getContactByNickName(this.currentNickName), new Date(), this.currentMessage, []));
    this.currentMessage = '';
  }

  ngOnDestroy() {
    if (this.messagesSource) {
      this
        .messagesSource
        .unsubscribe();
    }
  }

}
