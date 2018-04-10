//We can pass any type and returns any type

function identity(arg: any): any {
    return arg;
}

// We pass and get only one type

function identity<T>(arg: T): T {
    return arg;
}

const value = identity<number>(115);


// Error: cannot recognize length
function getLength<T>(arg: T): number {
    return arg.length;
}

interface Lengthwise {
    length: number;
}

// Generic constrains
function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

function getLength<T>(arg: Array<T>): number {
    return arg.length;
}

// IF we need only length, then we can use ArrayLike
function getLength<T>(arg: ArrayLike<T>): number {
    return arg.length;
}


// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
const vrar: any = 'test';
let someString: string = (<string>vrar).toUpperCase();
someString = (vrar as string).toUpperCase();

console.log(someString);


// define a generic type argument and instantiate this type at runtime:
class Factory {
    create<T>(type: (new () => T)): T {
        return new type();
    }
}

let factory = new Factory();
let person = factory.create(Person);


// Generic classes

class ItemCollection<T> {
    private itemArray: Array<T>;

    constructor() {
        this.itemArray = [];
    }

    Add(item: T) {
        this.itemArray.push(item);
    }

    GetFirst(): T {
        return this.itemArray[0];
    }
}

let collection = new ItemCollection<string>();

collection.Add('some');
collection.Add('string');
collection.GetFirst();

let numCollection = new ItemCollection<number>();

numCollection.Add(1);
numCollection.Add(2);
numCollection.GetFirst();