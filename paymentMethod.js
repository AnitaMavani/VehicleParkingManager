
class PaymentMethod {
    constructor(paymentMethodType, info, balance) {
        this.paymentMethodType = paymentMethodType;
        this.info = info;
        this.balance = balance;
    }

    printBalance() {
        console.log(`Available balance: ${this.balance}`);
    }
}

export default PaymentMethod;



