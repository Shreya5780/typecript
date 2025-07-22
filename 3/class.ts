// class


class Device{
    name = "lg";
    price = 10000;
    category = "digital";
}

let d1 = new Device();
let d2 = new Device();



// constructor - human maker(human write)
            // - biscuit maker(machine not biscuit itself means not data itself)
            
class BottleMaker{
    // if not public then it called not istatiate means b1 get blank
    constructor(public name: string, public price: number){

    }
}
// --->> this is short version, here below is the longer version \
class BottleMaker1{
    public name;
    public price;
    constructor( name: string,  price: number){
        this.name = name;
        this.price = price;
    }
}

let b1 = new BottleMaker("Milton", 1200);
let b2 = new BottleMaker("Plastic", 100);
 //this call constructor 
// and constructor always runs first when class called


let b11 = new BottleMaker1("Milton", 1200);
let b21 = new BottleMaker1("Plastic", 100);




// readonly and optional

class Read_optional{
    constructor(public readonly name: string, public age?: number){}
}

let ro1 = new Read_optional("shreya")
let ro2 = new Read_optional("shreya", 22)




// how ot use get set as a property
class Get_Set{
    constructor(public _name: string, public age: number){}

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}

let gs1 = new Get_Set("het", 17)