<?php 
	$un = $_GET['user'];
	//echo $un;
	$con = new MYSQLi('localhost', 'root', 'root', 'ass3');
	if($con->connect_error) {
		echo "Yo! you messed up";
		die();
	}
	$qry = "select * from notes where saved_by = '".$un."'";
	//echo $qry;
	$res = $con->query($qry);
	
	$response = "";
	$response .= "<table>";
	$response .= "<tr> <th>Title</th> <th>Content</th> <th>Time</th> <th>Delete</th> </tr>";
	while($row = $res->fetch_assoc()) {
	//	echo "yo";
		$response .= "<tr>";
		$response .= "<td>".$row['title']."</td>";
		$response .= "<td>".$row['content']."</td>";
		$response .= "<td>".$row['time_saved']."</td>";
		$response .= "<td> <button> Delete </button>";

		$response .= "</tr>";
	}
	$response .= "</table>";

	

	echo $response;
 ?>