// const bike1 = require("./file")
// bike1.setName("10R")
// console.log(bike1.getName());


// const bike2 = require("./file")
// console.log(bike2.getName());

const superBike = require('./file')
const bike = new superBike("Java")

bike.setName("Bullet")
console.log(bike.getName());

const bike2 = new superBike('Honda')
console.log(bike2.getName());