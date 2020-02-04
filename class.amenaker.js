var LivingCreature = require("./LivingCreature.js");
var random = require("./random");

module.exports = class Amenaker extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        //yntruma vandak
        let emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells);  
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.y = newY;
            this.x = newX;
            this.energy-=3;
            if (this.energy <= 0) {
                this.die();
            }
        }


    }
    eat() {

        var newCell1 = this.chooseCell(1);
        var newCell2 = this.chooseCell(2);
        var newCell3 = this.chooseCell(3);
        var newCell11 = newCell1.concat(newCell2, newCell3)
        let emptyCells = newCell11;
        var newCell = random(emptyCells);   

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            
            }
            this.y = newY;
            this.x = newX;
            this.energy++;
            this.multiply+=2;
            if (this.multiply >= 3) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    mul() {

        let emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells);  
        if (newCell) {
            var newAmenaker = new Amenaker(newCell[0], newCell[1], this.index);
            amenakerArr.push(newAmenaker);
            matrix[newCell[1]][newCell[0]] = 4;
            this.multiply = 0;
        }
    }


    die() {
        // this.energy--

        matrix[this.y][this.x] = 0;
        for (var i in amenakerArr) {
            if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                break;
            }


        }


    }
}