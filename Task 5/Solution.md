# SOLUTION - Task 5
``` 

function stopErrorAndLog<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    const name = String(context.name);
    function replacementMethod(this: This, ...args: Args) {
        try {
            return originalMethod.apply(this, args)
        } catch(e: unknown) {
            console.log("ERROR: failed to run method ", name)
        }
    }
    return replacementMethod;
} 

type Constructor<T = {}> = new (...args: any[]) => T;

function classLogger<Class extends Constructor>(value: Class, context: ClassDecoratorContext) {
      return class extends value {
        constructor(...args) {
          super(...args);
          console.log(`constructing an instance of ${context.name} with arguments ${args.join(", ")}`);
        }
      }
    }


type logLevel = "INFO" | "WARN" | "ERROR"

function customLog(level: logLevel) {
    return function logDecorator<This, Args extends any[], Return>(
        originalMethod: (this: This, ...args: Args) => Return,
        context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
    ) {
        const name = String(context.name);
        function replacementMethod(this: This, ...args: Args) {
            console.log(`${level}: Calling '${name}'`)
            const result = originalMethod.apply(this, args)
            console.log(`${level}: Finished executing '${name}'`)
            return result;
        }
        return replacementMethod;
    } 

}


@classLogger
class House {
    coziness: number;

    constructor(coziness: number) {
        this.coziness = coziness;
    }


    @stopErrorAndLog
    @customLog("WARN")
    warmth(inc: number) {
        if(this.coziness + inc > 100) {
            throw Error("Cant do it");
        }
        this.coziness = this.coziness + inc;
        console.log(`The current coziness is ${this.coziness}`)
    }

    @stopErrorAndLog
    @customLog("ERROR")
    breakThermostat() {
        throw Error("New thermostats are expensive, you shouldn't do this")
    }


    @customLog("INFO")
    getCoziness() {
        return this.coziness;
    }

}

const h = new House(50)
console.log(`The current coziness is ${h.coziness}`)

h.warmth(5);
h.breakThermostat();
h.getCoziness();
h.warmth(50);

console.log(`The current coziness is ${h.coziness}`)
```