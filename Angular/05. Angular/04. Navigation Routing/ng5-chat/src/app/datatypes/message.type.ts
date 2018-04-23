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
        
    toJsonObject():object {
        return {
            "type" : "Message",
            "data" : {
                from: this.from.toJsonObject(),
                to: this.to.toJsonObject(),
                cdate: this.cdate.toISOString(),
                message: this.message,
                attachments: this.attachments.map((attachment: Attachment) => {
                    return attachment.toJsonObject();
                })
            }
        }
    }
}