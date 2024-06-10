type coffee = {
  [key: string]: number;
};

type person = {
  name: string;
  age: number;
  nation?: string; // optional
};

const kim: person = {
  name: "김씨",
  age: 22,
  nation: "한국",
};

const test: coffee = {
  // 타입 : string
  name: 1,
  shot: 2,
  kacl: 3,
};

type Unit = {
  [key: string]: string | number | null | undefined;
  hp: number;
  name: string;
  pet?: string;
};

type Bread = {
  name: string;
  price: number;
};

type KeyofBread = keyof Bread; // 'name' | 'price'    -> type이 name 이거나 price
const apple: KeyofBread = "price";
