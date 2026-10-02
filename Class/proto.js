function Creature(name) {
  this.name = name;
}

Creature.prototype.identity = function () {
  console.log(this.name);
};

function breed() {
  console.log("hey");
}

console.log(breed.prototype);
//define fish as a contructor;

function Fish(names) {
  Creature.call(this, names);
}

Fish.prototype = Object.create(Creature.prototype); // "Fish naam ke constructor ka prototype banado ek aisa object jo Creature.prototype se inherit karta ho."
Fish.prototype.constructor = Fish;

Fish.prototype.swim = function () {
  console.log("my fish is swimming", this.name);
};

const goldieFish = new Fish("goldie");
goldieFish.swim();
goldieFish.identity();
