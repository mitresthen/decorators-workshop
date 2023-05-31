# decorators-workshop


## Task 1

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



## SOLUTION - Task 2

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



@doItTwice
@doItTwice
@doItTwice
warmth() {
    this.coziness = this.coziness +1;
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
        // console.log("something: ", a, b)
    }

}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)


h.warmth(5);

```

