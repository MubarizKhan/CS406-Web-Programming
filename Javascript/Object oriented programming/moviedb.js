var movies = [
    {
        Title: "Fightclub",
        Rating: 8.8,
        seen: true
    }
    ,

    {
        Title: "Dark Knight",
        Rating: 9.0,
        seen: true
    }
    ,

    {
        Title: "Pulp-fiction",
        Rating: 8.9,
        seen: true
    }
    ,

    {
        Title: "Requiem for a dream",
        Rating: 8.4,
        seen:true
    }
    
]

movies.forEach(function(movies)
{
    var result = "You have ";
    if (movies.seen)
        result += "watched";
    else
        result += "not seen";

    result += "\"" + movies.title + "\" - ";
    result += movies.Rating + " stars";
    console.log("result");
}
)