export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// オーバーロードでは、any型で定義する。型定義は、シグネチャでやっている。
function double(value: any): any{
    if( typeof(value) == 'string'){
        return value + value;
    }else if(typeof(value) == 'number'){
        return value * 2;
    } 
}

// function double(value: string): string{
//     return value + value;
// }

console.log(double(100));
console.log(double('Go '))

// シグネチャで定義した型以外のものを代入しようとすると、コンパイルエラーとなって実行できない
// console.log(double(true))