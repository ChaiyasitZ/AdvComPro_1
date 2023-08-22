function canMove(piece, current, target) { 
    let currentX = current.charCodeAt(0) - 65;
    let currentY = parseInt(current[1]) - 1;
    let targetX = target.charCodeAt(0) - 65;
    let targetY = parseInt(target[1]) - 1;
    let xDiff = Math.abs(currentX - targetX);
    let yDiff = Math.abs(currentY - targetY); 

    if (piece === "Pawn") { // Pawn can only move forward
        if (currentX === targetX && currentY - targetY === 1) {
            return true;
        }
    }

    if (piece === "Knight") { // Knight can move in an L shape
        if (xDiff === 1 && yDiff === 2 || xDiff === 2 && yDiff === 1) {
            return true;
        }
    }

    if (piece === "King") { // King can move one space in any direction
        if (xDiff <= 1 && yDiff <= 1) {
            return true;
        }   
    }
    
    if (piece === "Rook") { // Rook can move horizontally or vertically
        if (currentX === targetX || currentY === targetY) {
            return true;
        }
    }

    if (piece === "Bishop") { // Bishop can move diagonally
        if (xDiff === yDiff) {
            return true;
        }
    }

    if (piece === "Queen") {
        if (xDiff === yDiff || currentX === targetX || currentY === targetY) { // Queen can move like Rook or Bishop
            return true;
        }
    }

    return false;
}

console.log(canMove("Pawn", "A5", "A4"));
console.log(canMove("Knight", "A5", "C4"));
console.log(canMove("King", "A5", "B4"));
console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("Bishop", "F8", "B4"));
console.log(canMove("Queen", "C4", "D6"));
