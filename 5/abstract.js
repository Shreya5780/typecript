/*

****** abstract ********
// means something is hide
//  Abstraction means hiding *implementation details* and showing *only essential features*


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment(amt, acc) {
        this.amt = amt;
        this.acc = acc;
    }
    Payment.prototype.isPaymentValid = function (amt) {
        return this.amt > 0;
    };
    return Payment;
}());
// means here Paytm and Gpay have amt and acc it self included
var Paytm = /** @class */ (function (_super) {
    __extends(Paytm, _super);
    function Paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paytm.prototype.pay = function () {
        console.log("Pay ", this.amt);
    };
    return Paytm;
}(Payment));
var Gpay = /** @class */ (function (_super) {
    __extends(Gpay, _super);
    function Gpay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gpay.prototype.pay = function () {
        console.log("PAy ", this.amt);
    };
    return Gpay;
}(Payment));
