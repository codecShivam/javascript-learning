var element;

element = document.getElementById("content").innerText;
console.log(element);


element = document.getElementById("content").innerHTML;
console.log(element);


element = document.getElementById("header").getAttribute("class");
console.log(element);

element = document.getElementById("header").getAttribute("style");
console.log(element);

element = document.getElementById("header").getAttribute("onClick");
console.log(element);

element = document.getElementById("header").getAttributeNode("style"); 
console.log(element);

//attributes method

element = document.getElementById("header").attributes;
console.log(element);



element = document.getElementById("header").attributes[0];
console.log(element);



//set values

document.getElementById("header").innerHTML = "<h1>WOW</h1>"
 
element = document.getElementById("header").innerHTML;
console.log(element);

document.getElementById("header").setAttribute("style", "border: 8px dotted yellow")
element = document.getElementById("header").getAttribute("style");
console.log(element);//new style


element = document.getElementById("header").getAttribute("class");
console.log(element);//class before setting new one 

document.getElementById("header").setAttribute("class", "xyz")
element = document.getElementById("header").getAttribute("class");
console.log(element);//class after setting new one 

//other way
document.getElementById("header").attributes[1].value = "new";
element = document.getElementById("header").attributes[1].value;
console.log(element);//class after changing once again

//remove attribute 
document.getElementById("header").removeAttribute("class");
element = document.getElementById("header").getAttribute("class");
console.log(element);//class value has been removed now so null

//another example
document.getElementById("header").removeAttribute("style");
element = document.getElementById("header").getAttribute("style");
console.log(element);//all the styling is removed