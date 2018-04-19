export class Attachment {
    constructor(
        public type: string,
        public content: string
    ) {}

    toJsonObject() {
        return {
            "type": "Attachment",
            "data": {
                "type" : this.type,
                "content" : this.content
            }
        };
    } 
}