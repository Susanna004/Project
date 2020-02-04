var LivingCreature = require("./LivingCreature.js")

module.exports = class Trchun extends LivingCreature  {
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 15;
    }*
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 2],

        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
      
        let arr = this.chooseCell(0)
        var newCell = arr[Math.floor(Math.random() * arr.length)];  

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.y = newY;
            this.x = newX;
            this.energy--;
        }


    }

    eat() {

        let arr = this.chooseCell(4)
        var newCell = arr[Math.floor(Math.random() * arr.length)]; 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            for (var i in amenakerArr) {
                if (newX == amenakerArr[i].x && newY == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy ++;
        }
        else{
            this.move()
        }
    }

    mul() {

        let arr = this.chooseCell(0)
        var newCell = arr[Math.floor(Math.random() * arr.length)]; 
        if (newCell && this.energy > 15) {
            var newTrchun = new Trchun(newCell[0], newCell[1], this.index);
            trchunArr.push(newTrchun);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }


    die() {
        this.energy--
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in trchunArr) {
                if (this.x == trchunArr[i].x && this.y == trchunArr[i].y) {
                    trchunArr.splice(i, 1);
                    break;
                }
            }
        }



    }

}