
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn1 = document.querySelector("#button1");
btn1.addEventListener("click",async()=>{
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e){
        console.log("Error -",e);
        return "No fact found";
    }
}

let btn2 = document.querySelector("#button2");
btn2.addEventListener("click",async()=>{
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("img");

    img.src = link;    // img.setAttribute("src", link);
    img.height = 400; // img.setAttribute("height", 400);
    img.width = 400; // img.setAttribute("width", 400);

    // console.dir(img);
});
async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e){
        console.log("Error -",e);
        return "/";
    }
}

//----------------------------------------------
// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         // console.log(res);
//         // console.log(res.data);
//         console.log(res.data.fact);
//     } catch (e){
//         console.log("Error -",e);
//     }
// }
// getFacts(); 