var heads = document.querySelector("h1");
heads.style.color = "pink";

console.log("copy the codes in the console to see the change");

var body = document.querySelector("body");
var isblue = false;


//The  set interval function; repeats execution; according to tthe time as argument given

setInterval(function(){
    if (isblue)
    {
        body.style.background = "white";
    }
    else
    {
        body.style.background = "blue";
    }
    isblue = !isblue;
},1000);