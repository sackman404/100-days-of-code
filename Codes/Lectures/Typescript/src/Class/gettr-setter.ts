export {};

// owner
//  * 所有者の管理。
//  * 初期化時に設定できる。
//  * 途中で変更できないもの。
//  * 参照できる。
// * secretnumber
//  * 個人番号。
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MynumberCard{
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number){
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner(){
        return this._owner;
    }

    set secretNumber(secretNumber: number){
        this._secretNumber = secretNumber;
    }

    debugPrint(){
        return `secretNumber: ${this._secretNumber}`
    }
}

let card = new MynumberCard('Taro', 1234567890);
console.log(card.owner)

card.secretNumber = 123345
console.log(card.debugPrint())