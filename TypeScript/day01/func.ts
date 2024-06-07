// function 선언시 type 지정해줘야 함

function add(x: number, y: number): number {
  return x + y;
}

// truthy or falsy 해주는 함수 만들기 (string) => boolean

function TF(a: string): boolean {
  return !!a;
}

// const minus = (x: number, y: number): number => x - y;
// console.log(minus(10, 5));

// 태어난 년도, 띠
// 년도 입력받아 -> 띠 알려주기,  띠 입력 -> 년도 반환

const makeZodiac = (year: number): string => {
  const zodiac = [
    "원숭이",
    "닭",
    "개",
    "돼지",
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
  ];
  const animal = zodiac[year % 12];
  return animal + "띠";
};
console.log(makeZodiac(2024));
//----------------------------------------------------------------------------
// 수정해보기
function YearToAni(x: number): string {
  if (x % 12 == 0) {
    return "쥐";
  } else if (x % 12 == 1) {
    return "소";
  } else if (x % 12 == 2) {
    return "호랑이";
  } else if (x % 12 == 3) {
    return "토끼";
  } else if (x % 12 == 4) {
    return "용";
  } else if (x % 12 == 5) {
    return "뱀";
  } else if (x % 12 == 6) {
    return "말";
  } else if (x % 12 == 7) {
    return "양";
  } else if (x % 12 == 8) {
    return "원숭이";
  } else if (x % 12 == 9) {
    return "닭";
  } else if (x % 12 == 10) {
    return "개";
  } else if (x % 12 == 11) {
    return "돼지";
  }
}
YearToAni(1999);

function AniToYear(y: string): number {
  if (y == "쥐") {
    return 0;
  } else if (y == "소") {
    return 1;
  } else if (y == "호랑이") {
    return 2;
  } else if (y == "토끼") {
    return 3;
  } else if (y == "용") {
    return 4;
  } else if (y == "뱀") {
    return 5;
  } else if (y == "밀") {
    return 6;
  } else if (y == "양") {
    return 7;
  } else if (y == "원숭이") {
    return 8;
  } else if (y == "닭") {
    return 9;
  } else if (y == "개") {
    return 10;
  } else if (y == "돼지") {
    return 11;
  }
}
AniToYear("토끼");
//----------------------------------------------------------------------------------------------------------------
// 숫자 뒤집기
// n의 배열 역순 반환
const reverseNumber = (num: number): number[] =>
  [...String(num)].reverse().map((v) => Number(v));
console.log(reverseNumber(12345));
// ----------------------------------------------------------------------------------------------------------------
// 수정해보기
function des(n: number) {
  return Array.from({ length: n }, (v, i) => i + 1).reverse();
}
des(5);

// 짝수 시름
// n이하의 짝수 배열로 반환
const hateEven = (n: number) =>
  Array(n + 1)
    .fill(0)
    .map((_, i) => i)
    .filter((v) => v % 2);

console.log(hateEven(15));
//------------------------------------------------------------------------------------------
// 코드 짜보기
