var person = 
{
    name : "Travis",
    age : 78,
    ishuman : true,
    add: function(x,y)
    {
        return x + y;
    }
,
    say: function()
    {
        console.log("say what you need to say!")
    }
};

console.log(person.add(person.age, 1));

var person2 =
{
    name : "Lampard",
    age : 42,
    say : function()
    {
        console.log("Chelsea B;uees!")
    }
}

person.say()
person2.say()

someobject["1blah"] //Valid


