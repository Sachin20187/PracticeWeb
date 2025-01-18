//---------------callback hell-----------------
// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColor){
//     setTimeout(()=> {
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     }, delay);
// }
// //-----callback nesting or hell----------
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("yellow", 1000, ()=>{
//             changeColor("green", 1000, ()=>{
//                 changeColor("blue", 1000);
//             });
//         })    
//     });
// });

//--------------promises----------------------
// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, rejecct)=>{
//         setTimeout(()=> {
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });   
// }
// //------------then() and catch()-------------
// changeColor("red", 1000)
//     .then(()=>{
//         console.log("red applied");
//         return changeColor("blue", 1000);
//     })
//     .then(()=>{
//         console.log("blue applied");
//         return changeColor("green", 1000);
//     })
//     .then(()=>{
//         console.log("green applied");
//         return changeColor("yellow", 1000);
//     })
//     .then(()=>{
//         console.log("yellow applied");
//         return changeColor("orange", 1000);
//     })
//     .then(()=>{
//         console.log("orange applied");
//     })
//     .catch(()=>{
//         console.log("rejected");
//     });

//------------Async function and await keyword----------

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num<3){
            reject("promise rejected")
        }
        // console.log("num: ",num);
        setTimeout(()=> {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        }, delay);
    });   
}
async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
        await changeColor("orange",1000);
        await changeColor("black",1000);
    }catch(err){
        console.log("err caught");
        console.log(err);
    }
    let a =5;
    console.log(a);
    console.log("new number =",a+3);
}

demo();
//-------------------------------------------------
// function one(){
//     return 1;
// }
// function two(){
//     return one()+ one();

// }
// function three(){
//     let ans = two()+one();
//     // console.log(ans);
//     return ans;
// }
// // three();
// function newF(){
//     let ans1 = three()+ three();
//     console.log(ans1);
// }; 
// newF();

// setTimeout(function(){
//     console.log("Sachin Kumar");
// }, 2000);
// console.log("hello...");