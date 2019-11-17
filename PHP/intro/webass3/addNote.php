<?php 

	$un      = $_GET['user'];
	$title   = $_GET['title'];
	$content = $_GET['content'];
	$datee  = date("h:i:s");


	$connect = new MYSQLi('localhost', 'root', '', 'ass3');
	$qry = "insert into notes(saved_by, title, content, time_saved) values ('".$un."', '".$title."', '".$content."', '".$datee."')";

	$result = $connect->query($qry);

	if($result) 
	{
		echo "Note added !";
	} 

	else 
	{
		echo "Failed adding note !";
	}


 ?>