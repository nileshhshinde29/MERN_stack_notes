const buffer = new Buffer.from("Vishwas")

console.log(buffer);        //  <Buffer 56 69 73 68 77 61 73 >  this hex value of vishwas's binary code
console.log(buffer.toString());
console.log(buffer.toJSON());     // data: [86, 105, 115, 104, 119, 97, 115] 