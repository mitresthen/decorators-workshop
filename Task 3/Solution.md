## SOLUTION - Task 3

```
function doItTwice<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    context.name
    function replacementMethod(this: This, ...args: Args) {
        originalMethod.call(this, args)
        originalMethod.call(this, args)
    }
    return replacementMethod;
} 


class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }

    @doItTwice
    @doItTwice
    @doItTwice
    warmth() {
        this.coziness = this.coziness +1;
    }
}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)


h.warmth();
console.log(`The current cosiness is ${h.coziness}`)

```