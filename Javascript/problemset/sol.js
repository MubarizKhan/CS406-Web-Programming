//Printing contents of the array in reverse

function printreverse(Array)
{
    for(i = Array.length; i > -1 ; i--)
    {
        console.log(Array[i]);
    }
}

//Write a function; which takes array as an argument & return true if all the elements in he array are identical

function isuniform(Array)
{
    for(i = 0; i < Array.length; i++)
    {
        for(j = 1; j < Array.length; j++)
        {
            if (Array[i] === Array[j])
            {
                continue;
            }
            else
            {
                return false;
            }
            
        }

        return true;
    }
}


//Write a function which accepts array as a parameter; and sums it up assuming theyre numbers

function sum(Array)
{
    var sum = 0;

    for(i = 0; i < Array.length; i++)
    {
        sum += Array[i];
    }

    return sum;
}

// write a function which prints the largest element in an array; assuming they're numbers
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