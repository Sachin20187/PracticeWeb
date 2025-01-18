let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    // console.log("button clicked");
    let country = document.querySelector("input").value;
    // console.log(country);
    let collegeArr = await getColleges(country);
    // console.log(collegeArr);
    show(collegeArr);
    let inp = document.querySelector("input");
    let name = document.querySelector("#name");
    name.innerText = inp.value.toLocaleUpperCase();
    inp.value ="";
    
});

function show(collegeArr){
    let list = document.querySelector("#list")
    list.innerHTML = "";
    for(college of collegeArr){
        // console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(e){
        console.log("error-",e);
        return [];
    }
}