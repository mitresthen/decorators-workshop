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