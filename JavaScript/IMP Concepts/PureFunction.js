/*

  Pure function:
      Pure functions always return same output.
     -It does not depend on any external state.
     -It does not modify any external state or have any side effects.

*/

function add(a, b) {
    return a + b;
}

/* 
   Given the same values of a and b, it will always return the same result.
   It does not modify any external state or have any side effects.
   Replacing add(x, y) with its return value x + y will not change the behavior of the program.
*/


// not pure function

let total = 0;
function impureAdd(num) {
    total += num; // Modifies external state (total variable)
    return total;
}
