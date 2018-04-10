// ----------------------------------------------------------------------------------
// Classes
// ----------------------------------------------------------------------------------

interface ISimpleClass {
    id: number;

    print(): void;
}

class SimpleClass {
    id: number = 0;

    print(): void {
        console.log(`SimpleClass has id : ${this.id}`);
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 1001;
mySimpleClass.print();


// Implementing Intefaces

class ClassA implements IPrint {
    print() {
        console.log('ClassA.print()')
    };
}

class ClassB implements IPrint {
    print() {
        console.log(`ClassB.print()`)
    };
}

interface IPrint {
    print(): any;
}

function printClass(a: IPrint) {
    a.print();
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);
