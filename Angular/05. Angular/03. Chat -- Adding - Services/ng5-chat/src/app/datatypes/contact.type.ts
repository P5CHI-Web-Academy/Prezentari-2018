export class Contact {
    constructor(
        public name: string,
        public email: string,
        public lastActiveTime: Date,
        public photo: string // base64 photo
    ) {}

    toJsonObject(): object {
        return {
            "type" : "Contact",
            "data" : {
                "name" : this.name,
                "email" : this.email,
                "lastActiveTime" : this.lastActiveTime,
                "photo" : this.photo
            }
        };
    }
}