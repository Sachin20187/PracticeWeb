//------------forEach-----------
// let arr1 = [1,2,3,4,5];

// arr1.forEach((el)=> {
//     console.log(el);
// });

// // function print(el){
// //     console.log(el);
// // }
// // arr1.forEach(print);

// // arr1.forEach(function(el){
// //     console.log(el);
// // });

// let arr = [
//     {
//         name: "Sachin",
//         marks: 95,
//     },
//     {
//         name: "Prashant",
//         marks: 86,
//     },
//     {
//         name: "Nishant",
//         marks: 76,
//     }
// ];
// arr.forEach((student) => {
//     console.log(student);
//     console.log(student.marks);
// })

//----------Map-------------
// let students = [
//     {
//         name: "Sachin",
//         marks: 95,
//     },
//     {
//         name: "Prashant",
//         marks: 86,
//     },
//     {
//         name: "Nishant",
//         marks: 76,
//     }
// ];
// let gpa = students.map((el) => {
//     return el.marks/10;
// });
// console.log(gpa);

//------------Filter------------
// let nums = [1990,200,317,402,51,63,70,80,97];
// let even = nums.filter((el)=> {

//     return el>  200;
//     // return el%2 != 0; //for odd
//     // return el % 2 == 0; // even-> true, odd -> false
// })
// console.log(even);

//------------every(logical and)---------------
// let ans = [2,4,6].every((el)=> el % 2 == 0);
// console.log(ans);

// let odd =[3,5,9,7,1,5].every((el)=> el%2 != 0);
// console.log(odd);

//------------some(logical or)----------------
// let ans = [1,3,2,4,6].some((el)=> el % 2 != 0);
// console.log(ans);

// let odd =[3,5,9,7,1,5].some((el)=> el%2 == 0);
// console.log(odd);

//------------reduce----------------
// let sum =[3,5,9,5].reduce((res,el)=> (res+el));
// console.log(sum);

// let product =[2,5,9].reduce((res,el)=> (res*el));
// console.log(product);

//------------reduce----------------
let sum =[3,15,9,5].reduce((res,el)=> {
    // console.log(res);
    return res+el;
},0);
console.log(sum);

//--------------0