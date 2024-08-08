module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let match = false;

    for (const [open, close] of bracketsConfig) {
      if (str[i] === open) {
        stack.push(open);
        match = true;
        break;
      } else if (str[i] === close) {
        if (stack.length === 0) return false;

        const last = stack.pop();
        if (open === close ? last !== open : last !== open) {
          return false;
        }

        match = true;
        break;
      }
    }

    if (!match) return false;
  }

  return stack.length === 0;
};
