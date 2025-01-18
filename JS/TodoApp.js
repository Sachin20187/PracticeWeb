
let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req == "quit"){
       console.log("Quitting app");
       break; 
    }
    if(req == "list"){
        console.log("Your tasks:");
        for(let i =0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
    }else if(req == "add"){
        let task = prompt("Enter the task to add:");
        todo.push(task);
        console.log("Task added");
    }else if(req == "delete"){
        let indx = prompt("Enter the task no. to delete");
        todo.splice(indx,1);
        console.log("task deleted")
    }else{
        console.log("Wrong request");
    }
    req = prompt("please enter your request");
}