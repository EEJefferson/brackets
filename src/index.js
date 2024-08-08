function check(str, bracketsConfig) {
    // Create a map for quick lookup of matching closing brackets
    const bracketMap = new Map();
    for (const [open, close] of bracketsConfig) {
        bracketMap.set(open, close);
    }

    // Stack to keep track of opening brackets
    const stack = [];

    for (const char of str) {
        let isOpeningBracket = false;

        // Check if the character is an opening bracket
        for (const [open, close] of bracketsConfig) {
            if (char === open) {
                stack.push(char);
                isOpeningBracket = true;
                break;
            }
        }

        // If it's not an opening bracket, it must be a closing bracket
        if (!isOpeningBracket) {
            // Check if the stack is empty or the top of the stack does not match the closing bracket
            if (stack.length === 0 || bracketMap.get(stack[stack.length - 1]) !== char) {
                return false;
            }
            // Pop the stack if the brackets match
            stack.pop();
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}
