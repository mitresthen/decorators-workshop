## Task 1

```

function doNothing(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
    }
    return replacementMethod;
}

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