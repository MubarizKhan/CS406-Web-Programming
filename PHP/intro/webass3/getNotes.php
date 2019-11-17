<?php 


	$f_un = $_GET['user'];

	$connect = new MYSQLi('localhost', 'root', '', 'ass3');
	
	if($connect->connect_error) 
	{
		echo "There was a problem! ";
		die();
	}

	$qry = "select * from notes where saved_by = '".$f_un."'";

	$result = $connect->query($qry);
	
	$r = "";
	$r .= "<table>";
	$r .= "<tr> <th>Title</th> <th>Content</th> <th>Time</th> <th>Delete</th> </tr>";
	while($row = $result->fetch_assoc()) 
	{
	
		$r .= "<tr>";
		$r .= "<td>".$row['title']."</td>";
		$r .= "<td>".$row['content']."</td>";
		$r .= "<td>".$row['time_saved']."</td>";
		$r .= "<td> <button> Delete </button>";

		$r .= "</tr>";
	}
	$r .= "</table>";

	

	echo $r;
 ?>