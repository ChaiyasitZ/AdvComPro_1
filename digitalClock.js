// example output is 5025 seconds in 1 hour 23 minutes 45 seconds

function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours}:${minutes}:${secs}`;
    }

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));