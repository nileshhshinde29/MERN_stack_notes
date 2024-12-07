/* 

JSON.stringify():
       JSON.stringify() is a built-in JavaScript method that converts a JavaScript object or value into a JSON-formatted string.
*/
const data = {
    name: "John",
    age: 30,
    isEmployed: true,
};


const jsonString = JSON.stringify(data); // Output: '{"name":"John","age":30,"isEmployed":true}'

/* 

JSON.parse():
        Is a built-in JavaScript method that takes a JSON-formatted string as its parameter and converts it back into a JavaScript object or value.
*/
const jsonString1 = '{"name":"John","age":30,"isEmployed":true}';
const parsedData = JSON.parse(jsonString1);
console.log(parsedData); // Output: { name: "John", age: 30, isEmployed: true }


/*-------------------------------------------------------------------------------------------------------------- */
/* 
session storage and local storage :
        both are part of web storage apis  which is provided by modern web browser as part of HTML 5 specification.
        both are allow us to store data locally at client side.

    sessionStorage:
        The data stored in sessionStorage is accessible only for the duration of the page session. 
        if we navigate form window or close tab, the session storage automatically cleared.
        Session storage not accessible in other tabs or window on same browser.

        we can interact with local storage using setItem, getItem , removeItem, clear methods;

    localStorage:
        The data stored using localStorage is available into any window of same browser.
*/


/*
 
differance between fetch and axios

fetch:  it handles http network header only, we need to create extra functionality to handle 404 and 500 error
        It dont have intercepters.
        It does not support on old browser like internet explorer. In this case need polifils.       

axios:  It handles all errors.
        It have interceptors,
        It have supported with all browser.   

*/   
               
       
