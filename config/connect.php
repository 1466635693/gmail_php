<?php
$connection = mysql_connect($DB_HOST,$DB_USER,$DB_PASSWORD);
if(!$connection){
	echo "<h1>DB Connection Error</h1>";
}
$selection = mysql_select_db($DB_DATABASE,$connection);
if(!$selection){
	echo "<h1>DB Selection Error</h1>";
}
?>