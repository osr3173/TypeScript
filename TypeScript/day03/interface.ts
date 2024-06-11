type juice = {
  kcal: number;
  name: string;
};

// Hybrid Type
type Carbonated = {
  gas: number;
  color: string;
};
type SoftDrink = juice & Carbonated;
// const coke:SoftDrink={}

interface Fruit {
  name: string;
  kcal: number;
}
// intersection에 가까움 (and)
interface TropicalFruit extends Fruit {
  sugarLevel: Number;
}

const tomato: Fruit = {
  name: "토마토",
  kcal: 10,
};

const Mago: TropicalFruit = {
  name: "망고",
  kcal: 150,
  sugarLevel: 3,
};
