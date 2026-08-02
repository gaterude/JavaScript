# Day 3 Notes

## Task 2

The values that surprised me were:

- [] is truthy even though it is empty.
- {} is truthy even though it has no properties.
- NaN is falsy because it represents an invalid number.

## Task 3

I learned that == performs type conversion before comparing values, while === compares both the value and the data type. I will use === because it avoids unexpected results.

## Task 5

### Broken 1

The code multiplied by 25 instead of 25%. I changed it to 0.25.

### Broken 2

The condition used > 18, which excluded people who are exactly 18. I changed it to >= 18.

### Broken 3

The expression already concatenated because one value was a string. I made the intention explicit by converting both values to strings before concatenating.