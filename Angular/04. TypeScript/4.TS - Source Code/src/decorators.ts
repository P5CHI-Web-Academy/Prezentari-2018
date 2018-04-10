// MethodDecorator = <T>(target: Object, key: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | Void;

/*
Let’s understand the parameters of the decorator

target -> The object being decorated
key -> The name of the method being decorated.
descriptor -> The property descriptor of the given property. You can see the property descriptor by invoking the function Object.getOwnPropertyDescriptor()
 */

/*
Property Descriptors

ref: getOwnPropertyDescriptor

To get an intuitive idea about the property descriptors, Take a look at the following console code.

 */

let d;
const o = {
    get foo() {
        return 17;
    },
    bar: 17,
    foobar: function () {
        return "FooBar"
    }
};

d = Object.getOwnPropertyNames(o);
console.log(d);

d = Object.getOwnPropertyDescriptor(o, 'foo');
console.log(d);
d = Object.getOwnPropertyDescriptor(o, 'bar');
console.log(d);
d = Object.getOwnPropertyDescriptor(o, 'foobar');
console.log(d);


function leDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
    var oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(`Calling "${propertyKey}" with`, arguments, target);
        // Executing the original function interchanging the arguments
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);
        //returning a modified value
        return value + "; This is awesome";
    };

    return descriptor;
}

class JSMeetup {
    speaker = "Ruban";

    //@leDecorator
    welcome(arg1, arg2) {
        console.log(`Arguments Received are ${arg1}, ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}

const meetup = new JSMeetup();

console.log(meetup.welcome("World", "Hello"));

