// New Promise is created
// Two Parameters are taken resolve and reject
let p = new Promise ((resolve,reject)=>{
    // a variable is defined
    let a = 1+1;
    // Condition is written for promise
    if(a==2){
        resolve("Success");

    }else{
        reject("Failed")
    }
})

// Then will get resolve value
p.then((message)=>{
    console.log("Promise is  ",message)
}).catch((message)=>{
    // Catch will get reject value
    console.log("Promise is",message)
}) 


// Two variables defined
let userLeft = false;
let userWatchCatMeme = false;
// Function taking two parameters
function PromisesTut(){
    // Returning promise
    return new Promise((resolve,reject) =>{
    // Condition for first variable if true
if(userLeft){
    
    reject(
        {
            message:"user left"
        }
    )
}
// Second Variable Condition if true
else if (userWatchCatMeme){
    
    reject(
        {
            message:"User Watching Meme"
        }
    )
}
// Main promise Condition
else{
  
    resolve({
        message:"user"
    }
    )
}
    })
}
// Getting message value and also setting up error management 
PromisesTut().then((message)=>{
    console.log("Message is",message.message)
}).catch((error)=>{
    console.log(error.message)
})
   

// Promise Methods
// Three Promises Defined
let q = new Promise ((resolve,reject)=>{
    resolve("Video 1 Recorded")
})

let r = new Promise ((resolve,reject)=>{
    resolve("Video 2 Recorded")
})

let s = new Promise ((resolve,reject)=>{
    resolve("Video 3 Recorded")
})
// Promise.all will get all promises when they are completed one by one
Promise.all([
    q,r,s
]).then((message)=>{
    console.log(message)
})
// Promise.race will get the first promise that is completed
Promise.race([
    q,r,s
]).then((message)=>{
    console.log(message)
})