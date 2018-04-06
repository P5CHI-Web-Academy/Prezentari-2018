// ----------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------

function addNumbers(a: number, b: number): string {
    // generates a compile error
    // return (a + b);
    return (a + b).toString();
}

var addResult = addNumbers(2, 3);
console.log(`addNumbers returned : ${addResult}`);


// Rest parameters
function testArguments(...argArray: number []) {
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log(`argArray[${i}] = ${argArray[i]}`);
            // use JavaScript arguments variable
            console.log(`arguments[${i}] = ${arguments[i]}`)
        }
    }
}

testArguments(9);
testArguments(1, 2, 3);


// Function overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(`add(1,1)= ${add(1, 1)}`);
console.log(`add("1","1")= ${add("1", "1")}`);
