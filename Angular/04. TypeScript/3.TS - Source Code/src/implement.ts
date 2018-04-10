interface IName {
    firstName: string
    lastName: string;
}

interface IWork {
    doWork(): void;
}

abstract class BaseEmployee implements IName, IWork {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Employee extends BaseEmployee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

let emp: IWork = new Employee('Dana', 'Ryan');
emp.doWork();