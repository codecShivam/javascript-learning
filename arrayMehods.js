// //isarray()
// var a = ["Shivam", "Abdul", "Rishabh", "Aditya"];
// document.write(a + "<br> <br>");

// var b = Array.isArray(a);
// document.write(b + "<br> <br>");

// var c = 10;
// b = Array.isArray(c);
// document.write(b + "<br> <br>");

// var d = [[10, 23, 44], ["hi", "by"]];
// b = Array.isArray(d);
// document.write(b + "<br> <br>");

// let z = [];
// var n = prompt("Enter index of the array!");
// for (let i = 0; i < n; i++) {
//     z[i] = prompt("Insert values in the array "); //isArray() is used to check whether the entered array is array or not
// }
// if (Array.isArray(z)) {
//     document.write("You have entered the correct input!!");
// } else {
//     document.write("You have entered the wrong input!");
// }

//******include()******** */
// var a = ["Shivam", "Abdul", "Rishabh", "Aditya"];
// document.write(a + "<br> <br>");

// var b= a.includes("Shivam");
// document.write(b + "<br> <br>");//true

// b= a.includes("Neha");
// document.write(b + "<br> <br>");//false

// b = a.includes("aditya");//case sensitive
// document.write(b + "<br> <br>");//false


//***************************some() & every()********************** */ some() checks if any of the elements in an array pass a test & every() checks if all of the elements in the array pass a tesst 
// var ages = [10,13,17,11];
// document.write(ages + "<br> <br>");

// var b = ages.some(checkAdult);
// document.write(b + "<br> <br>");

// b= ages.every(checkAdult);
// document.write(b + "<br> <br>");//false

// function checkAdult(age){
//     return age >= 18;//false because no value inside array is greater than or equal to 18
// }


// **********************************find() & findIndex()***********************************************
// find() it gives the first value which passes the test of the condition
//  findIndex() it gives the index of first value which passes the test case . these both stops working after finding the first value
// var ages = [10, 13, 17, 11];
// document.write(ages + "<br> <br>");

// b = ages.find(checkAdult);
// document.write(b + "<br> <br>");//undefined because no value passes the test case of checkadult function that is no age is greater than 18

// function checkAdult(age) {
//     return age >= 18; 
// }

// ages.push(25);//it will push 25 inside the array 

// b = ages.findIndex(checkAdult);
// document.write(b + "<br> <br>");//4 because the index value of 25 which is greater then 18 is 4

//******************************filter()*********************** */
//it is used to create an array filled with all array elements that pass a test

// var ages = [10, 13, 17, 11,23,19];
// document.write(ages + "<br> <br>");

// var b = ages.filter(checkAdult);
// document.write(b + "<br> <br>");//an array of value 23 and 18

// function checkAdult(age) {
//         return age >= 18; 
//     }



//************************toString()********************* */
// var a = ["Shivam", "Abdul", "Rishabh", "Aditya"];
// // a.toString();////an string not work as array anymore
// // document.write(a);

// //fill() fills all the elements in an array with a static value
// a.fill("ram");
// document.write(a);







