## Task 2

```
function doNothingBetter<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    function replacementMethod(this: This, ...args: Args) {
    }
    return replacementMethod;
}

class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }

    @keepDoingYou
    warmth() {
        this.coziness = this.coziness +1;
    }
}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)


h.warmth();
console.log(`The current cosiness is ${h.coziness}`)
```