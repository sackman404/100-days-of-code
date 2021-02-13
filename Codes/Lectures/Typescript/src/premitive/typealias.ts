export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
    name: string;
    age: number;
}

const example1: Profile = {
    name: 'hann',
    age: 43
};

// このやり方が効率的である
type Profile2 = typeof example1;