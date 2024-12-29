
class PaymentMethod {
    constructor() {

    }

    pay(person, paymentAmt) {
        throw "Unimplemented method"
    }

    balance() {
        throw "Unimplemented method"
    }

}

export class Creditcard extends PaymentMethod {
    constructor(cardNumber, expiryDate, cvv, balance) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.availableBal = balance;
        this.cvv = cvv;
    }

    pay(person, paymentAmt) {
        this.availableBal -= paymentAmt;
        console.log(`Payment is successful using card ${this.cardNumber}. Updated balance: ${this.availableBal}`);
        return true;
    }

    balance() {
        console.log(`Card Number: ${this.cardNumber}, available balance: ${this.availableBal}`);
    }
}

export class Bank extends PaymentMethod {
    constructor(accountNumber, accountName, balance) {
        super();
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.availableBal = balance;
    }

    pay(person, paymentAmt) {
        this.availableBal -= paymentAmt;
        console.log(`Payment is successful using account ${this.accountNumber}. Updated balance: ${this.availableBal}`);
        return true;
    }

    balance() {
        console.log(`Bank Account: ${this.accountNumber}, available balance: ${this.availableBal}`);
    }
}


