const getSomething2 = <T>(something: T) => {
  return `${something}을 얻습니다.`;
};

type Pair<T, U> = { first: T; second: U };

const test1: Pair<string, boolean> = {
  first: "치킨",
  second: false,
};

type Coffee1 = {
  name: string;
  price: number;
};

type Cookie = { name: string; price: number };

const subwaymorningset: Pair<Coffee1, Cookie> = {
  first: { name: "아아", price: 2500 },
  second: { name: "화이트 쿠키", price: 2000 },
};

// 기능 안에 기능 넣을 때
// const subwaymorningset: Pair<Coffee1, Pair<Cookie, Cookie>> = {
//   first: { name: "아아", price: 2500 },
//   second: {
//     first: { name: "블랙쿠키", price: 3000 },
//     second: { name: "머랭쿠키", price: 1000 },
//   },
// };

// Triple 타입
// 햄버거 타입
// 사이드 타입
// 음료 타입
type Triple<T, U, V> = { Hamburger: T; side: U; drink: V };

type Hamburger = { name: string; price: number };
type side = { name: string; price: number };
type drink = { name: string; price: number };

type Coffee2 = { name: string; price: number; coffaein: boolean };

const burgerset1: Triple<Hamburger, side, drink | Coffee2> = {
  Hamburger: { name: "상하이버거", price: 6000 },
  side: { name: "감튀", price: 3000 },
  drink: { name: "제로콜라", price: 2000 },
};

type Success1<T> = { type: "success"; value: T };
type Fail1 = { type: "fail"; value: string };

type Respone_<T> = Success1<T> | Fail1;
const getResponse = (res: Respone_<string[]>) => {
  if (res.type == "success") {
    res.value.forEach((v) => console.log(v));
  } else {
    console.log(res.value.toUpperCase());
  }
};

getResponse({
  type: "success",
  value: ["자바", "파이썬", "코틀린", "타입스크립트"],
});

type Won = `${string}원`;
type Yen = `${string}엔`;
type dollar = `${string}달러`;

type Gusetname = `${string}님`;

const shampoo: Won | Yen = `100엔`;

const choi: Gusetname = "최님";
