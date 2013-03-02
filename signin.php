<?php

session_start();

require_once 'config/dbconstants.php';
require_once 'config/connect.php';


$username = $_POST['username'];
$password = $_POST['password'];
$password = md5($password);

$query = "SELECT * FROM gmail_login WHERE username = '$username' OR username = '$username@gmail.com'";
$result = mysql_query($query);
$data = mysql_fetch_array($result);
$error = true;

if($data['password'] == $password){
	$_SESSION['loggedIn'] = "true";
	$_SESSION['user'] = $data['user_id'];
	$error = false;
}

if($error){
	$_SESSION['loginError'] = "passfail";
}

header("location:index.php");
?>
