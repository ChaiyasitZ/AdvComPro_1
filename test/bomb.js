const bomb = (pos) => {
    const [pos1, pos2, pos3] = pos
    const [x1, y1, t1] = pos1
    const [x2, y2, t2] = pos2
    const [x3, y3, t3] = pos3

    const soundSpeed = 0.343 

    const circle1 = findCircle(x1, y1, t1 * soundSpeed)
    const circle2 = findCircle(x2, y2, t2 * soundSpeed)
    const circle3 = findCircle(x3, y3, t3 * soundSpeed)

    const intersection = circle1.filter(([x, y]) => 
    circle2.some(([x2, y2]) => x == x2 && y == y2) &&
    circle3.some(([x3, y3]) => x == x3 && y == y3)).shift()
    
    return intersection
}

const findCircle = (x, y, r) => {
    const circle = []
    for (let i = 0; i < 360; i++) {
        const rad = i * Math.PI / 180
        circle.push([
            Math.round(x + r * Math.cos(rad)),
            Math.round(y + r * Math.sin(rad))
        ])
    }
    return circle.map(([x, y]) => [parseFloat(x), parseFloat(y)])
}

console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // [0, 25]
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [0, 0]
console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // [21, 13]
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // [8, 35]