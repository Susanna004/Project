var socket = io();
var side = 32;
var clientweather = "Summer";


function MouseClicked(arr) {
    var x = random(mouseX / side);
    var y = random(mouseY / side);
    var arr = [x, y];
    console.log(arr);
    socket.emit("fire", arr);
}


function setup() {
    var matrixclient = [];
    let grassCountElement = document.getElementById('grassCount');
    let amenakerCountElement = document.getElementById('amenakerCount');
    let client = document.getElementById("weather");

    let button = document.getElementById("button");
    button.onclick = MouseClicked;
    // let clickbutton = ;//


    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        console.log(data)
        matrixclient = data.matrix;
        clientweather = data.weatherserver;
        grassCountElement.innerText = data.grassCounter;
        amenakerCountElement.innerText = data.amenakerCounter;
        client.innerText = data.weatherserver;


        //   grassEaterCountElement.innerText = data.grassEaterCount;
        createCanvas(matrixclient[0].length * side, matrixclient.length * side)
        background('#acacac');



        for (var i = 0; i < matrixclient.length; i++) {
            for (var j = 0; j < matrixclient[i].length; j++) {
                if (matrixclient[i][j] == 1) {
                    if (clientweather == "Spring") {
                        fill("green");
                    }
                    else if (clientweather == "Summer") {
                        fill("darkgreen");

                    }
                    else if (clientweather == "Autumn") {
                        fill("orange");

                    }
                    else if (clientweather == "Winter") {
                        fill("skyblue");

                    }
                }

                else if (matrixclient[i][j] == 2) {
                    fill("yellow");
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