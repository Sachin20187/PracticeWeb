//--------------Q1-------------------
// let arr = [4,2,3,5,1];
// let sqr = arr.map((el)=>el*el);
// console.log(sqr);

// let sum = sqr.reduce((ans,el)=> ans+el,0);
// console.log(sum);

// let avg = sum/ arr.length;
// console.log(avg);

//--------------Q2-------------------
// let arr = [4,6,8,4,5,1,2];
// // let newArr = arr.map(function(el){
// //     return el+5;
// // });
// //console.log(newArr);
// //-- or--
// let newArr = arr.map((el)=>el+5);
// console.log(newArr);

//--------------Q3-------------------
// let words = ["raja","tree","house","temple","walk","run"];
// let newWords = words.map((el)=> el.toUpperCase());
// console.log(newWords);

//--------------Q4-------------------
const doubleAndReturnArgs = (arr, ...args)=>[
    ...arr,
    ...args.map((el)=> el*2),
];

console.log(doubleAndReturnArgs([1,2,3], 4, 4));// [1,4,6,8,8]
console.log(doubleAndReturnArgs([2],10,4));// [2,20,8]

//--------------Q5-------------------
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// mergeObjects({a: 1, b: 2}, {c: 3, d: 4}); //{a: 1, b: 2, c: 3, d: 4}
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));