const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

for(let link of allLinks){
    link.innerText="i am a link";
    link.style.fontSize = "23px";
    link.style.color ='#000300'
    link.style.textDecorationColor = '#0dff1c';
    link.style.textDecorationStyle = 'wavy'
}

const allImg = document.querySelectorAll('img');

for(let img of allImg){
    img.style.padding ='2px'
    img.style.borderRadius ='50%';
}

const java = document.querySelector('a[title="Java"]');
java.style.color = 'red';
java.style.padding ='19px';
java.style.textDecorationStyle ='solid';

// querySelector: selects the first element of the matching
// querySelectorAll: selects the all the element of matching

// to select nth of the type
const img2 = document.querySelector('img:nth-of-type(3)');
img2.style.borderRadius = '30%'


const link = document.querySelectorAll('p a');//it will select those a tags which are inside the paragraphs
for (let el of link){
    el.style.textDecorationStyle = 'dotted'
}