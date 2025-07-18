// class
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 10000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
// constructor - human maker(human write)
// - biscuit maker(machine not biscuit itself means not data itself)
var BottleMaker = /** @class */ (function () {
    // if not public then it called not istatiate means b1 get blank
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
// --->> this is short version, here below is the longer version \
var BottleMaker1 = /** @class */ (function () {
    function BottleMaker1(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker1;
}());
var b1 = new BottleMaker("Milton", 1200);
var b2 = new BottleMaker("Plastic", 100);
//this call constructor 
// and constructor always runs first when class called
var b11 = new BottleMaker1("Milton", 1200);
var b21 = new BottleMaker1("Plastic", 100);
