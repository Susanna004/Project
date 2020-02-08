function setup() {
  var socket = io(); 
  var side = 32; 
  
  var matrix = [];
let grassCountElement = document.getElementById('grassCount');
let amenakerCountElement = document.getElementById('amenakerCount');
// let grassEaterCountElement = document.getElementById('grassEaterCount');

  
  socket.on("data", drawCreatures);

  function drawCreatures(data) {
 
      matrix = data.matrix;
      grassCountElement.innerText = data.grassCounter;
      amenakerCountElement.innerText = data.amenakerCounter;
    //   grassEaterCountElement.innerText = data.grassEaterCount;
      createCanvas(matrix[0].length * side, matrix.length * side)

      background('#acacac');
    
    

      for (var i = 0; i < matrix.length; i++) {
          for (var j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] == 1) {
                  fill("#538200");
                  rect(j * side, i * side, side, side);
              } 
              else if (matrix[i][j] == 2) {
                  fill("yellow");
                  rect(j * side, i * side, side, side);
              } 
              else if (matrix[i][j] == 0) {
                  fill('#acacac');
                  rect(j * side, i * side, side, side);
              } 
              else if (matrix[i][j] == 3) {
                  fill('#4682B4');
                  rect(j * side, i * side, side, side);
              } 
              else if (matrix[i][j] == 4) {
                  fill('#ff4d4d');
                  rect(j * side, i * side, side, side);
              } 
              else if (matrix[i][j] == 5) {
                  fill('white');
                  rect(j * side, i * side, side, side);
              }
   
          }
      }
//       document.getElementById("weather") = function drawWeather(){
//         if(weather == "Summer"){
//             package.innerText = "Summer";
//         }
//        else if(weather == "Winter"){
//             package.innerText = "winter";
//         }
//         else if(weather == "Autumn"){
//             package.innerText = "Autumn";
//         }
//         else if(weather == "Spring"){
//             package.innerText = "Spring";
//         }
//     }
//   }
//  socket.on("exanak",getWeather);
//  socket.on("exanak", function(w){
//      wather = w;
//     console.log(weather);
//  })
    //  function myFunction() {
    //     for (var i = 0; i < matrix.length; i++) {
    //         for (var j = 0; j < matrix[i].length; j++) {
    //             if (matrix[i][j] == 0) {
    //                 fill("black");
    //                 rect(j * side, i * side, side, side);
    //             }
    //   }
    // }
    // }
}

   






    

}