export {};

class Person{
    // constructorメソッドに引数としてアクセス修飾子をつけると、初期化ができる
    constructor(public name: string, protected age: number){

    }
}

const me = new Person('hamusan', 43)
console.log(me)