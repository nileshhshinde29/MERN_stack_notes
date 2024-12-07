// var:    function scope or global scope.
// let:    block scope.
// const:  block-scoped like let, but immutable

// var:   we can access the variable before its declaration, but the value will be undefined. we can access value defined outside of if() for() and while()

// let and const: let and const are also hoisted, but they are not initialized to undefined. (shows can not access 'a' before initialization)
//                they enter in Temporal dead zone.
//                -Period between the start of the block scope and the actual declaration of the variable, during which the variable is in an 
//                 uninitialized state and any access or assignment to it will result in a reference error.     


// Basic()
function Basic() {
    console.log(a)
    console.log(b)
    console.log(c)

    var a = 'a' // undefined
    let b = 'b'  //  can not access 'b' before initialization
    const c = 'c' // can not access 'c' before initialization
}

// Concept1()
function Concept1() {
    var x = 10;
    if (true) {
        console.log('x1', x);
        var x = 20;
        console.log('x2', x);
    }
    console.log('x', x); // Outputs: 20

    // Using let
    let y = 10;
    if (true) {
        let y = 20;
    }
    console.log(y); // Outputs: 10

    // Using const
    const z = 10;
    // z = 20; // Error: Assignment to constant variable

}
Concept2()
function Concept2() {
    let a = 10;
    var b = 10;
    if (true) {
        // var a = 10; // 'a' has already been declared
        let b = 10
    }
    console.log(a); //10

    //***
    let x = 10;
    var y = 10;
    function f1() {  // working normal with functions
        var x = 20;
        let y = 20;
    }
    console.log(x); // 10
    console.log(y); // 10
}


// hosting
// ArrowFunction()  // Cannot access 'ArrowFunction' before initialization
normalFunction()    // hii


const ArrowFunction = () => {
    console.log('hii');
}

function normalFunction() {

    console.log('hii');
}