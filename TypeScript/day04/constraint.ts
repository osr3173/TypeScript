// constraint[제약,규제]

type MainColor = "Pink" | "Red" | "Orange";
type Fontsize = 16 | 20;

type WarningButton<T extends MainColor> = {
  backgroundColor: T;
  fontsize: Fontsize;
};

const testBtn = document.createElement("button");

const button: WarningButton<"Pink"> = { backgroundColor: "Pink", fontsize: 20 };

testBtn.style.backgroundColor = button.backgroundColor;

type ID = string | number;
type Entity<T extends ID> = { id: T; password: string };

const admin: Entity<string> = { id: "koreaIT", password: "q1w2e3r4" };

//type assertion: 타입 단언[확신]
//document.querySelector(".box")-> type : Element or null
const box1 = document.querySelector(".box") as Element;
const box2 = document.querySelector(".box") as HTMLDivElement;
