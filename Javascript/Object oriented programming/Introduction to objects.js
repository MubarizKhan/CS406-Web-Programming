var person = {
    name : "Travis",
    age : 21,
    city : "LA"
};

//Retrieving Data
console.log(person["name"]);
console.log(person.name);

//Difference between the two notations
//you can't use dot notation if the property starts with a number

someobject.1blah //Invalid
someobject["1blah"] //Valid

somobject. blah blah //Invalid as spaces
someobject["blah blah"] //valid

//you can lookup using a using a variable with bracket notation
var str = "name";
someobject.str //doesnt look for name in that specific class
someobject[str] //does evaluate str & look for a name

