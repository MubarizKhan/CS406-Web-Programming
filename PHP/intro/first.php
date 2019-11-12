

<?php

include "second.php";

$user = "Mubariz";
?>

<?php
echo "Hello world";
?>

 <!Doctype  html>
<html>
<body>
    <h1> Welcome <?php echo "hello".$user; ?> </h1>

    <p>
    The server time is 
    <?php
        echo "<strong>";
        echo "my first php program sort of";
        echo "</strong>";
    ?>

    <?php
        $check = TRUE;
    ?>
    
    <?php if ($check == TRUE): ?>
        <br>
        <a href = "lol.com"> LOL </a>

    <?php endif; ?>


    <?php
        if ($lorde == "sober")
            echo "<strong> Da heck </strong";
        else
        {
            echo "This is not working";
        }

    ?>
    <br>

     </p>

     <?php $val = 3450; 
        get_paid($val); 
    ?>


     <?php 

        $initial = 15;
        change_parameter($initial);



    ?>






    


</body>
</html> 