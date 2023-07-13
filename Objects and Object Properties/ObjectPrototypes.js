function Person(first,last,age){ //Constructor is defined
   this.firstname = first
    this.lastname = last
    this.age = age

}

const person1 =  new Person("Saim","Saeed",20); // Object is created

Person.prototype.nationality = "Pakistani"; //property is being added to constructor function by using prototype
Person.prototype.fullname= function(){ return this.firstname+" "+this.lastname} //function is being added as a property in the constructor function

console.log("The name of the Student is "+person1.fullname()+" and his Nationality is "+person1.nationality);




