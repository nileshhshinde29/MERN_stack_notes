/* 
Polyfills:
  -Polyfills allows developer to use the latest JavaScript features while maintaining compatibility with older browsers.
  -Polyfills consist of JavaScript code that detects whether a particular feature is supported in the current environment. 
   If the feature is not supported, the polyfill provides its own implementation to mimic the missing functionality.
   e.g belows map and other functions.


   we can use Babel for this also.
   It's a JavaScript compiler that allows you to write modern JavaScript code (including the latest ECMAScript syntax) 
   and then transpile it into a version of JavaScript that's compatible with a wider range of browsers.
   Babel can handle a broad range of transformations and is often used to ensure compatibility across a variety of environments, not just older browsers.

*/





//  Polyfill of Map

const arr = [1, 2, 3, 4];

Array.prototype.map = function (callback) {
    let arr = []

    if (typeof callback !== "function") {
        throw error`${callback} is not a function`
    }
    else {
        for (let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this))
        }
    }
    return arr
}

let b = arr.map(item => item)
console.log(b)

/* ################################################ */
// Polyfills of filter
const arr1 = [1, 2, 3, 4];

Array.prototype.filter = function (callback /*, thisArg */) {

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var filteredArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

let b1 = arr1.filter((item, index) => item < 3)
console.log(b)

/* ##################--- Polyfills of toString ---############################# */

const num = 111;

Object.prototype.toString = function () {

    if (typeof this !== "object") {
        throw new TypeError("toString called on non-number object");
    }
    return String(this);
};

console.log(typeof num.toString())


/// try for slice also.
