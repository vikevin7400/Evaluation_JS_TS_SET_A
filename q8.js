"use strict";
class CustomerSupportAgent {
    name;
    employeeid;
    department;
    experience;
    constructor(name, employeeid, department, experience) {
        this.name = name;
        this.employeeid = employeeid;
        this.department = department;
        this.experience = experience;
    }
    displayInfo() {
        console.log("name:" + this.name + " employeeid " + this.employeeid + " department " + this.department + " experience " + this.experience);
    }
}
const obj = new CustomerSupportAgent("vinay", 12, "it", "4 years");
obj.displayInfo();
