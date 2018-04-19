export class Contact {
    constructor(
        public name: string,
        public email: string,
        public lastActiveTime: Date,
        public photo: string // base64 photo
    ) {}
}