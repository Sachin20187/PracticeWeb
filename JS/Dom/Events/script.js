let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(event){
    event.preventDefault;
    p.innerText = inp.value;
    console.log(this.value);
});

//-------------change and input event-----------------
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
// let inp = document.querySelector("#user");
// // inp.addEventListener("change", function(event){
// //     event.preventDefault;
// //     console.log("input changed");
// //     console.log("final value = ", this.value);
// //     console.log(this.value);
// // });
// inp.addEventListener("input", function(event){
//     event.preventDefault;
//     console.log(this.value);
// });

//------------form event------------
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // console.dir(form);

//     let user = this.elements[0];
//     let pass = form.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is ${pass.value}`)


//     // let inp = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
//     // // console.dir(inp);
//     // console.log(inp.value);
//     // console.log(pass.value);

//     // alert(`Hi ${inp.value}, your password is ${pass.value}`);
// });


 
//------------keyboard event-----------
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     // console.log(event);
//     // console.log(event.key);
//     // console.log("key is pressed");

//     console.log(event.code);
    
// });

// inp.addEventListener("keydown", function(){
//     console.log("key is pressed");
// });
// inp.addEventListener("keypress", function(){
//     console.log("char key is pressed");
// });

//------------mouse event--------------
// let btn = document.querySelector("button");

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("paragraph was clicked!");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse entered the box");
// });
// box.addEventListener("mouseleave",function(){
//     console.log("mouse leaved the box");
// });

//-------------------------------------
// function sayName(){
//     alert("Sachin");
// }
// function sayHello(){
//     alert("Hello");
// };
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     alert("You entered");
//     // };

//     // btn.addEventListener("click", sayName);
//     // btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",function(){
//         alert("you double clicked!");
//     })
// }

// let btn = document.querySelector("button");
// console.dir(btn);

// function sayHello(){
//     alert("Hello");
// };
// btn.onclick = sayHello;

// btn.onclick = function() {
//     alert("button was clicked!");
// };

// btn.ondblclick = function(){
//     console.log("Hello");
// };

// btn.onmouseenter = function(){
//     alert("You entered");
// };