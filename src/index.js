module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brObj = {};

  bracketsConfig.forEach(item => {
    brObj[item[0]] = item[1];
  });

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let cur = str[i];

    if (Object.keys(brObj).includes(cur)) {
      if ((cur === stack[stack.length - 1]) && (brObj[cur] === cur)) {
        stack.pop();
      } else {
        stack.push(cur);
      }
    } else if (Object.values(brObj).includes(cur)) {
      if (stack.length === 0 || brObj[stack.pop()] !== cur) {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
