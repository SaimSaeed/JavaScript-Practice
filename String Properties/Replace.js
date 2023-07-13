let a = "To be or not to be";
let b = a.replace("be","hello")     // replace element on first occurance
console.log(b)

let c = a.replace(/be/g,"hello")  // changes globally
console.log(c);


let d = a.replace(/to/i,"hello")    // ignores case sensitive
console.log(d)


let e = a.replace(/to/gi,"hello")   // applies globally and ignores case sensitive
console.log(e);