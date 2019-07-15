console.log("connected");

    var todo = ["ride w me"];

    var val = prompt("What would you like to do?");

    while (val !== "quit")
    {
        if(val === "list")
            console.log(todo);

        else if (val === "new")
        {
            var insert = prompt("What would you like to insert?");
            todo.push(insert);
            
        }
        val = prompt("What would you like to do?");
    }

    console.log("ok you quit the app");



    
    
    

