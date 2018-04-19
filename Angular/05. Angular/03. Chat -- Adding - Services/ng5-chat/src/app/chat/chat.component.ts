import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {debug} from 'util';
import {DomSanitizer} from '@angular/platform-browser'

import {Message} from '../datatypes/message.type';
import {Contact} from '../datatypes/contact.type';

import {ChatService} from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({selector: 'app-chat', templateUrl: './chat.component.html', styleUrls: ['./chat.component.sass'], providers: [ChatService]})

export class ChatComponent implements OnInit, OnDestroy {

  contacts : Contact[] = [];

  currentNickName : string;

  currentMessage : string;

  messages : Message[];

  me : Contact;
  messagesSource;

  constructor(private router : ActivatedRoute, private sanitizer : DomSanitizer, private chatService: ChatService) {
    this
      .router
      .params
      .subscribe(params => {
        this.currentNickName = params.nickname || null;
      });

    // TODO use a service

    let userPhoto = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCj" +
        "whRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudz" +
        "Mub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3" +
        "d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbm" +
        "siIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiI+DQo8ZyB0cmFuc2Zvcm09Im" +
        "1hdHJpeCgxLDAsMCwtMSwxOTcuNDIzNzMsMTMwMC42MTAyKSI+DQogICAgPHBhdGggZD0iTSAxNDA4LD" +
        "EzMSBRIDE0MDgsMTEgMTMzNSwtNTguNSAxMjYyLC0xMjggMTE0MSwtMTI4IEggMjY3IFEgMTQ2LC0xMj" +
        "ggNzMsLTU4LjUgMCwxMSAwLDEzMSAwLDE4NCAzLjUsMjM0LjUgNywyODUgMTcuNSwzNDMuNSAyOCw0MD" +
        "IgNDQsNDUyIHEgMTYsNTAgNDMsOTcuNSAyNyw0Ny41IDYyLDgxIDM1LDMzLjUgODUuNSw1My41IDUwLj" +
        "UsMjAgMTExLjUsMjAgOSwwIDQyLC0yMS41IDMzLC0yMS41IDc0LjUsLTQ4IDQxLjUsLTI2LjUgMTA4LC" +
        "00OCBRIDYzNyw1NjUgNzA0LDU2NSBxIDY3LDAgMTMzLjUsMjEuNSA2Ni41LDIxLjUgMTA4LDQ4IDQxLj" +
        "UsMjYuNSA3NC41LDQ4IDMzLDIxLjUgNDIsMjEuNSA2MSwwIDExMS41LC0yMCA1MC41LC0yMCA4NS41LC" +
        "01My41IDM1LC0zMy41IDYyLC04MSAyNywtNDcuNSA0MywtOTcuNSAxNiwtNTAgMjYuNSwtMTA4LjUgMT" +
        "AuNSwtNTguNSAxNCwtMTA5IFEgMTQwOCwxODQgMTQwOCwxMzEgeiBtIC0zMjAsODkzIFEgMTA4OCw4Nj" +
        "UgOTc1LjUsNzUyLjUgODYzLDY0MCA3MDQsNjQwIDU0NSw2NDAgNDMyLjUsNzUyLjUgMzIwLDg2NSAzMj" +
        "AsMTAyNCAzMjAsMTE4MyA0MzIuNSwxMjk1LjUgNTQ1LDE0MDggNzA0LDE0MDggODYzLDE0MDggOTc1Lj" +
        "UsMTI5NS41IDEwODgsMTE4MyAxMDg4LDEwMjQgeiIvPg0KPC9nPg0KPC9zdmc+";
    this
      .contacts
      .push(new Contact("Me", "me@example.com", new Date(), userPhoto));
    this
      .contacts
      .push(new Contact("John", "john@example.com", new Date(), userPhoto));

    this.me = this.contacts[0];
    let contact1 = this.contacts[1];

    this.messages = [];

  }

  safeUrl(url : string) {
    return this
      .sanitizer
      .bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.messagesSource = this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        this
          .messages
          .push(
            message
          );
      })
  }

  getContactByNickName(nick : string) {
    // TODO use a service
    return new Contact(nick, "me@example.com", new Date(), "");
  }

  messageSubmit() {
    this.chatService.sendMessage(
      new Message(this.me, this.getContactByNickName(this.currentNickName), new Date(), this.currentMessage, [])
    );
    this.currentMessage = '';
  }

  ngOnDestroy() {
    this.messagesSource.unsubscribe();
  }

}
