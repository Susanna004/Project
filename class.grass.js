var LivingCreature = require("./LivingCreature.js");
var random = require("./random");

module.exports = class Grass extends LivingCreature {

    // bazmanuma azat vandakneri himan vra
    mul() {
        // setTimeout(mul(), 6000);
        this.multiply++;

        let emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells);  
        // console.log(newCell, this.multiply); return;
        if (this.multiply >= 1 && newCell ) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
            
        }
    }
}