var dogs = ["tom", "hanks", "forest"];

var dogs = {
    name: "Tom",
    breed: "Pinscher"
}

//accessing array dogs[];
dogs[1];

//accessing class dogs
dogs["name"];
// or
 dogs.name

 //Adding elements

 dogs.shift("Kofferinschaumer"); //in an array
 dogs.age = 6;

 //redefination will update the list & the class 
 dogs[1] = "Johnny";
 dog["name"] = "Alphadog";

 //Nested Objects & Arrays
 var posts = [
    {
        title : "Cats are nice",
        author : "komba",
        comments: ["stop doubting urself", "awlright"]
    },

    {
        title : "Thoughts are scary",
        author : "Yours truly",
        comments: ["i cant agree w this", "so true"]
    }
 ]

 //Accessing
 post[0];
 post[0][1]; //first class; authors name

 