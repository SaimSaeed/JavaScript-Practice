var a = 17;


function test(num){
    console.log("Num Before "+ num);
    var num  =4;
    console.log("Num After "+ num);
     

}


test(a);
console.log("Value of A",a);


var b = [1,2,3,4,5];

function updatearr(val){
    console.log("Val Before "+ val);
 val[2] = 13;
 console.log("Val After "+ val);


}

console.log("Value ",b[2])
updatearr(b);
console.log("B After ",b[2]);



var c = {name:"Saim",age:20};

function updateage(num2){

    num2.age = 21
return num2;
}

console.log(c.age)
updateage(c);
console.log(c.age)