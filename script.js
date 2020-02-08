var socket = io();
function setup() {

    var side = 32;

    var matrix = [];
    let grassCountElement = document.getElementById('grassCount');
    let amenakerCountElement = document.getElementById('amenakerCount');
    var client = document.getElementById("weather");


    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        client.innerText = data.weatherserver;


        //   grassEaterCountElement.innerText = data.grassEaterCount;
        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');



        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (weather == "summer") {
                        fill("#538200");
                    }
                }
                else if (matrix[i][j] == 2) {
                    fill("yellow");

                }
                else if (matrix[i][j] == 0) {
                    fill('#acacac');

                }
                else if (matrix[i][j] == 3) {
                    fill('#4682B4');

                }
                else if (matrix[i][j] == 4) {
                    fill('#ff4d4d');

                }
                else if (matrix[i][j] == 5) {
                    fill('white');

                }
            } rect(j * side, i * side, side, side);
        }



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



    function mousePressed() {
        var x = Math.floor(mouseX / side);
        var y = Math.floor(mouseY / side);
        var arr = [x, y];
        socket.emit("fire", arr)
    }

    mousePressed();
}






