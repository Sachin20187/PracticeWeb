const sum = (a=5,b) =>{
    return a+b;
};
console.log(sum(5));// if we give one argument it assigns value for a then b will be empty and will give output 'Nan'
//------------------------------------
const sum2 = (a,b=4) =>{
    console.log(a+b);
};
sum2(4,6);//this will give coorect output because here we have resassigned a than assigned b
//------------------------------------
function mul(a,b=5){
    console.log(a*b);
}
mul(4);