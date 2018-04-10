namespace InternalModule {
    export function add(...args: number[]): number {
        return args.reduce((acc, cur) => acc + cur, 0);
    }
}

console.log(InternalModule.add(1, 2, 3, 4));

export function add(firstNum: number, secondNum: number): number {
    return InternalModule.add(firstNum, secondNum);
}