type StringorNumber = string | number; //ye shortcut h string  number ki jagah ham likh sakte h
type StringorBoolean = string | boolean;
let id: StringorNumber = 89;

function combineNumber(num1: StringorNumber, num2: StringorNumber) {
  if (typeof num1 === "number" || typeof num2 === "number") {
    return num1.toString() + num2.toString();
  }

  return num1 + num2;
}

const res = combineNumber(34, 78);
console.log(res);

//type alias;
type Aditya = number;
let value: Aditya = 78;

//& intersection;
type Newtype = StringorNumber & StringorBoolean; //ham sirf common type le sakte h ex-> string common h
type NewType2 = StringorBoolean | StringorNumber;

let myNum: Newtype = "true";
let myNum2: NewType2 = true; //esme h khuch bhi de sakte h;

//ham kisi object ka bluePrint bana sakt hian, usko har jagah use karne ke liye;

//basics userDetails;

//ye mera el bluepring ho gaya h
type User = {
  name: string;
  age: number;
  readonly email: string; //esko ham sirf padh read kar sake h;
  //optional propery;
  phone?: number;
};

type Student = User & {
  enrolledId: string[];
};

const myUser2: User = {
  name: "aradhaya",
  age: 22,
  email: "aradhaya@gmail.com",
};

const myUser: User = {
  name: "aditya",
  age: 34,
  email: "aditya@gmail.com",
  phone: 6767,
};

const studentDetails: Student = {
  age: 32,
  phone: 567,
  name: "priya",
  email: "",
  enrolledId: ["id1"],
};

//now work with function blue print;

type SumFunctionArrow = (num1: string, num2: number) => number;

type SumNumber = (num1: number, num2: number, num3: number) => number;

// एक फ़ंक्शन जो SumNumber टाइप के अनुरूप है
const addThreeNumbers: SumNumber = (a, b, c) => {
  return a + b + c;
};

// इसे इस्तेमाल करना
console.log(addThreeNumbers(10, 20, 30)); // Output: 60

// एक और फ़ंक्शन जो SumNumber टाइप के अनुरूप है
const multiplyAndAdd: SumNumber = (x, y, z) => {
  return x * y + z;
};

console.log(multiplyAndAdd(5, 2, 7)); // Output: 17 (5 * 2 + 7)
