document.querySelector("ul").addEventListener("click",function(){
    console.log("you clicked uL");
  });

  var lis = document.querySelectorAll("li");for(var i =0; i < lis.length; i++)
{
  lis[i].addEventListener("click",function(){
    this.style.color="green"
  });
}