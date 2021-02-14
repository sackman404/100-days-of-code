export {};

class Dinasor{
    constructor(public name: string){}

    run(): string{
        return 'I can run';
    }
}

class Bionics extends Dinasor{
    constructor(public name: string, public speed: number){
        super(name);
    }

    run(): string{
        const parentMessage = super.run();
        console.log({parentMessage});
        return `I can run ${this.speed}km`
    }
}

let animal = new Dinasor('shinba');
console.log(animal.run())

let bionics = new Bionics('taro', 60);
console.log(bionics.run())