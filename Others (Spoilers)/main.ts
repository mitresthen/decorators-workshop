
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


function loggedMethod(headMessage = "LOG:") {
    return function actualDecorator(
      originalMethod: any,
      context: ClassMethodDecoratorContext
    ) {
      const methodName = String(context.name);
      function replacementMethod(this: any, ...args: any[]) {
        console.log(`${headMessage} Entering method '${methodName}'.`);
        const result = originalMethod.call(this, ...args);
        console.log(`${headMessage} Exiting method '${methodName}'.`);
        return result;
      }
      return replacementMethod;
    };
  }
  
   function CriticalLog(
      originalMethod: any,
      context: ClassMethodDecoratorContext
    ) {
      const methodName = String(context.name);
      function replacementMethod(this: any, ...args: any[]) {
        console.log(`----VERY IMPORTANT----`);
        const result = originalMethod.call(this, ...args);
        console.log(`THANK YOU FOR YOUR ATTENTION`);
        return result;
      }
      return replacementMethod;
    };
  
    function SomewhatImportantLog(
      originalMethod: (a: number, b: number) => number,
      context: ClassMethodDecoratorContext
    ) {
      const methodName = String(context.name);
      function replacementMethod(this: any, ...args: any[]) {
        console.log(`--Please notice me--`);
        const result = originalMethod.call(this, ...args);
        console.log(`thx senpai`);
        return result;
      }
      return replacementMethod;
    };
  
    function SquareIt(
      originalMethod: (a: number, b: number) => number,
      context: ClassMethodDecoratorContext
    ) {
      const methodName = String(context.name);
      function replacementMethod(this: any, ...args: any[]) {
        console.log(`--CALCULATING SQUARE, HOLD ON!!!!--`);
        const result = originalMethod.call(this, ...args);
        const squaredResult = result*result;
        console.log(`THE SQUARED NUMBER IS: ${squaredResult}`);
        console.log(`I HOPE YOU WERE HAPPY WITH THE BIG NUMBER YOU GOT :O`);
        return squaredResult;
      }
      return replacementMethod;
    };
  
    function TimeIt(
      originalMethod: any,
      context: ClassMethodDecoratorContext
    ) {
      const methodName = String(context.name);
      function replacementMethod(this: any, ...args: any[]) {
        const startTime = Date.now();
        const result = originalMethod.call(this, ...args);
        const endTime = Date.now();
        const duration = endTime-startTime;
        console.log(`The method ${methodName} used ${duration} ms to complete it's execution`);
        return result;
      }
      return replacementMethod;
    };
  
  
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    @loggedMethod()
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    @TimeIt
    twoplustwo() {
      let result = 0;
      for (let i = 0; i < 100000000000; i++) {
        result += i;
      }
      
      console.log(`Two plus two is ${2 + 2}`);
    }
  
    @SquareIt
    addnumbers(a: number, b: number) {
      return a + b;
    }
  }
  const p = new Person("Ray");
  // p.greet();
  // p.twoplustwo();
  
  p.twoplustwo();
  // console.log(`We got: ${p.addnumbers(4,9)}`)