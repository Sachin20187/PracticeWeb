// let game = [['X',null,'O'], [null,'X',null], ['O',null,'X']];
// console.log(game);

//-----------Q1----------
// let arr = [7,9,0,-2];
// let n = 3;
// console.log(arr.slice(0,n));

//-----------Q2----------
// let arr = [7,9,0,-2,8,79,6];
// let n = 3;
// console.log(arr.slice(arr.length-n));

//------------Q3----------
// let str = prompt("Enter a string");
// console.log(str.length);
// if(str.length == 0){
//     console.log("String is blank");
// }else{
//     console.log("String is not blank");
// }

//------------Q4-----------
// let str = "RamayAna";
// let n = 5;
// let a = str[n];
// let b = str[5].toLowerCase();
// console.log(a === b);
// console.log(str[n] != str[5].toLowerCase());

//------------Q5-------------
// let str= "  Sachin     ";
// console.log(str.trim());

//-------------Q6------------
let arr = ["hello",'a',26,74];
let item = 26;

if(arr.indexOf(item) != -1){
    console.log("Item exists");
}else{
    console.log("Item not found");
}
