const mysql = require("mysql2");
const { log } = require("node:console");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"qadb"
})
    
function dbConnect() {
    db.connect((err)=>{
        if (err) {
            console.log(err);
            
        } 
    })
    
}

dbConnect();


// function insertData(pname,category,price,stock) { 
//     const data ={pname,category,price,stock}
//     db.query("insert into products set?",data,(err) => {
//         if (err) {
//             console.log(err);
            
//         }else{
//             console.log("data inserted successful");
            
//         }

        
//     })
// }
// insertData("iphone","smartphones",123123,2);

// function updateData(pname,category,price,stock,pid) {
//     db.query("update products set pname=?,category=?,price=?,stock=? where pid=?",[pname,category,price,stock,pid],(err) => {
//        if (err) {
//             console.log(err);
            
//         }else{
//             console.log("data update successful");
            
//         }
        
//     })
// }

// updateData("samsung","smartphone",12313,4,2);


// function deletData(pid) {
//     db.query("delete from products  where pid=?",[pid],(err) => {
//        if (err) {
//             console.log(err);
            
//         }else{
//             console.log("data deleted successful");
            
//         }
        
//     })
// }


// deletData(3)


function Show() {
    
   try {
     db.query("select * from products",(err,data) => {
        if (err) {
            console.log(err);
            
        } else {
            console.log(data);
            
            
        }
        
    })
   } catch (error) {
    console.log(err);
    
    
   }
}

Show();