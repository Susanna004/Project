function setup() {
  var socket = io(); 
  var side = 20; 
  
  var matrix = [];
//   let grassCountElement = document.getElementById('grassCount');
//   let grassEaterCountElement = document.getElementById('grassEaterCount');

  
  socket.on("data", drawCreatures);

  function drawCreatures(data) {
 
      matrix = data.matrix;
    //   grassCountElement.innerText = data.grassCounter;
      createCanvas(matrix[0].length * side, matrix.length * side)

      background('#acacac');
    

      //! Drawing and coloring RECTs
      for (var i = 0; i < matrix.length; i++) {
          for (var j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] == 1) {
                  fill("green");
                  rect(j * side, i * side, side, side);
              } else if (matrix[i][j] == 2) {
                  fill("orange");
                  rect(j * side, i * side, side, side);
              } else if (matrix[i][j] == 0) {
                  fill('#acacac');
                  rect(j * side, i * side, side, side);
              } else if (matrix[i][j] == 3) {
                  fill('red');
                  rect(j * side, i * side, side, side);
              } else if (matrix[i][j] == 4) {
                  fill('blue');
                  rect(j * side, i * side, side, side);
              } else if (matrix[i][j] == 5) {
                  fill('yellow');
                  rect(j * side, i * side, side, side);
              }
          }
      }
  }
}
//   let grassCountElement = document.getElementById('grassCount');
//   let grassEaterCountElement = document.getElementById('grassEaterCount');

// socket.on("data", drawCreatures);


// matrix = drawMatrix(m,n)
// function drawMatrix() {
//     console.log(matrix);
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("#538200");

//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow");
          
//             }

//             else if (matrix[y][x] == 3) {
//                 fill("#4682B4");
 
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("#ff4d4d");
    
//             }

//             else if (matrix[y][x] == 5) {
//                 fill("white");
            
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
                
//             }
//         }rect(x * side, y * side, side, side);
//     }
// }

//     socket.on("matrix",drawMatrix);






    

