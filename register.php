<?php

session_start();

require_once 'config/dbconstants.php';
require_once 'config/connect.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$user = $_POST['username'];
$pass = $_POST['password'];
$pass = md5($pass);
$month = $_POST['month'];
$day = $_POST['day'];
$year = $_POST['year'];
$dob = $year."-".$month."-".$day;
$gender = $_POST['gender'];
if($gender == "male"){
	$gender = "M";
}else if($gender == "female"){
	$gender = "F";
}else if($gender == "other"){
	$gender = "O";
}
$phone = $_POST['phone'];
$email = $_POST['email'];
$captcha = $_POST['captcha'];
$location = $_POST['location'];

$query = "INSERT INTO gmail_users (first_name, last_name, date_of_birth, gender, mobile, prev_email, location) VALUES ('$fname','$lname','$dob','$gender','$phone','$email','$location')";
$res1 = mysql_query($query);
$id = mysql_insert_id();
$query = "INSERT INTO gmail_login (user_id, username, password, valid) VALUES($id,'$user','$pass',1)";
$res2 = mysql_query($query);
if($res1 && $res2){
	$_SESSION['loggedIn'] = "true";
	$_SESSION['user'] = $id;
}
header("location:index.php");
?>
