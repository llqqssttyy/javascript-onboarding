function problem3(number) {
    let clapCnt = 0;

    for (num = 1; num <= number; num++) {
        clapCnt += numOfClap(num);
    }
    return clapCnt;
}

function numOfClap(num) {
    const str = num.toString();
    return str.match(/[369]/g)?.length ?? 0;
}

module.exports = problem3;
