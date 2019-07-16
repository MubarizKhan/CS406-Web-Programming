var obj =
{
    name: "chuck",
    age: 45,
    isDope: false,
    friends: ["Chloe", "morningstar"],
    add: function(x,y)
    {
        return x + y;
    }

}


obj.add(10,34); //44

var dogspace = {};
dogspace.sound = function(){
    return "bark";
}

var catspace = {};
catspace.sound = function(){
    return "meow";
}

dogspace.sound();
catspace.sound();