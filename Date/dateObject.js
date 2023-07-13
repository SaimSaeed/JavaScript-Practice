let now = new Date()
console.log(now)
day= now.getDay();
hour = now.getHours();
minutes = now.getMinutes();
mili= now.getMilliseconds();
console.log(day,hour,minutes,mili);
let nuw = new Date("2019 7 3 10:15:30")
console.log(nuw)


//unix time
timw = now.getTime();
console.log(timw) // this is the time in milisceonds from jan1 1970 cuz js understands time in miliseconds

// epoch time
time1 = new Date(0)
console.log(time1)

daysnames = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
output = daysnames[day];
console.log(output)