var d1= new Date("March 3 2002 10:10:10");
var d2= new Date("March 3 2023 10:10:10" );

timeDiff = d2.getTime()-d1.getTime();

console.log("TimeDiff "+ timeDiff);

timeinDay = 24*60*60*1000;
console.log("TimeinDay "+timeinDay);

days = timeDiff/timeinDay;
console.log("Time " + days)