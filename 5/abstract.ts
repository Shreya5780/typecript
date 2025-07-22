/*

****** abstract ********
// means something is hide
//  Abstraction means hiding *implementation details* and showing *only essential features*


*/

abstract class Payment{
    constructor(protected amt: number, protected acc: number){}

    isPaymentValid(amt: number){
        return this.amt > 0;
    }

    abstract pay(): void;
}


// means here Paytm and Gpay have amt and acc it self included
class Paytm extends Payment{
    pay(): void {
        console.log("Pay ", this.amt);
        
    }
}

class Gpay extends Payment{
    pay(): void {
        console.log("PAy ", this.amt);
        
    }

}