type v1 = (options?: any, anotherOption?: any) => string;
type v4 = (options?: any) => string;
type v5 = (options?: any) => string;

interface UuidStatic {
    v1: v1;
    v4: v4;
    v5: v5;
}

declare  module 'uuid'{
    const uuid: UuidStatic & v4;
    export = uuid;
}
