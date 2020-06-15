// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let triangleBit = ""
for (let num = 1 ; num < 8 ; num ++ ) {
    triangleBit = triangleBit + "#"
    console.log(triangleBit);
}