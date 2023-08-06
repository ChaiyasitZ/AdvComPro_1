function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("Start!!");
    await promiseTimeout(2000); // delay 2 seconds
    console.log("Done!!");
}

run();
