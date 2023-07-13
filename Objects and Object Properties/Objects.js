const obj = {        //This is a object
    first:"Saim",
    last:"Saeed",
    age:21
}
console.log(obj.first)
// This is another way to access objects.
console.log(obj ["first"]);

const obj2 = {}       // Object can be created from empty brackets
obj2.first = "Numan";
obj2.last = "Tariq";
obj2.age = 20;
console.log(obj2)
console.log(obj2.age)



const obj3 = new Object();   // Object can be created from new Object() function
obj3.first="Ahmad";
obj3.last="Asaad";
obj3.age= 20;
console.log(obj3);
console.log(obj3.last)


//In this example object is created and then assigned value to another variable the variable has the value of the object but it is not the copy 
//of the object . it is the same object given as reference so if the value of the variable is changed the value of object will also be changed.
const obj4 = {
    first:"Zain",
    last:"Ali",
    age:20
}

//Variable has been assigned value of object
let x = obj4;

// A value of the variable is changed
x.age = 31;
//The value of the object will also be changed because it is the same object not a copy of the object
console.log(x);
console.log(obj4);


