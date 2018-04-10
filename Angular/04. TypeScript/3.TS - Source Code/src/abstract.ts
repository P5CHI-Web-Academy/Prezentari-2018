abstract class BaseEmployee {
    firstName: string;
    lastName: string;

    private age: number;


    set Age(value) {
        this.age = value;
    }

    get Age() {
        return this.age;
    }

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
        console.log(`${this.lastName}, ${this.firstName} ${this.Age} doing work...`);
    }
}

let baseEmp = new BaseEmployee();

let emp = new Employee('Dana', 'Ryan');
emp.Age = 30;
emp.doWork(); //Print Ryan, Dana doing work...
