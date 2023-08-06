const promise = new Promise((resolve, reject) => {
    const resr = true;
    if (resr) {
        resolve("Resolved!");
    }
    else {
        reject(Error("Fatal Error!"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);

