var button = document.querySelector("button");
var iscolor = false;

button.addEventListener("click", function()
{
    if (iscolor)
    {
        document.body.style.background = "white";
    }

    else 
    {
        document.body.style.background = "green";

    }
    iscolor !=iscolor;
});