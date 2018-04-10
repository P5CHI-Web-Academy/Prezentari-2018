// ----------------------------------------------------------------------------------
// Boolean
// ----------------------------------------------------------------------------------

var isTrue: boolean = true;
var isFalse = false;


// ----------------------------------------------------------------------------------
// Number
// ----------------------------------------------------------------------------------
var myNumber: number = 12;
var alsoMyNumber: number = 12.05;


// ----------------------------------------------------------------------------------
// String
// ----------------------------------------------------------------------------------

var myString: string = 'This is a string';
var myStringWithTemplate = `1 + 2 = ${ 1 + 2 }`;


// ----------------------------------------------------------------------------------
// Array
// ----------------------------------------------------------------------------------

var arrayOfNumbers: number [] = [1, 2, 3];
arrayOfNumbers = [3, 4, 5, 6, 7, 8, 9];
console.log(`arrayOfNumbers: ${arrayOfNumbers}`);
// generates a compile error
//arrayOfNumbers = ["1", "2", "3"];
console.log(`arrayOfNumbers: ${arrayOfNumbers}`);


// ----------------------------------------------------------------------------------
// Inferred typing
// ----------------------------------------------------------------------------------

var inferredString = "this is a string";
var inferredNumber = 1;

// causes compilation errors
//inferredString = inferredNumber;

// ----------------------------------------------------------------------------------
// Duck typing
// ----------------------------------------------------------------------------------

var complexType = {name: "myName", id: 1};
complexType = {id: 2, name: "anotherName"};

// generates a compile error
// complexType = { id: 1};
//complexType = { name : "extraproperty", id : 2, extraProp: true };

// ----------------------------------------------------------------------------------
// Object rest and spread
// ----------------------------------------------------------------------------------
let firstObj = {id: 1, name: "firstObj"};

let secondObj = {...firstObj};
console.log(`secondObj.id : ${secondObj.id}`);
console.log(`secondObj.name : ${secondObj.name}`);

let nameObj = {name: "nameObj"};
let idObj = {id: 2};

let obj3 = {...nameObj, ...idObj};
console.log(`obj3.id : ${obj3.id}`);
console.log(`obj3.name : ${obj3.name}`);

let obj4 = {...firstObj, ...idObj};
console.log(`obj4.id : ${obj4.id}`);
console.log(`obj4.name : ${obj4.name}`);


// ----------------------------------------------------------------------------------
// Tuples
// ----------------------------------------------------------------------------------

let x: [string, number];
x = ["hello", 10];

type ErrorCode = [string, number];

function submitContent(text: string, urlPath: string): ErrorCode {
    return ['error', 400];
}

let text = 'My text';
let urlPath = 'https://google.com';

const httpStatus: ErrorCode = submitContent(text, urlPath);
console.log(httpStatus);
//(2) ["error", 400]