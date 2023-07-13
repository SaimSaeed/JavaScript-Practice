//Looping through Objects Properties
const obj1 = {
    fname:"Saim",
    lname: "Saeed",
    age:21
}

let txt = ""
for(let x in obj1){
    txt += obj1[x]+" "
   
}

console.log(txt);

// Deleting Object Properties
// The delete keyword will delete the properties of an object
const obj2 = {
    fname:"Saim",
    lname: "Saeed",
    age:21
}

delete obj2.age;

console.log(obj2.age)


// Nested Objects

const obj3 = {
    fname:"Saim",
    lname: "Saeed",
    age:21,
    cars:{
        car1:"Bugatti Chiron",
        car2:"Lamborgini Aventador",
        car3:"La-Ferrari"
    }
}
// The Object is being accessed through different ways
// method 1
console.log(obj3.cars.car1);
// method 2
console.log(obj3.cars ["car1"]);
// method 3
console.log(obj3 ["cars"] ["car1"]);




// Using Loops and with nested objects and arrays
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x +=  myObj.cars[i].name ;
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
console.log(x)






//Example 2 
const obj20 ={
  fname:"Saim",
  lname: "Saeed",
  cars:[
    {car:"BMW" , models:["i8","i7","i10"]},
    {car:"Corolla",models:["gli","xli"]},
    {car:"Honda",models:["Civic","City"]}
  ]
}


let y = "";
for(let i in obj20.cars){
  y+= obj20.cars[i].car;
  for(let j in obj20.cars[i].models){
    y+= obj20.cars[i].models[j];
  }

}
console.log(y)