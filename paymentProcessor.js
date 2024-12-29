class PaymentProcessor {
    constructor() {
    }

    process(paymentMethod, amount) {
        throw "Unimplemented Method";
    }

    // process(person, paymentMethod, amount) {
    //     const res = paymentMethod.pay(person, amount)
    //     console.log(`${person} paid ${amount}`);
    //     return res;
    // }

}


export class CreditCardProcessor extends PaymentProcessor {
    constructor() {
        super();
    }

    process(cardDetails, amount) {
        console.log(`Charging the card: ${cardDetails['cardNumber']} for amount ${amount}`);
        return true;
    }
}

export class BankProcessor extends PaymentProcessor {
    constructor() {
        super();
    }

    process(bankAccount, amount) {
        console.log(`Charging the bank account: ${bankAccount['accountNumber']} for amount ${amount}`);
        return true;
    }
}
