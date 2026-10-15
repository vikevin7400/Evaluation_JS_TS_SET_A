
class InvalidProductException extends Error{

    constructor(message) {
        super(message);
        this.message = "InvalidProductException"
    }
}

function fetchProd(pid) {
    try {
        if (pid !== 12) {
            throw new InvalidProductException("invalid product id");
            
        } else {
            console.log("the product fetch successful");
            
            
        }
    } catch (error) {
        console.log(error.message);
        
        
    }
}

fetchProd(13)