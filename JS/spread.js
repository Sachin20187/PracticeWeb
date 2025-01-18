let arr = [4,6,8,3,9,2];
const newArr = {...arr};
console.log(typeof(newArr));
console.log(newArr);

let newArr1 = [...arr];
console.log(newArr1);// direct copy of the original arr, creates a shallow copy of the array.
console.log(typeof(newArr1));
//1. {...arr} spreads the array into an object where the keys are the array indices, and the values are the array elements. The result is an object.

//typeof newArr → "object"
// newArr → { '0': 4, '1': 6, '2': 8, '3': 3, '4': 9, '5': 2 }

//2. [...arr] creates a shallow copy of the array. The result is an array.

// typeof newArr1 → "object" (arrays are objects in JavaScript)
// newArr1 → [4, 6, 8, 3, 9, 2]
//---------------------------------------

let min = Math.min(...arr);
console.log(min);

let name = "Sachin";
console.log(...name);

let arr1 =[]
//------------------------------
const data = {
    email: "xyz@gmail.com",
    password: "abcd1234",
};

const dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);