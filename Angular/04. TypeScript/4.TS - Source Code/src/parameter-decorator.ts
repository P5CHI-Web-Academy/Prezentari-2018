// the signature of a ParameterDecorator looks as follows:
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

class Person {

    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    public saySomething(@logParameter something: string): string {
        return this.name + " " + this.surname + " says: " + something;
    }
}


function logParameter(target: any, key: string, index: number) {
    console.log("ParameterDecorator called on: ", target, key, index);
}

let johy = new Person('Johy', 'Davis');
console.log(johy.saySomething('De jos in sus.'));