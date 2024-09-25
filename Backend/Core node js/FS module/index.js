const fs = require('fs')


const Asynchronous = () => {
    console.log('1')

    fs.readFile('./file.txt', "utf-8", (err, result) => { //non blocking
        console.log(result);
    })

    console.log('3');
}


const syncFunction = () => {
    console.log('1');

    console.log(fs.readFileSync('./file.txt', "utf-8")); //blocking 

    console.log('3');
}



Asynchronous()
syncFunction()

fs.writeFileSync('./file.txt', "hello Shrikant")

fs.writeFile('./file.txt', " hello Akshay", () => {
    console.log("hii");
})


fs.writeFile('./file.txt', " hello Akshay", { flag: 'a' }, () => {  // flag: a is used to append (update)  file
    console.log("hii");
})


