// function callback() {
//     console.log("Timeout completed");
// }

// setTimeout(callback, 1000); // delay 1 seconds

longRunningOperation(() => {
    anotherLongRunningOperation(() => {
        yetAnother(() => {
            onemore (() => {
                lastOne(() => {
                    console.log("Where are we?");
                });
            });
        });
    });
});


