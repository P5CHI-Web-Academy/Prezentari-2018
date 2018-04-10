class Person {
    name: string;
}

class Employee extends Person {
    department: number;
}

class Animal {
    breed: string;
}

let workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();

// workers[2] = new Animal();  // compile-time error


class Map<T> {
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T) {

        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key);
        }
    }
}

const numberMap = new Map<number>();
numberMap.setItem("Mobile", 2);
numberMap.setItem("products", 10);
console.log(numberMap.getItem("Mobile"));
numberMap.printMap();
numberMap.clear();

const stringMap = new Map<string>();
stringMap.setItem("Node Js ", "Javscript framework");
stringMap.printMap();
