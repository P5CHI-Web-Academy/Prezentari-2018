// the signature of a PropertyDecorator looks as follows:
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

function logProperty(target: any, key: string) {

    // property value
    var _val = target[key];

    // property getter
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };

    // property setter
    var setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    };

    // Delete property.
    if (delete target[key]) {

        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

class Person {

    @logProperty
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

const me = new Person('Johy', 'Davis');

me.name = "Remo H.";

console.log(me.name);