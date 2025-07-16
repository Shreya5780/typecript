// Type inference
// decide value by itself
let a = 12;

//type annotations
let b: number;



// interface - just like face of object
interface User{
    name: string, 
    email: string,
    password: string,
    gender?: string //to make it optional
}

// if give same name to interface then it merge
interface User{
    merge: string
}

function getUser(obj: User){
    return obj.email
}

// need to give all the obj (same face as User)
getUser({name: "shreya", email:"abc@gmail.com", password:"123", merge:"merge"});






// we can create out own type
type shakhya = number;
let shakhya: shakhya;
// shakhya = "hello"; //error

type value = number | string | boolean | null;
let value: value;







// --------------- intersection types ---------------
type Usertype = {
    name: string,
    email: string
}

type Admin = Usertype & {
    getDeatils(user: string): void
}

function abcd(a: Admin){
    
}
// it looks like interface but diff
// in interface we can merge, in type we cannot
// type works is to create types, interface works is to create shape(face) of obj
