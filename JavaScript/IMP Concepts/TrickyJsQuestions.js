// q1

function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000)
    console.log("Namaste JavaScript");
}
x();

// q2

function x() {

    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();

//q3

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();

// q4

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
        console.log("Namaste JavaScript");
    }
}
x();

// q5

function outer() {

    function inner() {
        console.log(a);
        console.log(b);
    }
    let a = 10; // a is declared using let and is block-scoped. It is hoisted to the top of the function, 
    var b = 10;            //   but it is not initialized until the line let a = 10; is reached.So, at the point of the first console.log(a),
    //  a is accessible, and it will output 10.
    return inner;
}

var close = outer();
close();


// q6
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
    I
}
var close = outest()("hello world")
close();

//7

function outer() {
    console.log(a);
    function inner() {
        console.log(a);
        console.log(b);
    }

    var b = 10;
    return inner;
}

let a = 10;
var close = outer();
close();

// q8

function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter()
counter1();
counter1();
var counter2 = counter();
counter2();

// q9
function Counter() { // this is called as constructor function 
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();  // we have to access constructor function with new keyword
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
I
// q10

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100
    return y;
}
var z = x(); // hint: closures having its lexical scope even after function closed.
z();

// q11
let name = "Gauri"

function getName() {

    console.log(name);   // imp
    let name = "nilesh"
}

getName()

// q12
console.log((x => x)('i love programming '));

//q13

const names = "jay Shree ram"
console.log(!typeof names === "object");
console.log(!typeof names === "string");
console.log(!typeof names);
console.log(!typeof names === false);

// q14  

console.log(isNaN('Nilesh'));
console.log(isNaN(1));
/* hii */
let aa = 0;
