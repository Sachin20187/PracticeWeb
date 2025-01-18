console.log(Math.floor(Math.random()*6)+1);

const car= {
    name: "Mercedes",
    model: "Vision AVTR",
    color: ["Silver","Pearl","Snow White"]
};
console.log(car.name);

const person = {
    first: { 
        name: "Sachin",
        age: 22,
        city: "Bokaro"
    },
    second: { 
        name: "Manoj",
        age: 20,
        city: "Giridih"
    },
    third: { 
        name: "Rahul",
        age: 24,
        city: "Dhanbad"
    }
}
console.log(person);

person.first.city="New York";
person.second.city="New York";
person.third.city="New York";

person.first.country= "United States";
person.second.country= "United States";
person.third.country= "United States";

console.log(person);