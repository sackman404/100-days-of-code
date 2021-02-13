export {};


function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test')
    console.log({result})
} catch (error) {
    console.log({error});
}

let foo: void = undefined
// 例外処理でneverを使うという風に覚えること
let bar: never = error('only me!')
