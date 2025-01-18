//---------------------------------------------------
// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         console.log("success: your data was saved:", data);
//     }else{
//         console.log("failure: weak connection");
//     }
// }
//------------------callback hell----------------------
// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();       
//     }else{
//         failure();       
//     }
// }
// savetoDb(
//     "sachin",
//     //for success
//     ()=>{
//         console.log("success: your data was saved");
//         savetoDb("hello world",
//         //for success 
//         ()=>{
//             console.log("success2: data saved");
//             savetoDb("apna college",
//             //for success
//             ()=>{
//                 console.log("success3");
//             },
//             //for failure
//             ()=>{
//                 console.log("failure");
//             });
//         },
//         //for failure
//         ()=>{
//             console.log("failure2: weak connection");
//         });
//     },
//     //for failure
//     ()=>{
//         console.log("failure: weak connection");
//     }
// );
//--------------------------------------------------------
// ------------------using promises-------------------
// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     return new Promise((success,failure) =>{
//         if(internetSpeed > 4){
//             success("Success: data saved");//State - Fullfilled, PromiseResult- Success: data saved
//         } else{
//             failure("Failure: weak connection");//State- Rejected, PromiseResult- Failure: weak connection
//         }
//     });
// }

// let request = savetoDb("apna college"); //req = promise object
// request.then(()=> {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })

// or
// savetoDb("apna college")// req variable is removed
//     .then(()=> {
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

//------------promise chaining-------------
// savetoDb("apna college") //req = promise object
//     .then(()=> {
//         console.log("data1 saved");
//         savetoDb("apna ghar").then(()=>{ //second then inside 1st
//             console.log("data2 saved");
//         });
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    return new Promise((success,failure) =>{
        if(internetSpeed > 4){
            success("Success: data saved");
        } else{
            failure("Failure: weak connection");
        }
    });
}
// savetoDb("apna college") //req = promise object
//     .then((result)=> {
//         console.log("data1 saved");
//         console.log("result of promise: ",result);
//         return savetoDb("apna ghar");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise: ",result);
//         return savetoDb("Sachin kumar");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise: ",result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("result of promise: ",error);
//     });

savetoDb("apna college") //req = promise object
    .then(()=> {
        console.log("data1 saved");
        return savetoDb("apna ghar");
    })
    .then(()=>{
        console.log("data2 saved");
        return savetoDb("Sachin kumar");
    })
    .then(()=>{
        console.log("data3 saved");
    })
    .catch(()=>{
        console.log("promise was rejected");
    });