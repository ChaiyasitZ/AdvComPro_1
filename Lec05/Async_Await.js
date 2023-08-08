function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("Start!!");
    await promiseTimeout(1000); // delay 1 seconds
    console.log("Done!!");
}

run();
