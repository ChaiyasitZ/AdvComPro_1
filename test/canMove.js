function canMove(piece, current, target) { 
    let currentX = current.charCodeAt(0) - 65;
    let currentY = parseInt(current[1]) - 1;
    let targetX = target.charCodeAt(0) - 65;
    let targetY = parseInt(target[1]) - 1;
    let xDiff = Math.abs(currentX - targetX);
    let yDiff = Math.abs(currentY - targetY); 

    if (piece === "Pawn") { 
        if (currentX === targetX && currentY - targetY === 1) {
            return true;
        }
    }

    if (piece === "Knight") { 
        if (xDiff === 1 && yDiff === 2 || xDiff === 2 && yDiff === 1) {
            return true;
        }
    }

    if (piece === "King") { 
        if (xDiff <= 1 && yDiff <= 1) {
            return true;
        }  
    }
    
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

console.log(canMove("Pawn", "A5", "A4")); // true
console.log(canMove("Knight", "A5", "C4")); // true
console.log(canMove("King", "A5", "B4")); // true
console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "F8", "B4")); // true
console.log(canMove("Queen", "C4", "D6")); // true
