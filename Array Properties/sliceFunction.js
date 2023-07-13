let foods = ["Burgers","Sandwiches","Pizza","Snacks","Pasta"]
console.log(foods)
let arr = foods.slice(1,4);
// The slice function consists of (start index,end index) but end index is exclusive it is not added to the new  array
console.log(arr)

// If only starting index is given then all the value from tha index will be added to new array
let arr2 = foods.slice(3);
console.log(arr2)