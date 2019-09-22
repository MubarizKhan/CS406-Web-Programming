// var p = document.querySelector("p")
// p.classList.add("big")
// p.classList.remove("big")
// p.classList.toggle("big")

var p = document.getElementsByTagName("p")[0]
var ul = document.querySelector("ul")

// console.log(ul);
// ul.innerHTML

p.textContent = "Van Burren";

var x = document.getElementsByTagName("img")[0]
console.log(x);
console.log(x.getAttribute("src"));

x.setAttribute("src", "3.jpg");


var x1 = document.getElementsByTagName("img")[1]
x1.setAttribute("src", "1.jpg");

var xy = document.querySelector("a");
xy.setAttribute("href", "http://www.facebook.com");
console.log(xy);

xy.textContent = "link to facebook.com"
