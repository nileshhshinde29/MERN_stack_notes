// A simple decorator
function log(target, key, descriptor) {
    console.log(`Logging ${key} function`);
    return descriptor;
}

class Example {
    @log
    greet() {
        console.log("Hello, world!");
    }
}

const example = new Example();
example.greet(); // Logs "Logging greet function" and "Hello, world!"