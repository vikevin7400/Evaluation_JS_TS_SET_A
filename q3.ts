class Product{
    productid:number;
    productname:string;
    price:number;
    category:string;

    constructor(productid:number,productname:string,
    price:number,
    category:string) {
        this.productid = productid
        this.productname = productname
        this.price = price
        this.category = category
    }
     displayInfo() {
        console.log(this.productid+" "+this.productname+" "+this.price+" "+this.category);
        
    }
}

const obj = new Product(22,"iphone",234567,"smartphones");
obj.displayInfo();
