
class Invoice {
    constructor() {

    }

    printInvoice(owner, paymentMethod, payment) {
        console.log(`Invoice for ${owner} is generated for payment of ${payment} using ${paymentMethod.info}`);
        return true;
    }
}

export default Invoice;



