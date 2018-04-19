import { Contact } from './contact.type';
import { Attachment } from './attachment.type';

export class Message {
    constructor(
        public from: Contact,
        public to: Contact,
        public cdate: Date,
        public message: string,
        public attachments: Attachment[]
    ) {}
}