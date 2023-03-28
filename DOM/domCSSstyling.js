var element;

element = document.querySelector("#header").style.color = "orange";//will change the color of heading to orange 
console.log(element);

element = document.querySelector("#header").style.backgroundColor = "gray";//will change the background color to gray
console.log(element);

// document.querySelector("#header").className = "this";
// element = querySelector("#header").className;
// console.log(element);


//classlist methods

element = document.querySelector("#header").classList;

document.querySelector("#header").classList.add("xyz","efg");//add this new class to previous one
console.log(element);

document.querySelector("#header").classList = "first second third"//it will make class of these three words and remove previous other files
// element = document.querySelector("#header").classList;
console.log(element);

document.querySelector("#header").classList.remove("first");//use to remove class
// element = document.querySelector("#header").classList;
console.log(element);

