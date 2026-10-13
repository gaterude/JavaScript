# Week 4 Day 1 AI Audit

## Function: countVowels()

### 1. Pseudocode

* Take a string.
* Check which characters are vowels.
* Count the vowels.
* Extend the function to count consonants too.

### 2. Manual Version

I wrote this function first to count vowels in a string.

function countVowels(s) {
  const matches = s.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

### 3. Prompt Given to AI

I asked AI to help extend the function so that it could count both vowels and consonants.

### 4. AI Version

function countLetters(s) {
  const vowels = s.match(/[aeiou]/gi) || [];
  const consonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

  return {
    vowels: vowels.length,
    consonants: consonants.length
  };
}

console.log(countLetters("Hello World"));


Output:


{ vowels: 3, consonants: 7 }


### 5. What I Kept and Rejected

I kept the regular expressions because they make it easier to identify vowels and consonants. I also kept the object returned by the function so both counts can be accessed separately.


### 6. Testing

I used `"Hello World"` as a test. The expected result was 3 vowels and 7 consonants. Spaces are not counted.
