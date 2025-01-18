//--------------max-----------
// let arr = [1,5,9,6,3,7,6];
// let max =-1;

// for(let i =0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

//--------------max using reduce-----------
// let arr = [1,5,9,1,6,3,7,6];
// let max = arr.reduce((max,el) =>{
//     if(max <el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

//-----------min------------
let arr = [1,5,9,1,6,3,7,6];
let min = arr.reduce((min,el) =>{
    if(min < el){
        return min;
    }else{
        return el;
    }
});

console.log(min);

//find the index of the minimum value in the array:

let arr1 = [10, 1, 5, 9, 1, 6, 3, 7, 6];
let minIndex = arr1.reduce((minIndex, el, index) => {
    return el < arr1[minIndex] ? index : minIndex;
}, 0);

console.log(minIndex);
