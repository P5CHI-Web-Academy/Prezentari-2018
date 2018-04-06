// ----------------------------------------------------------------------------------
// Enums
// ----------------------------------------------------------------------------------

enum DoorState {
    Open = 1,
    Closed = 2,
    Ajar = "String"
}

var openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is : ${closedDoor}`);

var ajarDoor = DoorState[2];
console.log(`ajarDoor is : ${ajarDoor}`);


enum HTTP { 
    POST,
    GET,
    UPDATE,
    DELETE
}

function request(methodType: HTTP): void { 
    console.log(methodType);
}


request(HTTP.POST);

HTTP.POST = 'String';


function startGame() {
    throw DOMException;
}
