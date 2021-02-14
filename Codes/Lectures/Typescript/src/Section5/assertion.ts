export {};

let name: any = 'Ham';

// let length = name.length as number;

let length = (name as string).length;

// 非推奨な使い方
// let length = (<string>name).length;

console.log(length)

// length = 'a'

