var a = 11


// function localvar1(){
//        var b = 3;
//       a = b+5;  // IN THIS CONDITON THE VARIABLE A IS GLOBAL AND IS JUST UPDATED INSIDE A FUNCTION BUT IF IT IS DECLARED INSIDE A FUNCTION IT WILL BE LOCAL AND WILL NOT HAVE ANY CONNECTION WITH GLOBAL VARIABLE
//       console.log(a);
// }


function localvar2(){
    var c = 7;
    var a = c+9;
    console.log(a)
}
localvar2()

// localvar1()
console.log(a);

// variable written without var will be global even if it is written inside a function like in localvar2() function but when var is used inside a function then it will be local variable.