function check(str, bracketsConfig) {
    const bracketMap = new Map();
    for (const [open, close] of bracketsConfig) {
        bracketMap.set(open, close);
    }

    const stack = [];

    for (const char of str) {
        let isOpeningBracket = false;
        for (const [open, close] of bracketsConfig) {
            if (char === open) {
                stack.push(char);
                isOpeningBracket = true;
                break;
            }
        }

        if (!isOpeningBracket) {
   
            if (stack.length === 0 || bracketMap.get(stack[stack.length - 1]) !== char) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
}
