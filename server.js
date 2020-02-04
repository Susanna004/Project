var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var random = require("./random");

app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000);


function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100);
            if (r < 20) r = 0
            else if (r < 40) r = 1;
            else if (r < 60) r = 2;
            else if (r < 75) r = 3;
            else if (r < 85) r = 4;
            else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

grassArr = [];
grassEaterArr = [];
matrix = [];
gishatichArr = [];
amenakerArr = [];
trchunArr = [];
grassHashiv = 0;

var Grass = require("./class.grass.js");
var GrassEater = require("./class.eatgrass.js");
var Gishatich = require("./class.gishatich.js");
var Amenaker = require("./class.amenaker.js");
var Trchun = require("./class.trchun.js");

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
    for (let i = 0; i < Amenaker; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < Trchun; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}

matrixGenerator(20, 1, 5, 10, 18, 19);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }

            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }

            if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }

            if (matrix[y][x] == 4) {
                var amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker);
            }

            if (matrix[y][x] == 5) {
                var trchun = new Trchun(x, y);
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
    grassCounter: grassHashiv
}


io.sockets.emit("data", sendData);
}



setInterval(drowserver, 1000)