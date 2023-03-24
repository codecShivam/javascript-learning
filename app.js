// let userInput = prompt("Enter password");
// if (userInput.length <= 8 && userInput.indexOf(' ') === -1) {
//     console.log("Valid Password!!");
// } else {
//     console.log("Invalid Password!!");
// }



// let userInput=prompt("Enter password:");
// if(userInput.length<=8){
//     if(userInput.indexOf(' ')){
//         console.log("Valid Password!!");
//     }else{
//         console.log("NO space is allowed.");
//     }
// }else{
//     console.log("Password length must be lesser or equal to 8.");
// }



// if (userInput.length > 8) {
//     if (userInput.indexOf(' ') !== -1) {
//         console.log("NO space is allowed & Password length must be lesser or equal to 8.");
//     } else {
//         console.log("Password length must be lesser or equal to 8.")
//     }
// } else if (userInput.length <= 8 && userInput.indexOf(' ') !== -1) {
//     console.log("NO space is allowed");
// } else {
//     console.log("Valid Password!!");
// }

// let userInput = prompt("Enter password:");
// if(userInput)
// {
//     console.log("Truthy!");
// }
// else{
//     console.log("FAlsy!");
// }

// let input=prompt("Hey,say something!")
// while(true)
// {
//     input=prompt(input);
//     if(input.toLowerCase()==="stop copying me")
//     {
//         break;
//     }
// }

// function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number')
//     return false;
//     let sum = x+y;
//     return sum;
    
// }


// function callTwice(func){
//     func();
//     func();
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6)+1
//     console.log(roll);
// } 
// callTwice(rollDie)
// callTwice(rollDie)

// function callTenTimes(f){
//     for(let i=0; i<10; i++)
//     {
//         f();
//     }
// }
// function greet(){
//     console.log("HI");
// }
// callTenTimes(greet);

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function() {
//             console.log("Congrats I am a good fuction ");
//             console.log("You win a milion dollars!!");
//         }
//     } else {
//         return  function() {
//             alert("You have been injected by a computer virus!");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//         }
//     }
// }

// let mystey= makeMysteryFunc()
// mystey;


// var obj = {
//     firstName: "Shivam",
//     lastName : "Yadav",
//     Age : 25,
//     email: "sy654906@gamil.com",
// };
// //it will work as the for loop for each key and and each value of the object
// for (var key in obj){
//     document.write(key + " : " +  obj[key] + "<br>");
//     document.write(`${key} : ${obj[key]} <br>`);
// }


//*****************Map()******************************it will create a new array 
var ary =[11,4,9,16];

var b=ary.map(test);
document.write(b);

function test(x){
    return x*10;
}


var ary = [
    {fname: "Shivam", lname: "Yadav"},
    {fname: "Rishabh", lname: "Gupta"},
    {fname: "Abdul", lname: "Samad"}
]
var b=ary.map(test);
document.write(b);

function test(x){
    return " " + x.fname + " " + x.lname + " ";
}