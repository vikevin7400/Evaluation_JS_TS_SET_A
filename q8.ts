class CustomerSupportAgent{
    name:string;
    employeeid: number;
    department: string;
    experience: string;

    constructor(name:string,
    employeeid: number,
    department: string,
    experience: string) {
        this.name = name
        this.employeeid = employeeid
        this.department =department
        
        this.experience = experience
    }
    displayInfo() {
        console.log("name:"+this.name+ " employeeid "+this.employeeid+" department "+this.department+" experience "+this.experience);
        
    }
}

const obj = new CustomerSupportAgent("vinay",12,"it","4 years")
obj.displayInfo();