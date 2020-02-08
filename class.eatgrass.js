var LivingCreature = require("./LivingCreature.js")
var random = require("./random");

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y,index) {
        super(x,y,index)
        this.energy = 10;
    }
    //vorpes method
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
    //qayluma
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
            this.energy= 7;
        }
    }
    

        eat() {
            let emptyCells = this.chooseCell(1);
            let newCell = random(emptyCells);
    
            if (newCell) {
    
                this.energy++;
                let x = newCell[0];
                let y = newCell[1];
    
                matrix[y][x] = 2;
                matrix[this.y][this.x] = 1;
    
                for (let i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
                this.x = x;
                this.y = y;
    
                if (this.energy >= 13) {
                    this.mul();
                }
            }
            else {
                this.move()
            }
        }
        
    
    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells); 

        if (newCell) {
          let newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
          matrix[newCell[1]][newCell[0]] = 2;
          grassEaterArr.push(newGrassEater);
          this.energy = 5;
        }
    }

    die() {
        this.energy--
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }

            }
        }

    }
}