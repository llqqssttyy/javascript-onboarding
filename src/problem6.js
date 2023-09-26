function problem6(forms) {
    const similarUsersEmail = new Set();

    for (const [_, nickname] of forms) {
        for (let i = 0; i < nickname.length - 1; i++) {
            const subNickname = nickname.slice(i, i + 2);
            setSimilarUserEmail(
                similarUsersEmail,
                nickname,
                subNickname,
                forms
            );
        }
    }
    return [...similarUsersEmail].sort();
}

function setSimilarUserEmail(similarUsersEmail, nickname, subNickname, forms) {
    const userMap = makeUserMap(forms);
    const nicknameSet = makeNicknameSet(forms);

    for (const anotherUser of nicknameSet) {
        if (nickname !== anotherUser && anotherUser.includes(subNickname)) {
            similarUsersEmail.add(userMap.get(anotherUser));
        }
    }
    return [...similarUsersEmail];
}

function makeNicknameSet(forms) {
    const nicknameSet = new Set();
    for ([email, nickname] of forms) {
        nicknameSet.add(nickname);
    }
    return nicknameSet;
}

function makeUserMap(forms) {
    const userMap = new Map();
    for (const [email, nickname] of forms) {
        userMap.set(nickname, email);
    }
    return userMap;
}

module.exports = problem6;
