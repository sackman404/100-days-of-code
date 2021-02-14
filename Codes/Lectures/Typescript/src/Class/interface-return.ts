export {};

class Mahotsuki{}
class Souryo{}

class Taro extends Mahotsuki{}

interface Kenja{
    ionazun(): void;
}
interface Senshi{
    kougeki(): void;
}

class Jiro implements Kenja, Senshi{
    ionazun(): void{
        console.log('ionazun!!')
    }

    kougeki(): void{
        console.log('kougeki!!')
    }
}