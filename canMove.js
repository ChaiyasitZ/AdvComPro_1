// create function that takes the name of a chess piece and returns an array of all possible moves
// example output is canMove("Rook", "A8", "H8") -> true

function canMove(piece, current, target) { 
    let currentX = current.charCodeAt(0) - 65;
    let currentY = parseInt(current[1]) - 1;
    let targetX = target.charCodeAt(0) - 65;
    let targetY = parseInt(target[1]) - 1;
    let xDiff = Math.abs(currentX - targetX);
    let yDiff = Math.abs(currentY - targetY);
    
    if (piece === "Rook") {
        if (currentX === targetX || currentY === targetY) {
            return true;
        }
    }

    if (piece === "Bishop") {
        if (xDiff === yDiff) {
            return true;
        }
    }

    if (piece === "Queen") {
        if (xDiff === yDiff || currentX === targetX || currentY === targetY) {
            return true;
        }
    }

    return false;
}

console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("Bishop", "F8", "B4"));
console.log(canMove("Queen", "C4", "D6"));
