class Bill {
    constructor(billNumber, date, customer, cart, creditCard) {
        this.billNumber = billNumber;
        this.date = date;
        this.customer = customer;
        this.cart = cart;
        this.creditCard = creditCard;
        this.total = 0;
    }
    calculateTotal() {
        this.total = this.cart.reduce( (total, products) => {
            if (products.price) {
                return total + parseInt(products.price);
            };
        }, 0)
    }
}
export default Bill;