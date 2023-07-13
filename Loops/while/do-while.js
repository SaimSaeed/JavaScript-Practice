var i = 0;

while(i<5){
    console.log("This is a While loop")
    i++;
}

//While loop takes value in True or False and it will run until the condition is true.


j = 0
do{
    console.log("This is Do While loop")
    j++;
}while(j<5)


// Do while will run one time and then check if the condition is true or not to continue running


var doContinue = true;

while(doContinue){
    console.log("Hello World");
    var input = prompt("Write y or n");
    if(input.toLowerCase() !=="y"){
        doContinue= false;
    }


}


