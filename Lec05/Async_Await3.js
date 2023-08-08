function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve("Lucky!!") : reject("Nope 😠"); // if 1, resolve, if 0, reject
    });
}

async function msg() { 
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay
msg(); // Lucky!! <-- yay or nay

