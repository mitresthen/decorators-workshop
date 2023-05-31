# decorators-workshop


## Step 1

```
class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }

    @doNothing
    warmth() {
        this.coziness = this.coziness +1;
    }
}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)


h.warmth();
console.log(`The current cosiness is ${h.coziness}`)
```


```
linux/mac: tsc Main.ts && node Main.ts

Windows: tsc Main.ts ; node Main.ts
```
