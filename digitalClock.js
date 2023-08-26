function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours}:${minutes}:${secs}`;
    }

console.log(digitalClock(5025)); // 1:23:45
console.log(digitalClock(61201)); // 17:00:01
console.log(digitalClock(87000)); // 24:10:00