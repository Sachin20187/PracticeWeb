let greet = "Hello!";

function changeGreet(){
    let greet = "Namaste!";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();