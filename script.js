var socket = io();
var side = 32;
function setup() {
    var matrixclient = [];
    let grassCountElement = document.getElementById('grassCount');
    let amenakerCountElement = document.getElementById('amenakerCount');
    var client = document.getElementById("weather");
    button = document.getElementById("button");
   // let clickbutton = ;//


    socket.on("data", drawCreatures);

    function drawCreatures(data) {
      console.log(data)
        matrixclient = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        client.innerText = data.weatherserver;


        //   grassEaterCountElement.innerText = data.grassEaterCount;
        createCanvas(matrixclient[0].length * side, matrixclient.length * side)
        background('#acacac');



        for (var i = 0; i < matrixclient.length; i++) {
            for (var j = 0; j < matrixclient[i].length; j++) {
                if (matrixclient[i][j] == 1) {
               //      if (weatherserver == "Summer") {
                        fill("#538200");
                   //}
                }
          
          
            else if (matrixclient[i][j] == 2) {
             //   else if(weatherserver=="Autumn"){
                fill("yellow");
          //  }
        }
            
                else if (matrixclient[i][j] == 0) {
                    fill('#acacac');

                }
                else if (matrixclient[i][j] == 3) {
                    fill('#4682B4');

                }
                else if (matrixclient[i][j] == 4) {
                    fill('#ff4d4d');

                }
                else if (matrixclient[i][j] == 5) {
                    fill('white');

                }
                rect(j * side, i * side, side, side);
            } 
            
        }
    }
}
button.onclick = function(){
     socket.emit("color",FireButton);
    }



// function mousePressed() {
//     var x = Math.floor(mouseX / side);
//     var y = Math.floor(mouseY / side);
//     var arr = [x, y];
//     console.log(arr);
//     socket.emit("fire", arr)
// }






