# Constructor Functions vs ES6 Classes

The ES6 class version is shorter and easier to organise because the constructor and methods are grouped together. Constructor functions use prototype properties to share methods between instances, while classes provide a cleaner syntax for the same idea. Classes also make getters, setters and static methods easier to define. Under the hood, JavaScript classes still use prototypes, so they are not a completely different object-oriented system.

## Forgetting `new`

When I call a constructor function without `new` in strict mode, JavaScript throws a TypeError because `this` is undefined. When I call a class without `new`, JavaScript also throws a TypeError because classes must be instantiated using `new`. Both approaches therefore require `new`, but the class syntax enforces this automatically.
