//works to select any id classs or tag


var element;
document.querySelector("#header").innerHTML ="<h1>WOW </h1>";
element = document.querySelector(".list");
console.log(element);

element = document.querySelectorAll(".list")[1].innerHTML;
console.log(element);

element = document.querySelectorAll("ul")[0].innerHTML;
console.log(element);

element = document.querySelectorAll("#header h1")[0].innerHTML;//just like css
console.log(element);



