let arr= [1,2,3,4,5,6,78,9]
 let input = parseInt(prompt("Write the Number?"));
 console.log("User Input is : ",input);
 var found=false;
 for (i=0;i<arr.length;i++){
    if (arr[i] === input){
        console.log("User Input Found",input,"on index : ", i)
        found= true;
        break;
        
    }

 }

 if(found=== false){
    console.log("Not Found")
 }










 
//  Another Way to Output Not Found Value of The Array
//  if (!found){
//     console.log("Not Found")
//  }

 