let product = [{
    pname: "samsung",
    customer: "shubhma",
    shipping_add: "bhyandar"
},
{
    pname: "laptopo",
    customer: "shubh",
    shipping_add: "borivali"
},
{
    pname: "television",
    customer: "siddesh",
    shipping_add: "boisar"
}
]

const [first,second,third] = product;
console.log(first);

const {pname,customer,shipping_add} = first;
console.log(pname);
console.log(customer);
console.log(shipping_add);

