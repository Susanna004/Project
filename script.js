var socket = io();
var m = 20;
var n = 20;
var side = 20;

function setup() {
    frameRate(5);
    createCanvas(m * side,n* side);
    background('#acacac');
}
matrix = drawMatrix(m,n)
function drawMatrix() {
    for (var y = 0; y < matrix; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#538200");

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
          
            }

            else if (matrix[y][x] == 3) {
                fill("#4682B4");
 
            }
            else if (matrix[y][x] == 4) {
                fill("#ff4d4d");
    
            }

            else if (matrix[y][x] == 5) {
                fill("white");
            
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                
            }
        }rect(x * side, y * side, side, side);
    }
}

    socket.on("matrix",drawMatrix);

// for (let y = 0; y < rows; y++) {
  //  matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
//     for (let x = 0; x < columns; x++) {
//         let a = Math.floor(Math.random() * 100);
//         if (a < 10) {
//             matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
//         }
//         else if (a < 60) {
//             matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
//         }
//         else if (a < 80) {
//             matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
//         }
//         else if (a < 90) {
//             matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
//         }
//         else if (a < 98) {
//             matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
//         }
//         else if ( a < 111) {
//             matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
//         }
//     }
// }




    

//draw uxaki nerkuma

