const calculator = {
    name: "Sachin",
    num: 55,
    add: function(a,b){return a+b;},
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
console.log(calculator.name);
console.log(calculator.num);
console.log(calculator.add(5,7));
console.log(calculator.sub(15,7));
console.log(calculator.mul(5,17));