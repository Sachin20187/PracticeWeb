//-------------Q1------------
// let arr =[1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//-------------Q2------------
// let num = 1452287152;
// let count =0;
// while(num>=1){
//     console.log(num);
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

//-------------Q3------------
// let num = 287152;
// let sum =0;
// while(num > 0){
//     // console.log("num: "+num);
//     // console.log("sum: "+sum);
//     sum += num%10;
//     num = Math.floor(num/10);   
// }
// console.log("sum:",sum);

//--------------Q4------------
// let num = 7;
// let fact = 1;
// // while(num>0){
// //     fact *= num;
// //     num--;
// // }

// for(let i = num; num>0;num--){
//     fact *= num;
// }
// console.log(fact);

//----------------Q5-------------
let arr =[45,42,99,42,36,110];
let largest = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);