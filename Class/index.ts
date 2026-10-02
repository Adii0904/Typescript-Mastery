class Product {
  name: String = "iPhone";
  price: Number = 1000;
  quantity: Number = 2;

  constructor(name: String, price: Number, quantity: Number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getPrice() {
    console.log(this.price);
  }
}

//making the instace of the calss
const myProduct = new Product("samasung23", 2000, 3);
const product2 = new Product("xiomi", 399, 9);
const product3 = new Product("moto", 345, 8);
//for ts config file  npx tsc --init
