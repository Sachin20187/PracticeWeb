let input = document.querySelector("input");
let btn1 = document.querySelector("#btn1");
let ul = document.querySelector("ul");

btn1.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    input.value = "";
});

//-------event delegation-------------
ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
       let listItem = event.target.parentElement;
       listItem.remove();
       console.log(listItem);
       console.log("delete");
    }
    // console.dir(event.target);
    // console.log(event.target);
    // console.log("button clicked");

});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }