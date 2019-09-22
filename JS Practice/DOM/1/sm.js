
console.log("attached");

var h1 = document.querySelector("h1");
h1.style.color = "pink";

// alert("what?");

var body = document.querySelector("body");
var isblue = false;

setInterval(function()
{
    if (isblue)
    {
        body.style.background = "white";
    }
    else
    {
        body.style.background = "blue"
    }

    isblue = !isblue;
}, 1000);