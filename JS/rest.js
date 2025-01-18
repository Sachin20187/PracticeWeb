// function nums(...args){
//     for(let i =0;i<args.length;i++){
//         console.log("you gave us: ",args[i]);
//     }
// }
// nums(1,2,3,4);

// function sum(...args){
//     return args.reduce((add,el)=> add+el);
// }
// console.log(sum(1,2,3,4));

// function print(a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
//     try{
//         arguments.push(1);
//     }catch(e){
//         console.log(e);
//     }
//     //arguments.push(1);
// }
// print(4,6,7,23);
//console.log(print(4,6,7,23));

//-------------------------
// using rest to convert arguments to array and use array methods to it

// function sum(...args){
//     return args.reduce((sum,el)=> sum+el);
// }
// console.log(sum(1,2,3,4));

function min(msg,...args){//take exta parameter before the arguments-- msg,...args
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
console.log(min("hello!",5,6,7,9,2));