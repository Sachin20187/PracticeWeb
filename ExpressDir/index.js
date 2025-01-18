const express = require("express");
const app = express();

// console.dir(express());
// console.dir(app);

let port = 8080; 
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("This is the root path");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let {username, id } = req.params;
    // res.send(`hello, @${username} Id:${id}`);
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/search" , (req, res)=>{
    let{ q } = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }    
    res.send(`Search results for query: ${q}`);
});


//---------------------

// app.get("/", (req, res)=>{
//     res.send("This is the root path");
// });

// app.get("/search", (req, res)=>{
//     res.send("Searching path");
// });

// app.get("/download", (req, res)=>{
//     res.send("Downloading path");
// });

// app.get("*", (req, res)=>{
//     res.send("This path doesn't exist");
// });

// app.post("/", (req, res)=>{
//     res.send("you sent a post request to root");
// })

// app.post("/upload", (req, res)=>{
//     res.send("uploading");
// })

// app.use((req, res) =>{
//     //console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Orange</li><li>Mango</li><li>Banana</li></ul>"
//     res.send(code);

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });
// });