module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map(pair => pair[0]);
  const closeBrackets = bracketsConfig.map(pair => pair[1]);
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const openIndex = openBrackets.indexOf(char);

    if (openIndex !== -1) {
      stack.push(openIndex);
    } else {
      const closeIndex = closeBrackets.indexOf(char);

      if (closeIndex !== -1 && stack.length > 0 && stack[stack.length - 1] === closeIndex) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
