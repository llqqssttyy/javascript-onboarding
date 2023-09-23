function problem3(number) {
    let clapCnt = 0;

    for (num = 1; num <= number; num++) {
        clapCnt += numOfClap(num);
    }
    return clapCnt;
}

function numOfClap(num) {
    const str = num.toString();
    const cnt3 = str.match(/3/g)?.length ?? 0;
    const cnt6 = str.match(/6/g)?.length ?? 0;
    const cnt9 = str.match(/9/g)?.length ?? 0;

    return cnt3 + cnt6 + cnt9;
}

module.exports = problem3;
