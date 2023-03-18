//isarray()
var a = ["Shivam", "Abdul", "Rishabh", "Aditya"];
document.write(a + "<br> <br>");

var b = Array.isArray(a);
document.write(b + "<br> <br>");

var c = 10;
b = Array.isArray(c);
document.write(b + "<br> <br>");

var d = [[10, 23, 44], ["hi", "by"]];
b = Array.isArray(d);
document.write(b + "<br> <br>");

let z = [];
var n = prompt("Enter index of the array!");
for (let i = 0; i < n; i++) {
    z[i] = prompt("Insert values in the array "); //isArray() is used to check whether the entered array is array or not
}
if (Array.isArray(z)) {
    document.write("You have entered the correct input!!");
} else {
    document.write("You have entered the wrong input!");
}