// You are tasked to write a checker that validates the parentheses of a LISP code.  Write a program which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.

let isValid = (str) => {
  let stack = [];

  let open = {
    "(": ")",
  };

  let closed = {
    ")": true,
  };

  if (str.includes("(") == true) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (open[char]) {
        stack.push(char);
      } else if (closed[char]) {
        if (open[stack.pop()] !== char) return false;
      }
    }
    return stack.length === 0;
  } else {
    return false;
  }
};

console.log(isValid("(())")); // True
console.log(isValid("(()")); // False
console.log(isValid("(= x y)")); // True
console.log(isValid("Hello World")); // False
console.log(isValid("(FACTORIAL 4")); // False
console.log(isValid("((member (first L1) L2))")); // True
console.log(isValid("USER(1): (* 2 (cos 0) (+ 4 6))")); //True
