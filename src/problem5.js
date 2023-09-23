function problem5(money) {
    const atm = new CurrencyExchangeMachine(money);
    return atm.exchange();
}

class CurrencyExchangeMachine {
    constructor(money) {
        this.money = money;
        this.banknotes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    }
    exchange() {
        const billCnts = this.banknotes.map((bill) => this.getNumOfBills(bill));
        return billCnts;
    }
    getNumOfBills(bill) {
        const billCnt = Math.floor(this.money / bill); // 지폐 수
        this.money = this.money % bill; // 잔돈
        return billCnt;
    }
}

module.exports = problem5;
