// ----------------------------------------------
// without Decorators
// ----------------------------------------------

class CalcWithoutDec {

    static add(x: number, y: number) {

        const validate = (...args: any[]) => {
            return true;
        };

        const authorized = () => {
            return true;
        };

        console.log('foo was called!');
        if (!validate(arguments)) {
            throw(new Error());
        }
        if (!authorized()) {
            throw(new Error());
        }
        return x + y;
    }
}


console.log(CalcWithoutDec.add(10, 20));

// ----------------------------------------------
// with Decorators
// ----------------------------------------------

// the signature of a MethodDecorator looks as follows:
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

function log(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log(`${key} was called with:`, arguments);
        var result = originalMethod.apply(this, arguments);
        return result;
    };
    return descriptor;
}

function validate(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        if (arguments[0] < 10) {
            throw 'Invalid parameters';
        }

        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}

class CalcWithDec {

    @log
    @validate
    static add(x: number, y: number) {
        return x + y;
    }
}

console.log(CalcWithDec.add(7, 20));
console.log(CalcWithDec.add(10, 5));
