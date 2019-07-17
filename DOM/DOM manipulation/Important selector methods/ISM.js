// The document comes with a bunch of methods for slecting elements

// document.getElementById()

var tag = document.getElementById("Highlight"); //the result of this is actually an JS object 
console.dir(tag);


// document.getElementsByTagName() This returns a list of elements represented by a given tag name
var fags = document.getElementsByTagName("Li"); //return a list of the lis that exist on this page-- not an array a node list
console.log(fags[0]); //title, body, head anything can be stored like this


// document.getElementsByClassName()
var tags = document.getElementsByClassName("Bolded"); //as classes can be used multitple times; unlike ID; so all the objects will be stored in a list
console.log(tags[0]);
//for each can't be used; as it;s used only on arrays


// document.querySelector()

var drag = document.querySelector("#highlight"); 
var h1 = document.querySelector("h1");


//we can literally do anything with this; 
//what we did with document.getElementsByClassName() or  var fags = document.getElementsByTagName("Li");
//it's a newer method; but selects one thing at a time, tagname or select anything with it      

// document.querySelectorAll()
var fx23 = document.querySelectorAll("h1"); //will select evry object
console.dir(fx23);
