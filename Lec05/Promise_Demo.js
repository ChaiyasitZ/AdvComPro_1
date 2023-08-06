function promiseTimeout(ms) {
    return new Promise((resolve, reject) => { 
        setTimeout(resolve, ms); // resolve after ms milliseconds
    });
}

promiseTimeout(2000) // delay 2 seconds
    .then(() => {
        console.log("Done!");
        return promiseTimeout(1000); // delay 1 second
    })
    .then(() => {
        console.log("Also Done!");
        return Promise.resolve(42); 
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error!");
    });




