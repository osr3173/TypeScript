// generic :generalize 입구컷

type Fruit1 = {
  name: string;
  kcal: number;
};
// T : 너가 type 지정해라
function getSomething<T>(something: T) {
  console.log(`${something}을 얻었습니다.`);
}
getSomething<string>("과일");
getSomething<number>(100);
getSomething<boolean>(true);

getSomething<string | number>(1);
getSomething<string | number>("엄");

// const getSomething<T>=(something)=>{
//     console.log(`${something}을 얻었습니다.`);

// }

const getSomething1 = <T>(something: T) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingNumber = (something: number) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingString = (something: string) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingBoolean = (something: boolean) => {
  console.log(`${something}을 얻었습니다.`);
};
