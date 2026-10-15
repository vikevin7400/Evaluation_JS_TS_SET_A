"use strict";
class Product {
    productid;
    productname;
    price;
    category;
    constructor(productid, productname, price, category) {
        this.productid = productid;
        this.productname = productname;
        this.price = price;
        this.category = category;
    }
    displayInfo() {
        console.log(this.productid + " " + this.productname + " " + this.price + " " + this.category);
    }
}
const obj = new Product(22, "iphone", 234567, "smartphones");
obj.displayInfo();
