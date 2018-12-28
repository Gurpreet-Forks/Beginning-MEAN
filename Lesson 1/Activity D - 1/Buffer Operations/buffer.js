//a.	Create an uninitialized Buffer by passing buffer size to alloc() or creating an instance of buffer class.
var buf1 = Buffer.alloc(16); 
var buf2 = new Buffer(5); 

console.log(buf1)
console.log(buf2)


//b.	Create a Buffer from a given array; using from() or from an instance of a buffer
var buf3 = new Buffer([10, 20, 30, 40, 50]);
var buf4 = Buffer.from([ 10, 20, 30, 40, 50]);

console.log(buf3)
console.log(buf4)

//4.	To write into a buffer
var buf5 = new Buffer("Hi packt students!", "utf-8");
var buf6 = Buffer.from("Hi packt students!", "utf-8")

var len = buf6.write("Pactk student", "utf-8");
console.log(len);

//5.	To read from buffer

res = buf5.toString("utf-8", 0, 13)
console.log (res)



