// function makefryanda(callback){
//     setTimeout(() => {
//         console.log("ANDA FRIED")
//     }, 1000);
        


// }

// // function andafried(param){
// //     console.log(param);
    

// // }

// // makefryanda(andafried);



// function toastbread(cb) {
//     setTimeout(() => {
//         console.log("BREAD TOASTED")
//     }, 3000);
    
// }

// // function toastready(para){
// //     console.log(para);
// // }

// // toastbread(toastready)

// toastbread(function(para){
//     console.log(para);
//     makefryanda(function(param){
//         console.log(param)
//     })


// }

// )






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





// Simple Example of Fried Anda

// function makefryanda(callback){
//     setTimeout(() => {
//         console.log("Anda is going to be fried");
//         callback()
//     },3000);
// }

// function andafried(){
//     setTimeout(() => {
//         console.log("Anda is fried")
//     },2000);
// }

// makefryanda(andafried);

