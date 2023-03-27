var element;

element = document.querySelector("#header").style.color = "orange";//will change the color of heading to orange 
console.log(element);

element = document.querySelector("#header").style.backgroundColor = "gray";//will change the background color to gray
console.log(element);

document.querySelector("#header").className = "this";
element = querySelector("#header").className;
console.log(element);
