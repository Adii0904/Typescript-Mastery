let user: {
  name: string;
  age?: number; //age optional hoga
  email: string;
} = {
  name: "the-script-sage",
  email: "sage54@gmail.com",
};
const users = [user];

let secondUser: {
  name: string;
  age?: number;
  email: string;
  address: string;
} = {
  name: "arpita",
  age: 22,
  email: "arpita@gmail.com",
  address: "@12Delhi",
};

let allUsers: {
  name: string;
  age?: number;
  email: string;
  address: string;
}[] = [secondUser, secondUser];

console.log(allUsers);
