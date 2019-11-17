<?php 	session_start(); ?>
 

 <!DOCTYPE html>
 	<html>
 	<head>
 		<title> Home | Notes </title>

 		<script type="text/javascript">
 		
		 function new_Notes() 
		 {
 			document.getElementsByClassName('new')[0].hidden = false;
 			document.getElementsByClassName('show')[0].hidden = true;
 		}

		 function show_Note() 
		 {
 			document.getElementsByClassName('show')[0].hidden = false;
 			document.getElementsByClassName('new')[0].hidden = true;

 			var x = new XMLHttpRequest();
			x.onreadystatechange = function()
			 {
				   if (this.readyState == 4 && this.status == 200) 
				   {
		   			console.log('heyy, status 200');
		    		document.getElementsByClassName("notes")[0].innerHTML = this.responseText;
		    		console.log(this.responseText);
		    		}
			  };
			  
		  	var _la = <?php echo "'".$_SESSION['user']."'" ?>;
		  	console.log("user = "+_la);
		  	x.open("GET", "getNotes.php?user="+ _la, true);
		  	x.send();

 		}

		 function adding_notes()
		  {
 			console.log("adding note");

 			var x = new XMLHttpRequest();
			x.onreadystatechange = function() 
			{
			if (this.readyState == 4 && this.status == 200) 
				   {
		   			console.log('skrrtttt');
		    		document.getElementsByClassName("response")[0].innerHTML = this.responseText;
		    		console.log(this.responseText);
		    		}
			};
			  

			var user    = <?php echo "'".$_SESSION['user']."'" ?>;
			  
			var title   = document.getElementById('title').value;
			  
		  	var content = document.getElementById('content').value;

		  	console.log("user = "+user+" title = "+title+" content = "+content);
		  	x.open("GET", "addNote.php?user="+user+"&title="+title+"&content="+content, true);
		  	x.send();


 		}


 	</script>
 </head>
 <body>
 	
 	<h1> Welcome to <?php echo $_SESSION['user']  ?>'s note list</h1>

 	<button onclick="new_Notes()">Add a New Note</button>
 	<button onclick="show_Note()">Show previous Note</button>

 	<div class="new">
 		<p> New Note </p>
 		
 			<input id="title" type="text" name="" placeholder="Notes Title">
 			<input id="content" type="text" name="" placeholder="Note Content">
 			<input type="submit" name="" value="Add Note" onclick="adding_notes()">
 		

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