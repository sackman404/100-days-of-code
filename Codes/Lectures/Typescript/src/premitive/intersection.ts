export {};

type Picture1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const Daimazinsasaki: Picture1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
};

// type TwoWayPlaer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };

type TwoWayPlaer = Picture1 & Batter1;

const OotaniShohei: TwoWayPlaer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}