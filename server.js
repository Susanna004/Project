var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get("/", function(req, res){
    res.redirect("index.html");
 });

 server.listen(3000);

 var w = 50;
 var h = 60;
 function genMatrix(w,h){
     var matrix = [];
    for( var y = 0; y<h;y++){
        matrix[y]=[];
        for(var x = 0;x < w; x++) {
        var r = Math.floor(Math.random() * 100);
        if(r<20) r=0
        else if (r < 40) r=1;
        else if (r < 60) r=2;
        else if (r < 75) r=3;
        else if (r < 85) r=4;
        else if (r < 100)r=5;
        matrix[y][x] = r;
     } 
     }
     return matrix;
 }
 
 grassArr = [];
 grassEaterArr = [];
 gishatichArr = [];
 amenakerArr = [];
 trchunArr = [];
 
 var Grass =  require("./class.grass.js");
 var GrassEater = require("./class.eatgrass.js");
 var Gishatich = require("./class.gishatich.js");
 var Amenaker = require("./class.amenaker.js");
 var Trchun = require("./class.trchun.js");

 matrix = genMatrix(w,h)
 for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var et = new GrassEater(x, y);
            grassEaterArr.push(et);
        }

        else if (matrix[y][x] == 3) {
            var gh = new Gishatich(x, y);
            gishatichArr.push(gh);

        }

        else if (matrix[y][x] == 4) {
            var am = new Amenaker(x, y);
            amenakerArr.push(am);

        }

        else if (matrix[y][x] == 5) {
            var tr = new Trchun(x, y);
            trchunArr.push(tr);

        }
    }
}

function drowserver(){
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();

    }
    for (var i in amenakerArr) {

        amenakerArr[i].eat();
        // amenakerArr[i].mul();
        // amenakerArr[i].die();

    }
    for (var i in trchunArr) {
        
        trchunArr[i].eat();
        trchunArr[i].mul();
        trchunArr[i].die();
   }
   io.sockets.emit("matrix",matrix);
}


setInterval(drowserver,3000)