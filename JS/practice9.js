//------------Q1 check multiple of 10----------------
let arr = [10,240,50,30,70,50];

let ans = arr.every((el) => (el%10 == 0));

console.log(ans);

//--------------Q2 find minimum--------------
let nums = [10,240,50,30,70,50];

function getMin(nums){
    let min = nums.reduce((min,el) =>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}
console.log(getMin(nums));
console.log(getMin([5,6,5,3]));