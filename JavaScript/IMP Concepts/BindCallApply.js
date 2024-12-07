/* 
Bind:
Bind is method to bind a specific object with function.

*/
function CallFunction(a, b) {
    console.log(this.fname, this.lname + " " + a + b)
}

const obj1 = {
    fname: "Nilesh",
    lname: "Shinde",
}


const obj2 = {
    fname: "Akshay",
    lname: "Gawade",
}

// bind function do not invoke immediately we need to call it.
let bind = CallFunction.bind(obj1)() // Nilesh Shinde undefinedundefined 
let bind2 = CallFunction.bind(obj1, "ad", "flkj")()    //Nilesh Shinde adflkj
let b = CallFunction.call(obj1, 'Software ', "Engineer")  //Nilesh Shinde Software Engineer
let apply = CallFunction.apply(obj1, ['Software ', "Engineer"]) //Nilesh Shinde Software Engineer







/* 

Q call() and apply() => 

In JavaScript, both the call() and apply() methods are used to call functions with a specific this value and arguments.
They are similar in functionality but differ in how they accept arguments 

functionName.call(thisArg, arg1, arg2, ...); 

*/




/*
 call() method takes two arguments: thisArg, which is the value to be used as the this value within the function, and arg1, arg2, etc.,
  which are the individual arguments to be passed to the function. 
 */



function greet(name) {

    console.log(`Hello, ${name}!`);

}

greet.call(null, "John")



/*
 apply() method is also a built-in JavaScript function used to invoke a function explicitly, similar to call().
  However, it accepts the arguments as an array or an array-like object. 

  functionName.apply(thisArg, [arg1, arg2, ...]); 

 */






