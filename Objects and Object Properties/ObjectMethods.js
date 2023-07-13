// This method for accessing objects is used when function is inside this is the optimal method by defining the method when making the object
const personData = {
firstname :"Saim" ,
lastname:"Saeed",
age : 20,
fullname : function(){
  return  (this.firstname+ " "+this.lastname).toUpperCase();
}
};

console.log(personData.fullname())



// This is 2 method but it is not obtimal as prototypes can be used to add value to objects and constructors
const person = {
    firstName :"Saim" ,
    lastName:"Saeed",
    age : 20,
    };
    
person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };

  console.log(person.name())



// This constructor is used to make objects
  function Persons(first,last,age,fullname){
  this.firstname1 = first,
    this.lastname1 = last,
    this.age=age,
    this.fullname = fullname
  }
// These objects can be assigned value and accesed
  person1 = new Persons("Saim","Saeed",21,function(){return (this.firstname1+" "+this.lastname1).toUpperCase()})
  person2 = new Persons("Numan","Tariq",20,function(){return (this.firstname1+" "+this.lastname1).toUpperCase()})

  console.log(person1.fullname())
  console.log(person2.fullname())