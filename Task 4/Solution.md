
## SOLUTION - Task 4

```
  function log<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    const name = String(context.name);
    const id = randomUUID();
    function replacementMethod(this: This, ...args: Args) {
        console.log(`[Time: ${new Date().toISOString()}, ID: ${id}]: Calling '${name}' with args ${JSON.stringify(args)}`)
        const result = originalMethod.apply(this, args)
        console.log(`[Time: ${new Date().toISOString()}, ID: ${id}]: Finished executing '${name}'`)
        return result;
    }
    return replacementMethod;
} 


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