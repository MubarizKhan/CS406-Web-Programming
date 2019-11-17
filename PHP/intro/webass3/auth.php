<?php 
	session_start();

	$un = $_GET["username"];
	$up = $_GET["userpass"];

	$connect = new MYSQLi('localhost', 'root', '', 'ass3');

	if($connect->connect_error)
	 {
		echo "Sorry! this is not working";
		die();
	 } 

	//  else {
	
	// }

	$qry = "select * from user where name = '".$un."'";
	
	$res = $connect->query($qry);
	
	if(!$res) {
		echo "<br> no result";
	}

	while($row = $res->fetch_assoc()) 
	{
		echo $row['name']." - ".$row['pass']." <br>";

		if($row['name'] == $un) 
		{	
			// 
			if($row['pass'] == $up) 
			{
				$_SESSION['user'] = $un;
				header("Location:home.php");
			} 
			else 
			{
				echo "<br> invalid password";
			}

		} 
		
		
		else 
		{
			echo "<br> invalid username";
		}
	}

 ?>