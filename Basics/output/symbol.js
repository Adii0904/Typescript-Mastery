"use strict";
//symbol unique value store karte h
const sym1 = Symbol("id");
const sym2 = Symbol("id1");
const obj = {
    [sym2]: 600,
    userName: "priya",
};
console.log(obj[sym2]);
