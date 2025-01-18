// let names = ["thor","tony","bruce","steve","peter"];
// // let Winner = names[0];
// // let runnerup = names[1];
// let [Winner, runnerup] = names;
// console.log(Winner);
// console.log(runnerup);

const student = {
    name: "Sachin",
    age: 23,
    degree: "B.tech",
    languages: ["java","javaScript","python"],
    username: "Sachin123",
    password: "12345",
    pinCode: 827013,
    place: "Mumbai",
};  
// let username = student.username;
// let password = student.password;//not good for many details

//use destructuring
// let {username,password} = student;
let {username: user, password: pass, place: city ="bokaro", pinCode: pin} = student;
//search for 'username' and 'password' and store them in "user" and "pass"