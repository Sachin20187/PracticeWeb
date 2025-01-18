
let arr = ["Ram ","is ","a ","good ","boy."];
let n = arr.length;
function StrConcatFunc(arr){
    let result ="";
    for(let i=0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}
StrConcatFunc();