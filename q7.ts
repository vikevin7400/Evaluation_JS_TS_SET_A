class Category{
    categoryid:number;
    categoryname:string;
    description:string;
    constructor(categoryid:number,
    categoryname:string,
    description:string) {
        this.categoryid = categoryid
        this.categoryname = categoryname
        this.description = description
    }
     displayInfo() {
        console.log(this.categoryid,this.categoryname,this.description);
        
        
    }
}

const obj = new Category(21,"smartphone","the smartphones")
obj.displayInfo();