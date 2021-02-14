export {};

let name = 'Taro';

name = 'Michle';

let nickname = 'Ham' as const;
// nickname = 'Geodan';

// ネストされている全ての要素をreadonlyにしてくれる
let profile = {
    name: 'Atsushi',
    height: 180
} as const;


// profile.name = 'Ham';