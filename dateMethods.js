var now = new Date();

document.write(now.toDateString() + "<br>");
document.write(now + "<br>");
document.write(now.getDate() + "<br>");
document.write(now.getFullYear() + "<br>");
document.write(now .getMinutes()+ "<br>");


now.setDate(20);
// now.setDate();
now.setMonth(4);

document.write(now + "<br>");//it will not print the current date and time 
document.write(now.getMonth() + "<br>");//4 because we have set the month 4 above 
document.write(`${now.getDate()} / ${now.getMonth()} / ${now.getFullYear()}`);
