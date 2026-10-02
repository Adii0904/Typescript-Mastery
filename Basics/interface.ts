//we will exploring about the interfaces and its protocol

interface info {
  name: string;
  age: number;
  subject: string;
  school: string;
}

interface detils extends info {
  rollno: number;
}

const singleStudent: info = {
  name: "sam",
  age: 34,
  subject: "physics",
  school: "khuch bhi",
};

const studentDetails: detils = {
  name: "priya",
  age: 23,
  subject: "maths",
  school: "shanti Nketan",
  rollno: 34,
};

console.log(studentDetails);
console.log(singleStudent);
