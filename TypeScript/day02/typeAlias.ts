// type[타입] Alias[닉]

// 리터럴 타입
type Genre = "키덜트" | "호러" | "코믹" | "멜로" | "범죄" | "가족";
type Grade = "전체" | "12세" | "15세";

type Movie = { name: string; genre: string[]; grade: string };

const insideout2: Movie = {
  name: "인사이드 아웃",
  genre: ["키덜트", "가족"],
  grade: "전체",
};

type movieName = "범죄도시4" | "인사이드 아웃" | "원더랜드" | "드라이브";

const Drive: Movie = {
  name: "드라이브",
  genre: ["호러"],
  grade: "15세",
};

const wonderLand: Movie = {
  name: "원더랜드",
  genre: ["멜로"],
  grade: "12세",
};

const CGV: Movie[] = [
  {
    name: "드라이브",
    genre: ["호러", "범죄"],
    grade: "15세",
  },
  {
    name: "원더랜드",
    genre: ["멜로"],
    grade: "12세",
  },
  {
    name: "인사이드 아웃",
    genre: ["키덜트", "가족"],
    grade: "전체",
  },
];

CGV.map((v) => {
  v.genre.forEach((v) => console.log(v));
});

// Unit HP, skill, name, 공격함수

// type Unit = {
//   HP: number;
//   skill: String[];
//   name: string;
//   attack: (target: Unit) => number;
// };

// const bulldog: Unit = {
//   HP: 800,
//   skill: ["미스트", "에너지 볼트"],
//   name: "불독",
//   attack: () => {
//     console.log();
//   },
// };

type Ice = {
  name: string;
  material: string[];
  allergy: string[];
  kcal: number;
};

const armonde: Ice = {
  name: "피스타치오 아몬드",
  material: ["피스타치오", "아몬드"],
  allergy: ["우유"],
  kcal: 302,
};

const MomisAlien: Ice = {
  name: "엄마는 외계인",
  material: [
    "밀크초콜릿",
    "화이트 무스",
    "다크초콜릿",
    "초콜릿칩",
    "초콜렛프레첼",
  ],
  allergy: ["우유", "대두", "밀"],
  kcal: 302,
};

const greentea: Ice = {
  name: "그린티",
  material: ["그린티"],
  allergy: ["우유"],
  kcal: 245,
};

const NewYork: Ice = {
  name: "뉴욕 치즈케익",
  material: ["치즈", "그라함 크래커"],
  allergy: ["우유", "대두", "밀"],
  kcal: 295,
};

const Bera: Ice[] = [
  {
    name: "그린티",
    material: ["그린티"],
    allergy: ["우유"],
    kcal: 245,
  },
  {
    name: "엄마는 외계인",
    material: [
      "밀크초콜릿",
      "화이트 무스",
      "다크초콜릿",
      "초콜릿칩",
      "초콜렛프레첼",
    ],
    allergy: ["우유", "대두", "밀"],
    kcal: 302,
  },
  {
    name: "피스타치오 아몬드",
    material: ["피스타치오", "아몬드"],
    allergy: ["우유"],
    kcal: 302,
  },
  {
    name: "뉴욕 치즈케익",
    material: ["치즈", "그라함 크래커"],
    allergy: ["우유", "대두", "밀"],
    kcal: 295,
  },
];

// Bera.map((v) => {
//   v.name.forEach((v) => console.log(v));
//   v.material.forEach((v) => console.log(v));
//   v.allergy.forEach((v) => console.log(v));
//   v.kcal.forEach((v) => console.log(v));
// });

type Cat = "IceCream" | "Cake" | "Cookie";
type allergies = "우유" | "대두" | "계란" | "땅콩" | "밀" | "복숭아";
type photourl = { url: string };
type Icon = { url: string } & photourl;

type IceCreamPro = {
  category: Cat;
  EngName: String;
  KorName: string;
  description: string;
  mainIngredient: Icon[];
};

type NutritionInfo = {
  serving: number;
  kcal: number;
  sugar: number;
  protein: number;
  transFat: number;
  salt: number;
  allergies: [];
};

type Icecream = IceCreamPro & NutritionInfo & photourl;

const makeIceCreamJumboTron = (data: IceCream) => {
  return `<div>${data.url}</div>`;
};

// 결합  -> 무조건 있어야함
type IceCream = IceCreamPro & NutritionInfo & photourl;

// 포함 => 부분적

type IceCreamComposition = {
  IceCreamPro: IceCreamPro;
  Nutrition: NutritionInfo;
  photourl: photourl;
};

// 함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의

// const sum = [1, 2, 3, 4].reduce((a, c) => a + c);

// const GenreinText = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     v.genre.reduce((a, c) => a + c);
//   });
// };

// 리터럴 타입
const makeMsgAlign = (msg: string, align: "center" | "satrt" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};

makeMsgAlign("점메추", "center");
