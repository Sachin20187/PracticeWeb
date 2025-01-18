//------------------Q1-----------
// const arrayAverage = (arr) => {
//     let total =0;
//     for(let num of arr){
//         total += num;
//     }
//     return total/arr.length;
// }
// let arr =[1,2,3,4,5,6,7];
// console.log(arrayAverage(arr));

//-----------------Q2-----------
// let n = 10;
// const isEven = (num) => num % 2 ==0;
// console.log(isEven(n));

//-----------------Q3--------------
// const object ={
//     message: 'Hello, World',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage.bind(object), 1000);

//undefined

//------------Q4--------------
let length =4;
function callback(){
    console.log(this.length);
}
// callback();

const object = {
    length: 5,
    method(callback){
        callback();
    },
};
object.method(callback.bind(object), 1,2);