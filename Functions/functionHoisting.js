//in function hoisting a function can be accessed first and then declared and it will work but if function is stored in variable or a simple variable is defined
// it will move upwards as all of the declarations will go on top this is called function hoisting but incase of variable it will be declared but not initalized so it will not show any value it will need to be accessed after initilazation but a function can be called first can declared later


var c = sum(6,10); //called first
console.log(c);


function sum(a,b){ //declared later
    return a *b
}

console.log(d);

var d = 45;  // it will show undefined because a variable will go up and be not initialized but a function can be accessed unlike a variable
