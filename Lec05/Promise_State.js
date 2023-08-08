const promise = new Promise((resolve, reject) => { // Promise constructor
    const resr = true; // true or false
    if (resr) { // if true
        resolve("Resolved!"); // resolve
    }
    else { // if false
        reject(Error("Fatal Error!")); // reject
    }
}); 

promise.then( // then() method
    (res) => console.log(res), // resolve
    (err) => console.log(err) // reject
);

