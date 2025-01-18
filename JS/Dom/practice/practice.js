//Ans1
let input = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText = "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn1);

//Ans2
input.placeholder = "username";
btn1.id = "btn";

//ans3
let btn = document.querySelector("#btn");
btn.classList.add('btnStyle');

//ans4
let h1 = document.createElement('h1');
h1.classList.add('h1Style');
h1.innerHTML = "<u>DOM Practice</u>";

document.querySelector('body').append(h1);

//ans5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);



//-------------------------------------------
// let body = document.querySelector("body");

// let para = document.createElement('p');
// para.innerText = "Hey I'm red!";
// para.classList.add("red");
// body.prepend(para);

// let h3 = document.createElement('h3');
// h3.innerText = "I'm a blue h3!";
// h3.classList.add("blue");
// body.prepend(h3);

// let div = document.createElement('div');
// div.classList.add("box");

// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div";

// div.append(h1);


// let p = document.createElement('p');
// p.innerText = "Me too!";
// p.classList.add("p");
// div.append(p);

// body.prepend(div);