a = "Hello\' Windows";             // Single Quote
b= "Hello\" Windows";             // Double Quote
c = "Hello\\ Windows";            //Backslash
d = "Hello\n Windows";        // New Line
e = "Hello\t\t Windows";       // Space 

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)



let name1 = "SAIM"
console.log(name1)
let updatedname1 = "saim"
console.log(updatedname1);


if (name1.toLowerCase() === updatedname1){
console.log("found")
}
else{
    console.log("Not found")
}


if (name1 === updatedname1.toUpperCase()){
    console.log("found")
    }
    else{
        console.log("Not found")
    }


    let  test1 = "This is a string"
    let test2 =test1.slice(2,12)
    console.log(test2);
    //When using slice function in string space will also count as an index.


    var test23 = "sAim"
    var test32 = test23.toLowerCase()
    console.log(test32)
    var test33 = test23.toUpperCase()
    console.log(test33)