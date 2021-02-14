export {};

class Mirror<T>{
    constructor( public value: T ){

    }

    echo(): T{
        return this.value
    }
}

// const echo = (arg: number): number => {
//     return arg;
// };

// const echo = (arg: string): string =>{
//     return arg;
// };

// T: 型引数とよばれる
const echo = <T>(arg: T): T =>{
    return arg;
};

console.log(echo<string>('Taro'));
console.log(echo<number>(23));

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('Taro').echo())