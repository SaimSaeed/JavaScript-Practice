function Person(first,last,age,degree){  //This is a Constructor. It is a function which is used to create objects
    this.firstName =  first,
    this.lastName = last,
    this.age = age,
    this.degree = degree
}

// this object constructor function is used when there is need of multiple objects of same type so we can make multiple objects by one constructor function
const person1 = new Person("Saim","Saeed",21,"BSCS");  //everytime a contructor is used to make objects of same type the word "New" will be used
const person2 = new Person("Numan","Tariq",20,"BSCS");

person2.nationality = "Pakistani" //this method will only update person2 not person1 and not the constructor because only the person1 object is updated
 // this is a method which is not used to update an object constructors can only be updated by using prototypes

console.log("The First Student is "+person1.firstName +" "+person1.lastName +" and his age is "+person1.age+" and degree is "+person1.degree );
console.log(person2.firstName + " is a "+person2.nationality);