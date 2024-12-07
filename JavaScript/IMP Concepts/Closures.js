// /*
// closures: 
//      closure is the combination of a function bundled together.
//      A closure gives you access to an outer function's scope from an inner function.
//      In JavaScript, closures are created every time a function is created, at function creation time.
// */

// const privateCounter = () => {

//     let count = 1;
//     return {
//         increment: (val) => {
//             count += 1;
//         },
//         getValue: () => {
//             return count;
//         }
//     }
// }

// const counter = privateCounter()   // here closure is created.

// console.log(counter.getValue())   // 1
// counter.increment();
// console.log(counter.getValue());   // 2


// // e.g. 2.

// const getSecret = () => {
//     const a = "hello"
//     return a
// }

// const secret = getSecret();
// console.log(secret)



