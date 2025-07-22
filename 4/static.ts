// Static

/*

try to access
Math.PI in console - we can access without creating instance of Math class
(instate - new Math())


// question is how to use property or method without creating instance of the class
// answer using static keyword
*/

class Static{
    verisonwt = 1.0; //not access directly Static.versionwt
    static version = 2.0; //can access directly Static.version

}

let s1 = new Static(); //here versionwt available , not version