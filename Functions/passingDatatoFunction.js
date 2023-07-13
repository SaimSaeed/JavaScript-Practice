function average(num1,num2){
    var num3 = num1*num2/2
    console.log(num3)
}

average(6,8);
average(10,13);


// this is an example of how inputs can be changed for a changed output if our data is changing we can do this by using parameters and passing arguments in our function



function showMessage(message){
    var name = message;
    console.log("Hello "+name)
}

showMessage("Saim");
showMessage("John")
