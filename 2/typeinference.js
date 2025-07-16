// Type inference
// decide value by itself
var a = 12;
//type annotations
var b;
function getUser(obj) {
    return obj.email;
}
// need to give all the obj (same face as User)
getUser({ name: "shreya", email: "abc@gmail.com", password: "123", merge: "merge" });
var shakhya;
var value;
function abcd(a) {
}
// it looks like interface but diff
// in interface we can merge, in type we cannot
// type works is to create types, interface works is to create shape(face) of obj
