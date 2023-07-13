// let promise= new Promise (function(resolve,reject) {
// let x=10;
// if(x>=10){
// console.log("SUCCESS")
// }
// else{
//     console.log("ERROR")

// }
// });
// promise.then(
//     function(value){
//         console.log("SUCCESS",value);
//     },
//     function(value){
//         console.log("ERROR",value)
//     }
// );


// const promise= new Promise((resolve, reject) => {
//     resolve("SUCCESS");
// })
// .then(value => {
//     console.log(value)
//     return "we";
// })
// .then(value=>{
//     console.log(value)
//     return "can";
// })
// .then(value=>{
//     console.log(value)
//     return "do";
// })
// .then(value=>{
//     console.log(value)
//     return "this";
// })
// .then(value=>{
//     console.log(value)
// })
// .catch(value=> {
//     console.log(value)
// })





const promise = new Promise((resolve,reject) => {
    resolve("Start Counting");
    
    function counter(value){
        console.log(value);
    }
    
})

.then(value=> {
    console.log(value)
    return "one";
})
.then(value=> {
    console.log(value)
    return "two";
})
.then(value=> {
    console.log(value)
    return "three";
})
.then(value=>{
    console.log(value)
})
.catch(value=>{
console.log(value);
})
