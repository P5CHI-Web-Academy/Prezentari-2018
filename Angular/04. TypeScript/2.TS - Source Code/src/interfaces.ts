// ----------------------------------------------------------------------------------
// Interfaces
// ----------------------------------------------------------------------------------

function funcWithComplexType(someParam: any, type: { id: number, name: string }): { id: number, name: string } {
    return {
        id: 1,
        name: 'Test'
    };
}


interface IComplexType {
    id: number;
    name: string;
    surname: string;
}

function funcWithComplexTypeInterfaces(someParam: any, type: IComplexType): Partial<IComplexType> {
    return {
        //id: 1,
       // name: 'Test'
    };
}

// Optional properties
// ===================
interface IOptionalProp {
    id: number;
    name?: string;
}

let idOnly: IOptionalProp = {id: 1};
let idAndName: IOptionalProp = {id: 2, name: "idAndName"};

idAndName = idOnly;
