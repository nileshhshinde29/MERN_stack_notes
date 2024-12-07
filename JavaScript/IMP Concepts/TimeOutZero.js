

// try running by commenting one function.

Concept2()
f1()


function f1() {

    console.log("1");
    console.log("2");
    setTimeout(() => {
        console.log('3');
    }, 0)
    console.log('4');
}


function Concept2() {

    console.log('a');
    console.log('b');

    setTimeout(() => {
        console.log('c');
    }, 1000);

    delay().then(() => console.log('d'))
    setTimeout(() => {
        console.log('e');
    }, 0)

    console.log("f")

    function delay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 10000);
        });
    }
}