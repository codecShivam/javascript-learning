let userInput = prompt("Enter password");
if (userInput.length <= 8 && userInput.indexOf(' ') === -1) {
    console.log("Valid Password!!");
} else {
    console.log("Invalid Password!!");
}



let userInput=prompt("Enter password:");
if(userInput.length<=8){
    if(userInput.indexOf(' ')){
        console.log("Valid Password!!");
    }else{
        console.log("NO space is allowed.");
    }
}else{
    console.log("Password length must be lesser or equal to 8.");
}



if (userInput.length > 8) {
    if (userInput.indexOf(' ') !== -1) {
        console.log("NO space is allowed & Password length must be lesser or equal to 8.");
    } else {
        console.log("Password length must be lesser or equal to 8.")
    }
} else if (userInput.length <= 8 && userInput.indexOf(' ') !== -1) {
    console.log("NO space is allowed");
} else {
    console.log("Valid Password!!");
}

let userInput = prompt("Enter password:");
if(userInput)
{
    console.log("Truthy!");
}
else{
    console.log("FAlsy!");
}

let input=prompt("Hey,say something!")
while(true)
{
    input=prompt(input);
    if(input.toLowerCase()==="stop copying me")
    {
        break;
    }
}

function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number')
    return false;
    let sum = x+y;
    return sum;
    
}


function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6)+1
    console.log(roll);
} 
callTwice(rollDie)
callTwice(rollDie)

function callTenTimes(f){
    for(let i=0; i<10; i++)
    {
        f();
    }
}
function greet(){
    console.log("HI");
}
callTenTimes(greet);

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            console.log("Congrats I am a good fuction ");
            console.log("You win a milion dollars!!");
        }
    } else {
        return  function() {
            alert("You have been injected by a computer virus!");
            alert("Stop trying to close this window");
            alert("Stop trying to close this window");
            alert("Stop trying to close this window");
            alert("Stop trying to close this window");
            alert("Stop trying to close this window");
        }
    }
}

let mystey= makeMysteryFunc()
mystey;