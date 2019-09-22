var friends = ["Joey","Chandler","Rachel","Monica","Ross"];
friends[1] = "Janice";


console.log(friends[1]);
var arr = new Array()

friends.length

friends.push("Blue");
console.log(friends);

for (var i = 0; i < 5; i++)
{
  console.log(friends[i]);
};

function max(Array)
{
    var maxi = 0;
    for(i = 0; i < Array.length; i++)
    {
        for (j = 1; j < Array.length; j++)
        {
            if ( Array[i] < Array[j])
            {
                maxi = Array[j];
            }

            else 
            {
                maxi = Array[i];
            }
        }
    }

    return maxi;
}

