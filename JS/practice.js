//=======Q1===========
// let num =505;
// if(num%10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

//---------Q2------------
// let username = prompt("Enter your name");
// let age = prompt("Enter your age");
// console.log(`${username}is ${age} years old`)

//------------Q3-------------
// let Quarter = 5;
// switch (Quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;   
//     case 4:
//         console.log("October, November, December");
//         break;   
//     default:
//         console.error("invalid input!");                 
// }

//----------------Q4-------------

// let Str= "bapples";
// if((Str[0] === 'A'|| Str[0] === 'a') && (Str.length > 5)){
//     console.log("golden String");
// }else{
//     console.warn("Give valid input!");
// }

//--------------Q5-----------------
// let a = 50;
// let b = 10;
// let c = 109;

// if(a>b){
//     if(a>c){
//         console.log(a, "is big");
//     }else{
//         console.log(c, "is big");
//     }
// }else{
//     if(b>c){
//         console.log(b, "is big");
//     }else{
//         console.log(c, "is big");
//     }
// }
// --------------------------------------
// if((a>b) && (a>c)){
//     console.log("a is big");

// }else if((b>a) && (b>c)){
//     console.log("b is big");

// }else if((c>a) && (c>b)){
//     console.log("c is big");
// }

//-------------Q6------------------
let a = prompt("Enter any no");
let b = prompt("Enter any no");

if((a%10) == (b%10)){
    console.log(`${a} & ${b} have the same last digit ${a%10}`)
}else{
    console.log(`${a} & ${b} donlt have same last digit`);
}