// //--------JSON data to JS Object-using JSON.parse---------------
// let jsonRes = '{"fact":"In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king.","length":108}';

// console.log(jsonRes);
// //console.log(jsonRes.fact);// It won't work as jsonRes is not an object.-undefined

// let validRes = JSON.parse(jsonRes);
// // console.log(validRes);
// console.log(validRes.fact);

// //---------Js object to JSON data-using JSON.stringfy------------
// let student = {
//     name: "Sachin",
//     age: 22,
// };
// console.log(JSON.stringify(student)); 
 
//-------------fetch request---------------
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     //console.log(res);
//     //res.json();-- convert data into readable format
//     //console.log(res.json);- it will return a promise
// })
// .catch((err)=>{
//     console.log("Error -",err);
// });


let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data1 =", data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2 =", data2.fact);
})
.catch((err)=>{
console.log("Error -",err);
});

console.log("Hi, Sachin!");