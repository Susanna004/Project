
// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var amenakerArr = [];
var trchunArr = [];

var side = 15;
let matrix = []; // Մատրիցի ստեղծում
let rows = 25; // Տողերի քանակ
let columns = 25; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a < 10) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        else if (a < 60) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a < 80) {
            matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        }
        else if (a < 90) {
            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        }
        else if (a < 98) {
            matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        }
        else if ( a < 111) {
            matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        }
    }
}



function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    //pttvum em matrix mejov u stexcum em object
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);
            }

            else if (matrix[y][x] == 3) {
                var gh = new Gishatich(x, y, 3);
                gishatichArr.push(gh);

            }

            else if (matrix[y][x] == 4) {
                var am = new Amenaker(x, y, 4);
                amenakerArr.push(am);

            }

            else if (matrix[y][x] == 5) {
                var tr = new Trchun(x, y, 5);
                trchunArr.push(tr);

            }
        }
    }
}
//draw uxaki nerkuma
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#538200");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("#4682B4");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#ff4d4d");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
    //kanchum em methodnery
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

}