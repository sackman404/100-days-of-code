export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncomparative: string;
let barIncomparative: number;

// fooIncomparative = barIncomparative;

let fooString: string
let barString: string = 'string'
