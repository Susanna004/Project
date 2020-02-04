var LivingCreature = require("./LivingCreature.js");

module.exports = class Grass extends LivingCreature {

    // bazmanuma azat vandakneri himan vra
    mul() {
        this.multiply++;

        let arr = this.chooseCell(0)
        

        var newCell = arr[Math.floor(Math.random() * arr.length)];
        console.log(newCell); 
        // console.log(newCell, this.multiply); return;
        if (this.multiply >= 1 && newCell ) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}