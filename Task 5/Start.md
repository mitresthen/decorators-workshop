# START - Task 5
``` 

class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }


    warmth(inc: number) {
        if(this.coziness + inc > 100) {
            throw Error("Cant do it");
        }
        this.coziness = this.coziness + inc;
        console.log(`The current coziness is ${this.coziness}`)
    }

    breakThermostat() {
        throw Error("New thermostats are expensive, you shouldn't do this")
    }


    getCoziness() {
        return this.coziness;
    }

}

```