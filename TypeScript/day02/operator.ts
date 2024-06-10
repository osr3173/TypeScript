// union[=or] : '|'

const user: string | number = "1";

const login: boolean | null = false;

const box: Element | null = document.querySelector(".box"); //

// 개 - 푸들, 시바, ...
// Element - div, section, input, button
// const NewDiv: Element = document.createElement("div");
const NewDiv: HTMLDivElement = document.createElement("div");

// 커피가게 -> {name, price, shot} or {name, price, kcal} -> Type annotation 선언
// object 중 둘중 하나만 선언
const coffee:
  | { name: string; price: number; shot: number }
  | { name: string; price: number; kcal: number } = {
  name: "아아",
  price: 2000,
  shot: 3,
};

//intersection [=and] : '&'
// never: 있을수가 없음
// unknown: 몰?루
// const b: string & number=  -> never

// () => type: 함수 지정 타입

// solid 원칙 : 저수준 모듈 => 고수준 모듈 만들기
// ex) [타이어 ,엔진,벨트,시트] => 자동차
const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "김타입",
  age: 21,
  eat: () => {
    console.log("야미");
  },
};
