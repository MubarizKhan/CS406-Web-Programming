var todos = ["praying"];
var store = prompt("What do you want to do?");

while (store !== "quit")
{   if (store === "list")
        todolist();

    else if(store === "new")
        newtodo();

    else if(store === "delete")
        deletetodo();

    store = prompt("What do you want to do?");
}
console.log("ok u have quit");

function todolist()
{
    console.log("********");
    todos.forEach(function(todo,i)
    {
        console.log(i + ": " + todo);
    });
}

function newtodo()
{
   var st = prompt("Enter todo");
   todos.push(st);
   console.log("Entered to do ");
}

function deletetodo()
{
    var del = prompt("enter the index of the todo u want to delete");
    todos.splice(del,1);
    console.log("The index is deleted!")

}