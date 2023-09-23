function problem4(word) {
    const UPPERCASE = "A".charCodeAt(0) + "Z".charCodeAt(0);
    const LOWERCASE = "a".charCodeAt(0) + "z".charCodeAt(0);

    const result = word
        .replace(/[A-Z]/g, (letter) =>
            String.fromCharCode(UPPERCASE - letter.charCodeAt(0))
        )
        .replace(/[a-z]/g, (letter) =>
            String.fromCharCode(LOWERCASE - letter.charCodeAt(0))
        );

    return result;
}

module.exports = problem4;
