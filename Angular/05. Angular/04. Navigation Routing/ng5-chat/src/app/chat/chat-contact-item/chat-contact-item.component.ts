import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../datatypes/contact.type';

@Component({
  selector: 'app-chat-contact-item',
  templateUrl: './chat-contact-item.component.html',
  styleUrls: ['./chat-contact-item.component.sass']
})
export class ChatContactItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {

  }

}
