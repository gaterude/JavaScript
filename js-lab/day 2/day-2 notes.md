# Day 2 Notes: typeof null Investigation

`console.log(typeof null);` returns `"object"` This was surprising because `null` is not actually an object It is a special value that represents the intentional absence of a value
 It is the famous JacaScript quirk  as a result of a bug in the language's early implementation. The bug has never been fixed because changing it would break a lot of existing JavaScript code that depends on this behavior.

Logically, the type of `null` should be `"null"` because it is its own p data type, separate from objects