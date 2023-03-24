var str = "JavaScript is a GREAT Language";
var a = str.startsWith("JavaScript");//true
var b = str.endsWith("e");//true
document.write(a + "<br>");
document.write(b + "<br>");

a = str.search("GREAT");//16
document.write(a + "<br>");

str = "JavaScript is a GREAT is language";
var a = str.match(/is/g);//g means globally it will search for is in whole str jitni baar milega use collect krega aur unka ek array bna dega
document.write(a + "<br>");

a = str.replace(/is/g,"are");
document.write(a+ "<br>");

// trim() used to remove extra spaces in front or end
//isFinite() is used to check whether given number is finite or not
//isInteger() 
// these all are mehods of number so used as Number.isFinite(a) same goes for others
