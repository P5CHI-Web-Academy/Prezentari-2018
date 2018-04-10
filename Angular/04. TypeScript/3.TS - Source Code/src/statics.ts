class Something {
    static instances = 0;

    constructor() {
        Something.instances++;
    }
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2


export class Validation { 

    static validateEmail(email? : string):boolean {
        return !!email;
    }

    static validateNumber() {

    }

    static validateAddress() {

    }
}


if( Validation.validateEmail('test@test.com')) {

}