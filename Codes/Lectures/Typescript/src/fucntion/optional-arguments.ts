export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number, 
    weight: number,
    printable?: boolean
): number =>  {
    const bmi: number = weight / (height * height);

    if (printable) {
        console.log({bmi})
    }
    return bmi;
}

bmi(1.78, 86);

// bmi(身長, 体重, cosoleで出力するかどうか?)
// この３パターンで使用できる様にする
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);