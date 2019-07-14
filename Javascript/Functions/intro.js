function dosomething()
{
    console.log("Do something");
}

dosomething();

//If you write simply the name of the function in the console log
// it will print the code on the screen

function square(num)
{
    console.log(num * num)
    return num;
}

function greet(user1, user2, user3)
{
    arr[3] = {user1, user2, user3};
    for(var i = 0; i < 3; i++)
    {
        console.log(arr[i]);
    }
}

function greet(user1, user2, user3)
{
    
    console.log("hi" + user1);
    console.log("hi" + user2);
    console.log("hi" + user3);
}

// If user1 not defined while calling, then it'll run the code but will say hi undefined

//this is a function declaration
function capitalize(str)
{

    return str.charAt(0) + str.slice(1);
}

var why = capitalize("lofi");

var capi = function capitalize(str)
{
    //if capi's name will be changed; the function will be lost
    return str.charAt(0) + str.slice(1);
}

capi()


function is_even(digit)
{
    if(digit % 2 = 0)
    {
        console.log("the" + "digit" + digit + "is even br0");
    }

    else{
        console.log("the" + "digit" + digit + "is  NOT even br0");
    }
}

is_even(43);
is_even(4);

function factorial(digit)
{   
    var fact = 1;

    if (digit == 0 || digit == 1)
    {
        return 1;
    }

    else if(digit > 1 )
    {
        for (i = digit; i > 0; i--)
        {
            fact *= i;
        }
    }
    console.log("the factorial is" + fact);
}

// function kebab_to_snake(word)
// {
//     for(i = 0; i < word.length; i++)
//     {
//         if ( = "-")
//         {
//             word[i] = "_";
//         }

//         return word[i];
//     }
//    return word[i];
//     // console.log(word);
// }

function kebab_to_snake(word)
{
  
// if (word[i] == '-')
       
     var nw = word.replace(/-/g, "_");
      console.log(nw);
}

 kebab_to_snake("h---kj");