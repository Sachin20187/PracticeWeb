const student= {
    name: "Sachin",
    age: 22,
    marks: 85,
    city: "Mumbai"
};
console.log(student["marks"]);
console.log(student.city);

student.marks = 'A';
student['city']= "Delhi";
student.gender = "Male";
delete student.age;
console.log(student);

//--------------------
// const thread= {
//     username: "@sachinkumar",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["011prashant","@xyz131372"]
// }
// console.log(thread);

// console.log(thread['likes']+5);
// thread.likes= 251;
// thread.reposts = 10;

// console.log(thread);
// //------------------------------
// const obj ={
//     1: 'a',
//     2: 'b',
//     null: 'c',
//     true: 'd',
//     undefined: 'e'
// };
// console.log(obj['undefined']);
