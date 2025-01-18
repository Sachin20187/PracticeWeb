const max = prompt("Enter the max value of the range");
const random = Math.floor(Math.random()* max)+1;

let guess = prompt("guess the random no.");
while(true){
    if(guess == "quit"){
        console.log("User quit!");
        break;
    } 
    if(guess == random){
        console.log("Congrats! You guessed correctly...");
        break;10
    }else if(guess < random){
        guess = prompt("Your guess is smaller. Try again");
    }else if(guess > random){
        guess = prompt("Your guess is bigger. Try again");
    } 
}
