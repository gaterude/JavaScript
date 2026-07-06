## Error Message
Uncaught SyntaxError: Unexpected Token ";'

## Error Type
This is a Syntax Error because the code is not valid JavaScript and cannot be executed.

## Why it happened
- Removed semicolon from a constant declaration 
- Removed value from a let variable (`let year = ;`), which is invalid syntax

## How I fixed it
Restored valid JavaScript syntax:

const name = "Your Name";
let year = 2026;