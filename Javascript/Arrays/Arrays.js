var friends = ["charlie", "liz", "amy", "chloe"];
friends[0] = "chuck";

friends[4] = "belzeebub";

//Initializing Arrays
var friends = [];
var arr = new Array() //uncommon way

//In javascript Arrays don't need to hold homogenous types of data
var random_collection = ["friends", 89, true, null];
random_collection.length //to get the length of an array


// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Array methods

// push/Pop
var colors = ["orange", "red", "blue"];
colors.push("magenta"); //will add magenta at the last index
colors.pop(); //will remove & return the last index

// shift/unshift

//use unshift to add an element to the front of an array
var beatles = ["McCartney", "John", "Ringo", "George"];
beatles.unshift("Klaney");

beatles.shift(); //will remove & return the first element from the array
var nothing = beatles.shift(); //storing the retuned element

// indexof
//To find an index of the item in the array
var Hogwarts = ["Harry", "Ron", "Hermione", "Hagrid"];
Hogwarts.indexOf("Harry"); //will return 0
Hogwarts.indexOf("Hagrid"); //will return 3

Hogwarts.indexOf("Tom Riddle"); //will return 1

// slice
// Use slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//use slice to copy the 2nd & 3rd fruits
//specify which index does the new array start and end
var citrus = fruits.slice(1,3);

//slice can also be used to copy an entire array
var nums = [1,2,3];
var othernums = num.slice();

//Brain check
var friendgroups = [ ["Harry", "Hermione", "Ron"], ["Malfoy" , "Crabbe", "Goyle"], ["Mooney", "Wormtail", "Prongs"]];
console.log(friendgroups[2][0]) //"Mooney" will be printed


// Iterating over an Array

colors = [1,2,3,4,5];
colors.forEach(function(printing){
    console.log(colors); //console.log("Inside the foreach") --> inside the foreac 1,2,3,4
  });

  ////////////////////////////////////////////////////////////////////////////

  function pc(color)
  {
    console.log("********");
    console.log(color);
    console.log("*********");
  }

  colors.forEach(pc);

//   output:
// ******** 
// 1 
// ********* 
// ******** 
// 2 
// ********* 
// ******** 
// 3 
// ********* 
// ******** 
// 4 
// ********* 
// ******** 
// 5 
// *********