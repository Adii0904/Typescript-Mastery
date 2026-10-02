let num: number = 89;
let var1: any;
var1 = "aditya";
var1 = "arpita";

//var1 = ["aditya", "arpita", "priya"];
console.log(num);
console.log(var1.toUppercase());

let var2: unknown;
var2 = "arpita";
if (typeof var2 === "string") {
  console.log(var2.toUpperCase());
}
