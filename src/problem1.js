function problem1(pobi, crong) {
    const resultMapping = {
        pobiWin: 1,
        crongWin: 2,
        tie: 0,
    };

    try {
        pobiVal = getMaxSumOrProduct(pobi);
        crongVal = getMaxSumOrProduct(crong);

        if (pobiVal > crongVal) return resultMapping.pobiWin;
        else if (pobiVal < crongVal) return resultMapping.crongWin;
        else if (pobiVal === crongVal) return resultMapping.tie;
    } catch (error) {
        return -1;
    }
}

function addDigits(page) {
    const digits = String(page).split("");
    return digits.reduce((acc, digit) => acc + parseInt(digit), 0);
}

function productDigits(page) {
    const digits = String(page).split("");
    return digits.reduce((acc, digit) => acc * parseInt(digit), 1);
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

function validationCheck(pages) {
    const [left, right] = pages;
    const displayPages = `[${left}, ${right}]:`;

    if (pages.length !== 2)
        throw new Error(`${displayPages} 배열의 길이가 2가 아닙니다.`);
    else if (right - left !== 1)
        throw new Error(`${displayPages} 연속된 페이지가 아닙니다.`);
    else if (left > 400 || right < 1)
        throw new Error(
            `${displayPages} 페이지가 범위에 맞지 않습니다.(1 ~ 400)`
        );
    else if (left % 2 !== 1)
        throw new Error(`${displayPages} 왼쪽 페이지가 홀수가 아닙니다.`);
    else if (right % 2 !== 0)
        throw new Error(`${displayPages} 오른쪽 페이지가 짝수가 아닙니다.`);
    // 유효성 검사 통과
    else return pages;
}

module.exports = problem1;
