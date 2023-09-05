function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    let second = seconds % 60

    if (hours > 23) hours = hours % 24
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (second < 10) second = `0${second}`
    return `${hours}:${minutes}:${second}`
}

console.log(digitalClock(5025)) // 01:23:45
console.log(digitalClock(61201)) // 17:00:01
console.log(digitalClock(87000)) // 00:10:00