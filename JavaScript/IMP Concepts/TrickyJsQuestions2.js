/* 

let a = [];
let b = [];

console.log(a == b)
console.log(a === b)
//-------------------

let a= [];
let b=a;
console.log(a==b)
console.log(a===b)

//---------------------


*/
/* 
console.log(typeOf NaN);   NaN is special type of number
*/
/* 

let data= 10- -10;  ( --=+ )
console.log(data);

*/
/* 

const set= new Set([1,1,2,3,3,4,5])
console.log(set)


*/
/* 
let data={name:'nilesh'}
console.log(delete data.name);
console.log(data);
*/
/* 

let data= {name:'nielsh'}
console.log(delete data);

*/
/* 

const data=['Nilesh', "shinde"]
const [y]=data
console.log(y);
*/
/* 
const data=['Nilesh', "shinde" ,"hanmant"]
const [,y]=data
console.log(y);

*/
/* 

const res= false || {} || null
console.log(res)

*/
/* 
const res = null || false || ""
console.log(res);

*/

/* 

let person ={name: "Nilesh"}

Object.seal(person)
person.age=20
console.log(person);
*/

/* 
console.log('3' + 3)
console.log(3 + '3')
console.log('3' - 3)
console.log('3' - '3')
console.log('3'+  +3)
console.log(3+ +'3'+ '3')
console.log("3"- -3)
console.log(3- -'3')
*/
/* 
console.log(3 * 3)
console.log(3 ** 3)
*/

/* 

let A10=20;
let 10 = 20 
let 10A = 20;
hint : in js variable name is can not start with number or it can not be number. 

*/
/* 
let a="like";
let b = 'like';
console.log(a===b);

*/

/* 
let a= 1;
let b= 1;
let c=2


console.log(--c === a);
console.log(a === b === --c);
console.log(true == 1);
console.log(true === 1);


*/

/* 
console.log(3*3)
console.log(3**3)
console.log(3***3)
*/

/* 
let for= 100;

*/
/* 
for(var i=0; i<3; i++){
   setTimeout(()=> console.log(i), 1000)
}

for(let i=0; i<3; i++){
   setTimeout(()=> console.log(i), 1000)
}
*/

/* 
console.log(+true);
console.log(typeof +true);

*/
/* 
console.log(!"nilesh");

*/

/* 
let c = {name:"nilesh"}
let d;
d= c;
console.log(d.name)
c.name = "anil"
console.log(d.name)

*/

/* 
var x= 10;
var x= 11;
console.log(x)

*/

/* 
let a= 30;
let a= 33
console.log(a)
*/

/* 
let b = 3
let a= new  Number(3)

console.log(typeof(a))
console.log(a == b)
console.log(a === b)
//----
let c = Number(10)
console.log(typeof c)
*/

/* 
b={name:"hi"}

console.log(b)
*/

/* 
let a= 0
console.log(a++) //0                                                            
console.log(++a) //2                                                            
console.log(a)   //2                                                            

*/

/* 
function getAge(...arg){
    console.log(typeof arg)
}

getAge(21)

hint: type of array is object;
*/

/* 
 function Age(){
 "use strict"
       age=21 ; // by default  global variable
       console.log(age);
 }
 Age()

*/

/* 
const a= eval('10*10+5')
console.log(a);

*/
/* 
let a = {1:'nilesh'}
console.log(a.hasOwnProperty("1"))
console.log(a.hasOwnProperty(1))
*/

/* 
let obj= {
    a: 'one',
    b:'two',
    a:'three'
}
console.log(obj);
*/

/* 
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
o/p= 0,1,2,4

*/
/* 
   <div onClick={()=>console.log('first div')}>
      <div onClick={()=>console.log('second div')}>
           <button onClick={()=>console.log('button')}>Button </button>
       </div>
   </div>

   o/p => button second first

*/
/* 

 <div onClick={()=>alert('first div')}>
      <div onClick={()=>alert('second div')}>
           <button onClick={()=>alert('button')}>Button </button>
       </div>
</div>

o/p => button second first


*/

/* 

function sayHi(){
    return (()=>0)() // if not call here it will return function, we called here means it will return 0 i.e. number
}

console.log(sayHi())
console.log(typeof sayHi())

*/

/* 
console.log(typeof typeof 1); // string 

*/

/* 
const number = [1,2,3]
number[6]=11
console.log(number);

*/
/* 
  
  const number = [1,2,3]
  number[5]= number
  console.log(number);
  
  // infinite nested array :check in web console
*/

/* 

// 80 Everything in JavaScript is either a...
// A: primitive or object  *ans 
// B: function or object
// C: trick question! only objects
// D: number or object

*/

/* 
console.log(!!null);
console.log(!!"");
console.log(!!1);

*//* 

console.log(setInterval(()=>console.log('hii'),1000));
console.log(setInterval(()=>console.log('hii'),1000));
console.log(setInterval(()=>console.log('hii'),1000));

*/

/* 
console.log([..."nilesh"]);

*/

/* 
 const firstPromise  = new Promise ((res, rej) => {
    setTimeout (res, 500, 'one');
  });

 const secondPromise = new Promise ((res, rej) => {
    setTimeout(res, 100, 'two');
  });

 Promise.race([firstPromise, secondPromise]).then(res =>console.log(res));

hint: Promise.race is return value of first resolved promise

*/

/* 
let person ={name:'peter'}

const member= [person]
person = null
console.log(member);

*/
/* 

 /* 
 const person ={name:'Peter', lastname:'Parker'}

    for(const item in person){
        console.log(item)
    }
 */
/*
let data= 3 + 3 +"3" 

console.log(typeof data)
console.log(typeof 3+ 3 +"3")
console.log(typeof 3+ 3+ +"3")
console.log(typeof (3+ 3+ +"3"))
 
*/

/* 
let data= [1, 2, 3].map(num => {
if (typeof num === 'number') return; I
return num * 2;
});
console.warn (data);

*/

/* 

function getInfo(member) {
    member.name = 'Anil';
}

const person = { name: 'Sarah' };

getInfo(person);

console.log(person); // Anil
*/

/* 

function Car() {
    this.make = 'tata';
    return { make: 'Kia' };
} 

const myCar = new Car();
console.log (myCar.make);

*/

/* 
(()) => {
    let x = (y = 10);
})();
console.log(typeof x); 
*/

/* 

(() => {
    let x=y = (y = 10); //if not given data type, y is acting as global variable.
})();
console.log(typeof y); 

*/
/* 

(()=>{
    let x= y=10
})();

(()=>{
    let x= y=20
})();

console.log(y);
*/

/* 
let x=100;
(()=>{
    var x=20;
})()

console.log(x);

*/

/* 

console.log(!true - true) // -1
console.log(true + +"10"); // 11
*/

/* 
let a= "hello, how are you"

console.log(a.substring(0,5)) // get substring
console.log(a.substring(1,a.length)) // remove first letter
console.log(a.substring(0,a.length-1)) // remove last letter
console.log(a.split('o')[0]) // remove string after "o"
*/

/* 
console.log([] == ![])
console.log(!!"false" == !!"true");
console.log(NaN==NaN);
console.log([] == '' )
console.log(null == undefined);

let a = [, , ,];
console.log(a.length)
console.log(a.join())

let a = [undefined, undefined, undefined, undefined];
console.log(a.length);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.3 == 0.4);


*/

/* 
function getNumber() {
  return{
    value: 23
  };
}
console.log(getNumber())

--VS--

function getNumber() {
  return                  //here obj is at second line of return. try with ; also.
  {
    value: 23
  };
}
console.log(getNumber())

Automatic Semicolon Insertion causes the return to be treated as a standalone statement, so the function returns undefined.

*/

/* 
var num = 8;
function fun() {
    num += 7;
    num--;
    console.log(num);
}
fun();

*/

/* 
var val = (1, 2, 3, 4);
console.log(val);
*/

/* 
let obj = {
  value: 'hello',
  print: function(callback) {
    callback();
  }
};

function sayValue() {
  console.log(this.value);
}

obj.print(sayValue);
obj.print(sayValue.bind(obj));

*/

/* 
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
console.log(typeof bar());

*/
/* 

let a = (b = 3) - 3; 
console.log(a, typeof b);

*/

/* 
let arr1 = new Array(3).fill([]);
let arr=[[],[],[]]

arr1[0].push(10);
arr[0].push(10);

console.log(arr1);
console.log(arr);
*/

/* 
(function(){
  var a = b = 3;             //in this  its act like var a = b , b = 3, b acts like a global variable
})();

console.log(b)
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

*/

/* 
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 3));
*/

/* 

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;     // { '[object Object]': 123 }
a[c]=456;     // { '[object Object]': 456 }  

console.log(a[b]);

*/

/* 
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

----
(function(x) {
    return (function(x) {
        console.log(x);
    })(2)
})(1);
*/


/* 

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

*/

/* 
console.log(null == undefined ) why?
console.log(null === undefined )
*/

/* 

console.log(sum(2,3))
console.log(sum(2)(3))  both output must be 5

const sum =(x,y)=>{
  if(y==undefined){
    return (y)=>{
      return x+y
    }
  }
  return x+y
}



*/

/* 

const a= {name:"nilesh"} 
a.name="sachin"
a= {name:'rutu'}
console.log(a)

we can change property but can not reassign to variable declared using const.
*/
