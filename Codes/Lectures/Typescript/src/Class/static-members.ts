export {};

class Me{
    static isProgramer: boolean = true;
    static firstName: string = 'Tanaka';
    static lastName: string = 'Taro';

    static work(){
        return `Hey, guys! this is ${this.firstName} Are you intrested in TypeSript?`;
    }
}

// let me = new Me();
// console.log(me.isProgramer);

console.log(Me.isProgramer);
console.log(Me.work());