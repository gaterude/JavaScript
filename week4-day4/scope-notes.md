# Scope Chain

## Scope Sketch

```text
GLOBAL SCOPE
|
|-- globalVar = "I am global"
|
|-- outer() FUNCTION SCOPE
    |
    |-- outerVar = "I am outer"
    |
    |-- inner() FUNCTION SCOPE
        |
        |-- innerVar = "I am inner"
        |
        |-- Can access:
            - innerVar
            - outerVar
            - globalVar
```

## Explanation

The global scope contains variables declared outside functions. The `outer` function creates its own scope and declares `outerVar`. The `inner` function has access to its own variables and variables in the surrounding scopes. JavaScript searches the current scope before looking in outer scopes. An outer function cannot directly access a variable declared only inside its inner function. This relationship between nested scopes is called the scope chain.
