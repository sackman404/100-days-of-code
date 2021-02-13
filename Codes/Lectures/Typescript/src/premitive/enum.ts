export {};

enum Months {
    // ここに列挙しているには、キーバリューとなる
    January = 1,
    February,
    March,
    Aplil,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
    red = '#FF0000',
    white = 'FFFFFF',
    green = '#00800',
    // yellow = '#FFFF00',
    blue = '#0000FF',
    black = '#000000'
}

let green = COLORS.green;
console.log({green});

enum COLORS {
    yellow = '#FFFF00'
    // gray
}

COLORS.yellow;