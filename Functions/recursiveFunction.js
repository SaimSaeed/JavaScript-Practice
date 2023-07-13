function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}

console.log(factorial(12))
console.log(factorial(8))



//Recursive function is a fumction which repeats itself like a loop and it has certain conditions according to which it will run until the condition is fulfilled
//if the condition is not ended then it will run infinitely like a loop
