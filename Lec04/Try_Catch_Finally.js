function criticalCode() { // may throw three types of exceptions
    throw "throwing an exception"; // generates an exception
}

function logError(theException) { // takes one argument
    console.log(theException); // logs the exception
}

console.log("\n********Try..Catch********\n"); // generates an exception

try {
    criticalCode(); // may throw three types of exceptions
} catch (ex) { // ex is the caught exception
    console.log("Got an error"); // custom message
    logError(ex); // call a function to further process ex
}
 
console.log("\n********Throwing in Try..Catch********\n"); // generates an exception

try { // may throw three types of exceptions
    throw "An exception that is thrown every time"; // generates an exception
} catch (ex) { // ex is the caught exception
    console.log("Got an error"); // custom message
    logError(ex); // call a function to further process ex
}

console.log("\n********Try..Catch Finally********\n"); // finally always executes

try {
    criticalCode(); // may throw three types of exceptions
} catch (ex) { // ex is the caught exception
    console.log("Got an error"); // custom message
    logError(ex); // call a function to further process ex
} finally { // finally always executes
    console.log("Code that always will run"); // always runs
}
function helloWorld() { // may throw three types of exceptions
    console.log("\n********Throwing Exeptions********\n"); // custom message
} // end helloWorld


