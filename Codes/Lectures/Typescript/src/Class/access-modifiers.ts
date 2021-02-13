export {};
// アクセス修飾子
class Person{
    public name: string;
    private age: number;
    protected nationality: string;

    constructor(name: string, age: number, natinarity: string){
        this.name = name;
        this.age = age;
        this.nationality = natinarity
    }

    profile(): string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Androdi extends Person{
    constructor(name: string, age: number, nationarity: string){
        super(name, age, nationarity);
    }

    profile(): string{
        return `name: ${this.name}, age: ${this.age}, nationarity: ${this.nationality}`;
    }
}
let taro = new Person('Taro', 30, 'Japan');

console.log(taro.profile());
// console.log(taro.name);
// console.log(taro.age);