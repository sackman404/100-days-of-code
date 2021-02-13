export {};

class VisaCard{
    // readonly _owner: string;

    // readonlyは、typescriptでは自明的にpublicをつける必要はないが、publicをつけたほうが可読性が上がるため、つけたほうが良い。
    constructor(public readonly _owner: string){
        // this._owner = owner;
    }
}

let myVisaCard = new VisaCard("Taro")
console.log(myVisaCard)