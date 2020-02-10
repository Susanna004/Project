var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
let random = require("./random");

grassArr = [];
grassEaterArr = [];
matrix = [];
gishatichArr = [];
amenakerArr = [];
trchunArr = [];
grassHashiv = 0;
amenakerHashiv = 0;
grassEaterHashiv = 0;
weatherinit = 1;
weather = "Summer";

app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000);



var Grass = require("./class.grass.js");
var GrassEater = require("./class.eatgrass.js");
var Gishatich = require("./class.gishatich.js");
var Amenaker = require("./class.amenaker.js");
var Trchun = require("./class.trchun.js");

function getWeather() {
    weatherinit++;
    if (weatherinit == 5) {
        weatherinit = 1;
    }
    else if (weatherinit == 4) {
        weather = "Winter"
    }
    else if (weatherinit == 3) {
        weather = "Autumn"
    }
    else if (weatherinit == 2) {
        weather = "Spring"
    }
    else if (weatherinit == 1) {
        weather = "Summer"
    }
}


function matrixGenerator(matrixSize, Grass, GrassEater, Gishatich, Amenaker, Trchun) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < Grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < GrassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < Gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    // for (let i = 0; i < Amenaker; i++) {
    //     let customX = Math.floor(random(matrixSize));
    //     let customY = Math.floor(random(matrixSize));
    //     matrix[customY][customX] = 4;
    // }
    for (let i = 0; i < Trchun; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}

matrixGenerator(20, 30, 45, 10, 0, 25);

setTimeout(function () {
    console.log(matrix)
    matrix[5][10] = 4
    var amenaker = new Amenaker(5, 10, 4);
    amenakerArr.push(amenaker);
    amenakerHashiv++;
}, 6000)

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            }

            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y, 1);
                grassArr.push(grass);
                grassHashiv++;
            }

            if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }

            // if (matrix[y][x] == 4) {
            //     var amenaker = new Amenaker(x, y, 4);
            //     amenakerArr.push(amenaker);
            //     amenakerHashiv++;
            // }
            if (matrix[y][x] == 5) {
                var trchun = new Trchun(x, y, 5);
                trchunArr.push(trchun);
            }
        }
    }
}
creatingObjects();


function drowserver() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].move();
            grassEaterArr[i].eat();
            grassEaterArr[i].mul();
            grassEaterArr[i].die();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].move();
            gishatichArr[i].eat();
            gishatichArr[i].mul();
            gishatichArr[i].die();

        }
    }
    if (amenakerArr[0] !== undefined) {
        for (var i in amenakerArr) {

            amenakerArr[i].eat();
            // amenakerArr[i].mul();
            // amenakerArr[i].die();

        }
    }
    if (trchunArr[0] !== undefined) {
        for (var i in trchunArr) {
            trchunArr[i].eat();
            trchunArr[i].mul();
            trchunArr[i].die();
        }
    }

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        amenakerCounter: amenakerHashiv,
        weatherserver: weather,
        // grassEaterCounter: grassEaterHashiv
    }
    io.sockets.emit("data", sendData);
}

io.on('connection', function (socket){
    socket.on("fire", function (arr){
       
       
     })
    })
    
   io.on("connection", function (socket) {
    socket.on("fire", function (arr) {
        var x = arr[0];
        var y = arr[1];

        // var directions = [
        //     [x - 1, y - 1],
        //     [x, y - 1],
        //     [x + 1, y - 1],
        //     [x - 1, y],
        //     [x + 1, y],
        //     [x - 1, y + 1],
        //     [x, y + 1],
        //     [x + 1, y + 1]
        // ];

        // for (var i = 0; i < matrix.length; i++) {
        //     for (var j = 0; j < matrix[i].length; j++) {
        //         if (matrix[i][j] == 1) {
        //             fill('black');
        //             rect(j * side, i * side, side, side);
        //         }
        //         else if (matrix[i][j] == 0) {
        //             fill('black');
        //             rect(j * side, i * side, side, side);
        //         }
                


        //     }
        // }
        
        if (matrix[y][x] == 1) {
            for (var i in grassArr) {
                if (y == grassArr[i].y && x == grassArr[i].x) {
                    fill('black');
                    break;
                };
            }
        } else if (matrix[y][x] == 2) {
            for (var i in grassEaterArr) {
                if (y == grassEaterarr[i].y && x == grassEaterarr[i].x) {
                    fill('black');
                    break;
                };
            }
        }
        // matrix[y][x] = 0;
        // for (var i in directions) {
        //     let harevanx = directions[i][0];
        //     let harevany = directions[i][1];
        //     if (matrix[harevany][harevanx] == 1) {
        //         for (var i in grassArr) {
        //             if (y == grassArr[i].y && x == grassArr[i].x) {
        //                 grassArr.splice(i, 1);
        //                 break;
        //             }
        //         }
        //     }
        //     else if (matrix[harevany][harevanx] == 2) {
        //         for (var i in grassEaterarr) {
        //             if (y == grassEaterarr[i].y && x == grassEaterarr[i].x) {
        //                 grassEaterArr.splice(i, 1);
        //                 break;
        //             };
        //         }
        //     }
        //     matrix[harevany][harevanx] = 0;
        // }

    })
})

var obj = { "info": [] };
function writefile() {
    var fileName = "Statics.json";
    obj.info.push({ "cnvac xoteri qanak": grassHashiv });
    obj.info.push({ "cnvac amenakerneri qanak": amenakerHashiv });
    fs.writeFileSync(fileName, JSON.stringify(obj, null, 3))
}

setInterval(drowserver, 1000)
setInterval(getWeather, 3000)
setInterval(writefile, 6000)

