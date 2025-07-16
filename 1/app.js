"use strict";
/*

data types

--> primitives and reference

a = [1, 2, ,3, 4]
b = a

now remove last from b
b = [1, 2, 3]

what about a?

a = [1, 2, 3, 4] (nooooo)
a  = [1, 2, 3]
-->> because we pass reference not premitive directly

() {} [] - reference else premitive


-->> primitive we can copy directly
-->> reference can't copy directly

*/
//primitive types
// number, string, boolean
let a = 12;
let b = "hello";
// reference types
// arrays
let arr = [1, "hello", 2];
// let arr1: [number] = [1, 'hii']; //give error
// tuples
let tuple = ["hello", 2];
// let predefinedtypearr: [string, number] = [3, 2]; //give error 
// enums
// it's a key-value pair
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// USE ENUMS LIKE THIS
UserRoles.ADMIN;
// Any - type is not define by assigning value,
//                 then by default type is Any
// with any typescript behave like js (allow everything like js)
let any;
// now because it is any type we can assign any value number/string
any = 12;
any = "hello";
any.toUpperCase(); //works 
let unknown;
unknown = 12;
unknown = "hello";
/*
unknown.toUpperCase(); //dont works even last is string,
                                // need to specify the type

*/
if (typeof unknown === "string")
    unknown.toUpperCase();
// void - function return nothing then 
function voidtype() {
    console.log("void ");
}
// null - when not found then return null
let nullval;
// nullval = "hello";
// so do this
let nullstr;
nullstr = "hello";
nullstr = null;
// undefined value
let undefinedval;
// never - return nothing (don't come out of function)
function neverf() {
    while (true) { }
}
neverf();
console.log(" without never");
function neverfun() {
    while (true) { }
}
neverfun();
console.log("with never which never execute, because it dont come out from function because of never");
