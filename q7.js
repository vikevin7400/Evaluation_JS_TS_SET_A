"use strict";
class Category {
    categoryid;
    categoryname;
    description;
    constructor(categoryid, categoryname, description) {
        this.categoryid = categoryid;
        this.categoryname = categoryname;
        this.description = description;
    }
    displayInfo() {
        console.log(this.categoryid, this.categoryname, this.description);
    }
}
const obj = new Category(21, "smartphone", "the smartphones");
obj.displayInfo();
