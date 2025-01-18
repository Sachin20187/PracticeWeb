//----------Higher Order Funstion---------
//-----------Type 1-Takes function as arguement------------------
let greet = function(){
    console.log("Namaste 🙏");
}
function multipleGreet(funct,n){
    for(let i=0;i<n;i++){
        funct();
    }
}
multipleGreet(greet,5);
// multipleGreet(function(){console.log("hello")},3);
//------------Type2- Returns a function----------------
// let odd = function(n){
//     console.log(!(n%2 == 0));
// }
// odd(50);
// let even = function(n){
//     console.log(n%2 == 0);
// }
// even(20);
//--------------------------
// function oddEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;

//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     }else{
//         console.log("Wrong request");
//     }
// }
//-----------------


// let request = "odd";
// let func = oddEvenFactory(request);
// console.log(func);
// console.log(func("25"));
  