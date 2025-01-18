let students = [
    {
        name: "Sachin",
        marks: 95,
    },
    {
        name: "Prashant",
        marks: 86,
    },
    {
        name: "Nishant",
        marks: 76,
    }
];
let gpa = students.map((el) => {
    return el.marks/10;
});
console.log(gpa);