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







## Step 2

```
function doNothingBetter<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    function replacementMethod(this: This, ...args: Args) {
    }
    return replacementMethod;
}
```



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



## SOLUTION - Step 2

```
function keepDoingYou<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    function replacementMethod(this: This, ...args: Args) {
        return originalMethod.call(this, args)
    }
    return replacementMethod;
}
```
