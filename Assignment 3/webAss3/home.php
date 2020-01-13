<?php 	session_start(); ?>
 

 <!DOCTYPE html>
 	<html>
 	<head>
 		<title> Home | Notes </title>

 		<script type="text/javascript">
 		
		 function newNote() 
		 {
 			document.getElementsByClassName('new')[0].hidden = false;
 			document.getElementsByClassName('show')[0].hidden = true;
 		}

		 function showNote() 
		 {
 			document.getElementsByClassName('show')[0].hidden = false;
 			document.getElementsByClassName('new')[0].hidden = true;

 			var xhttp = new XMLHttpRequest();
		    xhttp.onreadystatechange = function() {
		   		if (this.readyState == 4 && this.status == 200) {
		   			console.log('heyy, status 200');
		    		document.getElementsByClassName("notes")[0].innerHTML = this.responseText;
		    		console.log(this.responseText);
		    	}
		  	};
		  	var user = <?php echo "'".$_SESSION['user']."'" ?>;
		  	console.log("user = "+user);
		  	xhttp.open("GET", "getNotes.php?user="+user, true);
		  	xhttp.send();

 		}

 		function addNote() {
 			console.log("adding note");

 			var xhttp = new XMLHttpRequest();
		    xhttp.onreadystatechange = function() {
		   		if (this.readyState == 4 && this.status == 200) {
		   			console.log('heyy, status 200');
		    		document.getElementsByClassName("response")[0].innerHTML = this.responseText;
		    		console.log(this.responseText);
		    	}
		  	};
		  	var user    = <?php echo "'".$_SESSION['user']."'" ?>;
		  	var title   = document.getElementById('title').value;
		  	var content = document.getElementById('content').value;

		  	console.log("user = "+user+" title = "+title+" content = "+content);
		  	xhttp.open("GET", "addNote.php?user="+user+"&title="+title+"&content="+content, true);
		  	xhttp.send();


 		}


 	</script>
 </head>
 <body>
 	
 	<h1> Welcome < <?php echo $_SESSION['user']  ?> > To Notes App</h1>

 	<button onclick="newNote()">New Note</button>
 	<button onclick="showNote()">Show Note</button>

 	<div class="new">
 		<p> New Note </p>
 		
 			<input id="title" type="text" name="" placeholder="Note Title">
 			<input id="content" type="text" name="" placeholder="Note Conetent">
 			<input type="submit" name="" value="Add Note" onclick="addNote()">
 		

 		<div class="response">
 			
 		</div>
 	</div>

 	<div class="show">
 		<p> Show Note </p>
 		<div class="notes">
 			
 		</div>
 	</div>
 		

 	<script type="text/javascript">
 			document.getElementsByClassName('new')[0].hidden = true;
 			document.getElementsByClassName('show')[0].hidden = true;
 			console.log("ready");
 	</script>
 </body>
 </html>