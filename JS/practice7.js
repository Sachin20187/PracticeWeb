// //------------------Q1----------------
// function largerThanNum(arr,n){
//     let ans = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>n){
//             console.log(arr[i]);
//         }
//     }
// }
// const arr1 = [42,52,31,60,10,20];
// let m = 35;
// largerThanNum(arr1,m);
// // console.log(largerThanNum(arr,n));

//--------------Q2------------------
// let str = "abcdabcdefgggh";
// let ans="";
// console.log(getUnique(str));
// function getUnique(str){
//     for(let i=0;i<str.length;i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)== -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }

//--------------Q3----------------------
// let country = ["Australia", "Germany","United Kingdom","United Arab Emirates", "United States of America"];
// let longest ="";
// function longestName(country){
//     for(let i=0;i<country.length;i++){
//         if(country[i].length>longest.length){
//             longest = country[i];
//         }
//     }
//     return longest;
// }
// console.log(longestName(country));

// let country = ["Australia", "Germany", "United States of America"]; function longestName(country) { 
//     let ansIdx = 0; 
//     for (let i = 0; i < country.length; i++) { 
//         let ansLen = country[ansIdx].length;
//         // console.log("ansLen",ansLen); 
//         let currLen = country[i].length; 
//         // console.log("currLen",currLen); 
//         if (currLen > ansLen){ 
//             ansIdx = i; 
//         } 
//     } 
//     return country[ansIdx]; 
// }
// console.log(longestName(country)); 

//----------------Q4--------------------
//let vowels = ['a','e','i','o','u'];
// let str = "aeiouasdfghpoiuyertyxcvbnmjmh";
// function count(string){
//     let count =0;
//     for(let i=0;i<string.length;i++){
//         if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count(str));

// let str = "apnacollegevideos"; 
// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) { 
//         if ( str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" ) { 
//         count++; 
//         } 
//     } 
//     return count; 
// }
// console.log(countVowels(str));

//----------------Q5----------------------
// let start = 50;
// let end = 100;
// console.log(Math.floor(Math.random()*end)+1);

// function generateRandom(start,end){
//     let diff = end-start;
//     return Math.floor(Math.random()*diff) + start;
// }
// console.log(generateRandom(50,100));

//----------------------Extra-------------------------
//This function generates a random number between start and end and prints it to the console.
// let generateRandom = function(start,end){
//     let diff = end-start;
//     console.log(Math.floor(Math.random()*diff) + start);
// }
// function multiple(func,n,start,end){
//     for(let i=0;i<n;i++){
//         func(start,end);
//     }
// }
// multiple(generateRandom,10,50,100);

//------------------------------------------
let generateRandom = function(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

function multiple(func, n, start, end) {
    let results = [];
    for (let i = 0; i < n; i++) {
        results.push(func(start, end));
    }
    return results;
}

console.log(multiple(generateRandom, 10, 50, 100));
