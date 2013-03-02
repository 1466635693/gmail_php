<?php
session_start();
if($_SESSION['loggedIn'] != "true"){
	header("location:index.php");
}
$uid = $_SESSION['user'];
require_once 'config/dbconstants.php';
require_once 'config/connect.php';

$query = "SELECT * FROM gmail_users WHERE user_id = $uid";
$result = mysql_query($query);
$data = mysql_fetch_array($result);
$fname = $data['first_name'];
$lname = $data['last_name'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Gmail Home</title>
<link rel="stylesheet" type="text/css" href="css/style.css"  />
</head>

<body>
<h1>YOU ARE SUCCESSFULLY LOGGED IN</h1> <h2><?php echo $fname." ".$lname; ?></h2>
<h3><a href="logout.php" class="link">Logout</a></h3>
</body>
</html>
