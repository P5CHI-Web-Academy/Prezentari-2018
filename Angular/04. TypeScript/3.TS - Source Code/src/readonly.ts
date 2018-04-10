class Octopus {
    readonly name: string = '10';
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
         this.name = theName;
    }

    myMethod() {
        //this.name = 'hello world';
    }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
