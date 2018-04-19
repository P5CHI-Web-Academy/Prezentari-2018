import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';
import { Message } from '../datatypes/message.type';
import { Contact } from '../datatypes/contact.type';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  currentNickName: string;

  currentMessage: string;

  messages: Message[];

  me: Contact;

  constructor(private router: ActivatedRoute ) {
    this.router.params.subscribe(params => {
      this.currentNickName = params.nickname || null;
    });

    // TODO use a service
    this.me = new Contact("Me", "me@example.com", new Date(), "");

    let userPhoto = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiI+DQo8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxOTcuNDIzNzMsMTMwMC42MTAyKSI+DQogICAgPHBhdGggZD0iTSAxNDA4LDEzMSBRIDE0MDgsMTEgMTMzNSwtNTguNSAxMjYyLC0xMjggMTE0MSwtMTI4IEggMjY3IFEgMTQ2LC0xMjggNzMsLTU4LjUgMCwxMSAwLDEzMSAwLDE4NCAzLjUsMjM0LjUgNywyODUgMTcuNSwzNDMuNSAyOCw0MDIgNDQsNDUyIHEgMTYsNTAgNDMsOTcuNSAyNyw0Ny41IDYyLDgxIDM1LDMzLjUgODUuNSw1My41IDUwLjUsMjAgMTExLjUsMjAgOSwwIDQyLC0yMS41IDMzLC0yMS41IDc0LjUsLTQ4IDQxLjUsLTI2LjUgMTA4LC00OCBRIDYzNyw1NjUgNzA0LDU2NSBxIDY3LDAgMTMzLjUsMjEuNSA2Ni41LDIxLjUgMTA4LDQ4IDQxLjUsMjYuNSA3NC41LDQ4IDMzLDIxLjUgNDIsMjEuNSA2MSwwIDExMS41LC0yMCA1MC41LC0yMCA4NS41LC01My41IDM1LC0zMy41IDYyLC04MSAyNywtNDcuNSA0MywtOTcuNSAxNiwtNTAgMjYuNSwtMTA4LjUgMTAuNSwtNTguNSAxNCwtMTA5IFEgMTQwOCwxODQgMTQwOCwxMzEgeiBtIC0zMjAsODkzIFEgMTA4OCw4NjUgOTc1LjUsNzUyLjUgODYzLDY0MCA3MDQsNjQwIDU0NSw2NDAgNDMyLjUsNzUyLjUgMzIwLDg2NSAzMjAsMTAyNCAzMjAsMTE4MyA0MzIuNSwxMjk1LjUgNTQ1LDE0MDggNzA0LDE0MDggODYzLDE0MDggOTc1LjUsMTI5NS41IDEwODgsMTE4MyAxMDg4LDEwMjQgeiIvPg0KPC9nPg0KPC9zdmc+";

    let contact1 = new Contact("John", "john@example.com", new Date(), userPhoto)
    this.messages = [
      new Message(
        contact1,
        this.getContactByNickName(this.currentNickName),
        new Date(),
        this.currentMessage,
        []
      )
    ];
  }

  ngOnInit() {
  }

  getContactByNickName(nick: string) {
    // TODO use a service
    return new Contact(nick, "me@example.com", new Date(), "");
  }

  messageSubmit() {
    this.messages.push(
      new Message(
        this.me,
        this.getContactByNickName(this.currentNickName),
        new Date(),
        this.currentMessage,
        []
      )
    );
    this.currentMessage = '';
  }

}
