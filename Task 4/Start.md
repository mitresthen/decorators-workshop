```
class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }

    @log
    warmth(inc: number) {
        this.coziness = this.coziness + inc;
        console.log(`The current coziness is ${this.coziness}`)
    }

}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)


h.warmth(5);
```