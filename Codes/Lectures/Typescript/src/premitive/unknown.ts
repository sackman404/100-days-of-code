export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkown: unknown = kansu();

let subAny = numberAny + 10;

// このように、unknown型の変数を使用する場合は、「タイプガード」で意図しない型の変数が入らないようにする
if (typeof numberUnkown == 'number') {
    let sumUnknown = numberUnkown + 10;
}
// let sumUnknown = numberUnkown + 10;