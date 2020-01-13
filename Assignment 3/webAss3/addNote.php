<?php 

	$un      = $_GET['user'];
	$title   = $_GET['title'];
	$content = $_GET['content'];
	$ti  = date("h:i:s");


	$con = new MYSQLi('localhost', 'root', 'root', 'ass3');
	$qry = "insert into notes(saved_by, title, content, time_saved) values ('".$un."', '".$title."', '".$content."', '".$ti."')";

	$res = $con->query($qry);

	if($res) {
		echo "Note added !";
	} else {
		echo "Failed adding note !";
	}


 ?>