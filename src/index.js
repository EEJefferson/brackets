module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brObj = {};

  // Create a map for quick lookup of closing brackets
  bracketsConfig.forEach(item => {
    brObj[item[0]] = item[1];
  });

  // If the length of the string is odd, it cannot be a valid sequence
  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let cur = str[i];

    if (Object.keys(brObj).includes(cur)) {
      // If the current character is an opening bracket
      if ((cur === stack[stack.length - 1]) && (brObj[cur] === cur)) {
        // Special case: if opening and closing brackets are the same
        stack.pop();
      } else {
        stack.push(cur);
      }
    } else if (Object.values(brObj).includes(cur)) {
      // If the current character is a closing bracket
      if (stack.length === 0 || brObj[stack.pop()] !== cur) {
        return false;
      }
    } else {
      // If the current character is not a valid bracket
      return false;
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};
