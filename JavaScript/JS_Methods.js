let age = [60, 16, 40, 50]

age.every(a => a > 18)  // return true if every element satisfying condition.
age.find(a => a > 18)  // return 60
age.some(a => a > 18)  // return true if any array elements pass a test.
age.findIndex(a => a == 40)  // return 2 ; if not preset it will return -1.



//myArr1.flat(2);
const myArr1 = [[1, 2], [3, [4, 5, 6], 7], 8];
const newArr1 = myArr1.flat(2); //[ 1, 2, 3, 4, 5, 6 ]  ; this 2 is for how deep we want to flat.
const newArr2 = myArr1.flatMap((x) => x * 2);  //[ NaN, NaN, 16 ] ; method maps all array elements and creates a new flat array.

//array.fill(value, start, end)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);   // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ].
fruits.includes("Banana", 3); // return true/false , 3 is for start searching from 3red index.
Array.isArray(fruits)         // true/false.
fruits.lastIndexOf("Apple")  // -1

//Array.from()
let myTxt = "ABCDEFG"
let txt = Array.from(myTxt)  //['A', 'B', 'C','D', 'E', 'F','G']  convert string to array.  
let text = txt.join(''); //"ABCDEFG"
let text1 = txt.join(' and '); // A and B and C and D and E and F and G

//Object 
Object.keys(fruits)  //  [0,1,2,3]
Object.values(fruits) // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
Object.entries(fruits) //[['0', 'Banana'],['1', 'Orange'],['2', 'Kiwi'],['3', 'Kiwi']]


//array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.pop() // 10
array.push(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] last
array.shift() // removes first item in array.
array.unshift() //adds new elements to the beginning of an array.



// //array.reduce(function(total, currentValue, currentIndex, arr), initialValue) // if you want to add initialValue then u have to add it outside the function.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let a = array2.reduce((total, currentValue) => total + currentValue) // 55
array2.valueOf() // returns the array itself [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array2.sort((a, b) => a - b) // sort 
array2.reverse() // reverse the array 
array2.slice(1, 5) //[ 2, 3, 4, 5 ]  not inclusive last index.
array2.slice(-4, -1) // [ 7, 8, 9, 10 ] 
// array.splice(index, howmany, item1, ....., itemX)

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];

fruitsss.splice(2, 1, 'kiwi', 'greps')
console.log(fruitsss);

let a1 = "hello, how are you"

console.log(a1.substring(0, 5)) // get substring
console.log(a1.substring(1, a1.length)) // remove first letter
console.log(a1.substring(0, a1.length - 1)) // remove last letter
console.log(a1.split('o')[0]) // remove string after "o"