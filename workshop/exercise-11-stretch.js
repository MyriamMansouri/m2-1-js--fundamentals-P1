// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
let chessBoard ='';
for (let num = 0; num < 8; num ++){
    if (num % 2 === 0 ) {
        chessBoard = chessBoard + "#_#_#_#_\n";
    } else {
        chessBoard = chessBoard + "_#_#_#_#\n";
    }
}
console.log(chessBoard);