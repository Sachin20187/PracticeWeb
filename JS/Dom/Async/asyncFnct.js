// async function greet(){
//     // abc.abc(); // promise rejected
//     throw "weak connection";// promise rejected
//     // return "hello world!";// returns a result
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     // console.log("result was: ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err: ",err);
// })

// let demo = async()=>{
//     return 5;
// };

//---------------await-----------------
function getNum(){
    return new Promise((resolve,reject) =>{
    //  let num = Math.floor(Math.random()*10)+1;
    //  return num;
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
}
demo();
