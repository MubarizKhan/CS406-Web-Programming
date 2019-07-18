var v1 = document.querySelector("h1");
document.querySelector("h1").textContent = "End of this lesson";

console.log("open console & copy the code in the js file on the console");

v1.style.color ="yellow";
v1.style.border = "5px solid pink";
v1.style.fontSize = "70px";
v1.style.background = "yellow";
v1.style.marginTop = "200px";

//-------------------Manipulating Text-----------
var para = document.querySelector("p");
para.classList.add("big");
para.classList.remove("big");
para.classList.toggle("big"); //if the class is applied; it'll remove it; if it isn't applied; it'll apply it
para.innerHTML //shows us the text; and keeps the strong tag there

var firstpara = document.getElementsByTagName("p")[0] //selecting first paragraph
firstpara.textContent //Will show the tag selected

var lixt = document.querySelector("ul");
lixt.innerHTML //will show us the li tags now
lixt.innerHTML = "plants are nice"; //will completely overwrite this

document.body.innerHTML //treats string like html
document.body.textContent //treats string like string not like html

//----------------------------Manipulating Attributess--------------------
var a = document.querySelector("a");
a.setAttribute("href","http://www.facebook.com");
a.textContent = "Link to the death of life"             