interface myObj {
  name: string;
  age: number;
  readonly brand: string;
  price: number[];
}

const myBrand: myObj = {
  name: "",
  age: 3,
  brand: "dsfd",
  price: [43, 67, 7],
};

//interface with union;

interface interfaceUnion {}

//union of 2 interfaces;
interface myUnion extends myObj {
  bottleColor: string;
}
