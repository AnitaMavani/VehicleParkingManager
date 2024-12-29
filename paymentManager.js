import { PAYMENT_TYPE_BANK, PAYMENT_TYPE_CC } from "./constants.js";
import { BankProcessor, CreditCardProcessor } from "./paymentProcessor.js";

class PaymentManager {
    constructor() {
        this.registeredProcessor = {
            [PAYMENT_TYPE_CC]: new CreditCardProcessor(),
            [PAYMENT_TYPE_BANK]: new BankProcessor(),
        }
    }

    process(person, paymentMethod, amount) {
        const paymentMethodType = paymentMethod.paymentMethodType;
        const processor = this.registeredProcessor[paymentMethodType];

        if (!processor) {
            throw "Not supported payment method";
        }

        const res = processor.process(paymentMethod.info, amount);
        paymentMethod.balance -= amount;

        return res;
    }

}

export default PaymentManager;
