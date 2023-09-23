function problem1(pobi, crong) {
    var answer;
    const resultMapping = {
        pobiWin: 1,
        crongWin: 2,
        tie: 0,
    };

    try {
        pobiVal = getMaxSumOrProduct(pobi);
        crongVal = getMaxSumOrProduct(crong);

        if (pobiVal > crongVal) answer = resultMapping.pobiWin;
        else if (pobiVal < crongVal) answer = resultMapping.crongWin;
        else if (pobiVal === crongVal) answer = resultMapping.tie;
    } catch (error) {
        answer = -1;
    }

    return answer;
}

function addDigits(page) {
    const digits = String(page).split("");
    return digits.reduce((acc, digit) => acc + parseInt(digit), 0);
}

function productDigits(page) {
    const digits = String(page).split("");
    return digits.reduce((acc, digit) => acc * parseInt(digit), 1);
}

function validationCheck(pages) {
    const [left, right] = pages;

    if (right - left !== 1) throw new Error("올바른 페이지 번호가 아닙니다.");
    else return pages;
}

function getMaxSumOrProduct(pages) {
    const [left, right] = validationCheck(pages);

    const availableNumbers = [
        addDigits(left),
        addDigits(right),
        productDigits(left),
        productDigits(right),
    ];

    return Math.max(...availableNumbers);
}

module.exports = problem1;
