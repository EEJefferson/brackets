function check(str, bracketsConfig) {
  // Create a map for quick lookup of closing brackets
  const bracketsMap = new Map();
  for (const [open, close] of bracketsConfig) {
    bracketsMap.set(open, close);
  }

  // Stack to keep track of opening brackets
  const stack = [];

  for (const char of str) {
    let isOpeningBracket = false;

    // Check if the character is an opening bracket
    for (const [open, close] of bracketsConfig) {
      if (char === open) {
        isOpeningBracket = true;
        stack.push(char);
        break;
      }
    }

    // If it's not an opening bracket, it must be a closing bracket
    if (!isOpeningBracket) {
      // Special case: if opening and closing brackets are the same
      if (bracketsMap.get(char) === char) {
        if (stack.length === 0 || stack[stack.length - 1] !== char) {
          return false;
        }
        stack.pop();
      } else {
        // General case: check if it matches the most recent opening bracket
        if (stack.length === 0 || bracketsMap.get(stack[stack.length - 1]) !== char) {
          return false;
        }
        stack.pop();
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
}
