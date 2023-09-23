function problem2(cryptogram) {
    const stack = [];

    for (const element of cryptogram) {
        let length = stack.length;

        if (stack[length - 1] === element) {
            stack.pop();
        } else {
            stack.push(element);
        }
    }
    return stack.join("");
}

module.exports = problem2;
