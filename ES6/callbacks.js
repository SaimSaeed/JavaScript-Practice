// Array to store data in server
const students = [
    {name:"Saim", age: 21},
    {name:"Asaad", age: 21},
    {name:"Numan", age: 21},
    {name:"Zain", age: 21}
]


function enrollStudents(student,callback){
setTimeout(() => {
    students.push(student)
    console.log("Student is Enrolled")
    callback() // callback will make sure that our getstudent function does not run before enrollStudents it will be compulsory for first function run before letting the other to run by using callbacks
},3000);
}



function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById("out").innerHTML = str;
        console.log("Students Have Been Fetched")
    }, 1000);
}


let newStudent= {name:"Khan",age:21};
enrollStudents(newStudent,getStudents)





// // Simple Example of Fried Anda

function makefryanda(callback){
    setTimeout(() => {
        console.log("Anda is going to be fried");
        callback()
    },3000);
}

function andafried(){
    setTimeout(() => {
        console.log("Anda is fried")
    },2000);
}

makefryanda(andafried);



// //Example of Multiple Calbacks
function makeanda(cb1,cb2,cb3){
    setTimeout(() => {
        console.log("Make Anda Fry")
        cb1()
        cb2()
        cb3()
    }, 1000);
}

function andafried(){
    setTimeout(() => {
        console.log("Anda Fried")
       
    }, 1500);
}


function makesandwich(){
    setTimeout(() => {
        console.log("Making Sandwich")
    }, 2000);
}

function sandwichmade(){
    setTimeout(() => {
        console.log("Sandwich Made")
    }, 2500);
}




makeanda(andafried,makesandwich,sandwichmade);

// Two variables defined
let userLeft = false;
let userWatchCatMeme = false;
// Function taking two callbacks
function callBackTut(callback,errorCallBack){
    // Condition for first variable if true
if(userLeft){
    
    errorCallBack(
        {
            message:"user left"
        }
    )
}
// Second Variable Condition if true
else if (userWatchCatMeme){
    
    errorCallBack(
        {
            message:"User Watching Meme"
        }
    )
}
// Main Callback Condition
else{
  
    callback({
        message:"user"
    }
    )
}
}
// Getting message value and also setting up error management 
callBackTut((message)=>{
    console.log(message)

},(error)=>{console.log(error.message)})



