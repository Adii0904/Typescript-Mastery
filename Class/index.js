var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = "iPhone";
        this.price = 1000;
        this.quantity = 2;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getPrice = function () {
        console.log(this.price);
    };
    return Product;
}());
//making the instace of the calss
var myProduct = new Product("samasung23", 2000, 3);
var product2 = new Product("xiomi", 399, 9);
var product3 = new Product("moto", 345, 8);
//for ts config file  npx tsc --init
