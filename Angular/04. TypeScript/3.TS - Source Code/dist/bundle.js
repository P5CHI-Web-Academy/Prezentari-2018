"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return BaseEmployee;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    Employee.prototype.doWork = function () {
        console.log(this.lastName + ", " + this.firstName + " doing work...");
    };
    return Employee;
}(BaseEmployee));
var emp = new Employee('Dana', 'Ryan');
emp.doWork(); //Print Ryan, Dana doing work...
var FooBase = /** @class */ (function () {
    function FooBase() {
    }
    return FooBase;
}());
// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected
// EFFECT ON CHILD CLASSES
var FooChild = /** @class */ (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x; // okay
        _this.y; // ERROR: private
        _this.z; // okay
        return _this;
    }
    return FooChild;
}(FooBase));
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return BaseEmployee;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    Employee.prototype.doWork = function () {
        console.log(this.lastName + ", " + this.firstName + " doing work...");
    };
    return Employee;
}(BaseEmployee));
var emp = new Employee('Dana', 'Ryan');
emp.doWork();
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
var Something = /** @class */ (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2
