class CreditCard {
    securityCode: any;
    number: any;
    vcv: any;
    constructor(number, securityCode, vcv) {
        this.number = number;
        this.securityCode = securityCode;
        this.vcv = vcv;
    }
}
export default CreditCard;