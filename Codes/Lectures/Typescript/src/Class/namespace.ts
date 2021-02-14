export {};

namespace Japanese{
    export namespace Tokyo{
        export class Person{
            constructor(public name: string){}
        }
    }
    export namespace Osaka{
        export class Person{
            constructor(public name: string){}
        }
    }
}

namespace English{
    export class Person{
        constructor(
            public firstName: string, 
            public midleName: string, 
            public lastName: string
        ){}
    }
}


const me_Tokyo = new Japanese.Tokyo.Person('Taro');
console.log(me_Tokyo);
const me_osaka = new Japanese.Osaka.Person('Taro');
console.log(me_osaka);

const english_me = new English.Person('Michel', 'Jacson', 'Pepper');
console.log(english_me)