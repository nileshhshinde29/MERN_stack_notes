function debounce(func, delay) {

    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Usage example
const debouncedFunction = debounce(() => {
    // Function to be debounced
    console.log('Debounced function called');
}, 2000); // 1000ms (1 second) debounce delay


// window.addEventListener('scroll', debouncedFunction);
// debouncedFunction()
// debouncedFunction()
// debouncedFunction()
// debouncedFunction()
// debouncedFunction()
// debouncedFunction()




// Throttle ************

// initially call imidiatly but after that it call after specific interval.



function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        console.log((now - lastCall), delay);
        if (now - lastCall >= delay) {
            func(...args); // Pass the arguments directly
            lastCall = now;
        }
    };
}

// Usage example
const throttledFunction = throttle(() => {
    // Function to be throttled
    console.log('Throttled function called');
}, 4000); // 3000ms (3 seconds) throttle delay


// setInterval(() => {
    // throttledFunction()
// }, 1000)