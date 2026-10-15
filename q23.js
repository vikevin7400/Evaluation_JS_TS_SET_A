const price = [12000,2300,50000,80000];
function filterExpensiveProducts() {
    return price.filter((price)=>{
        return price>40000;
    })
}

filterExpensiveProducts(price);
