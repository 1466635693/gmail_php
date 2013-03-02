<?php

session_start();
if(isset($_SESSION['loggedIn'])){
	if($_SESSION['loggedIn'] == "true"){
		header("location:mail.php");
	}
}
$login = "hidden";
if(isset($_SESSION['loginError'])){
	if($_SESSION['loginError'] == "passfail"){
		$login = "";
	}
}
?>
<!DOCTYPE html>

<html>
	<head>
		<title>Gmail: Email from Google</title>
		<link rel="shortcuticon" href="images/favicon.ico" type="image/ico" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<script type="text/javascript" src="js/script.js"></script>
	</head>
	<body onload="autoFocus();">
    	<div id="container">
		<div id="title">
			<span id="logo"><img src="images/google.png" /></span>
			<span id="side-box">
				<span id="side-box-text">New to Gmail?</span>
				<a href="signup.php" id="side-box-button" class="button button-red">CREATE AN ACCOUNT</a>
			</span>
		</div>
		<div id="login">
        	<div id="login-data">
                <span id="signin-text">Sign in</span><span id="logo-fade"><img src="images/google-signin-flat.png" /></span>
                <div id="inputs-login">
                <form action="signin.php" method="post" id="signin-form">
                    <span id="username-text">Username</span>
                    <div id="username-box">
                        <input type="text" name="username" id="username" />
                        <div id="no-username" class="hidden error erroerror">Enter your email address</div>
                    </div>
                    <div id="password-text">Password</div>
                    <div id="password-box">
                        <input type="password" name="password" id="password" />
                        <div id="no-password" class="<?php echo $login; ?> error erroerror">The username or password you entered is incorrect</div>
                    </div>
                </div>
                <div id="signin-button">
                    <a href="#" class="button button-blue" onClick="validateSignin();">Sign in</a>
                    <span id="keep-box">
                        <input type="checkbox" name="keep" class="check" />
                        <span id="keep-text">
	                        Stay signed in
                        </span>
                    </span>
                </div>
                </form>
                <div id="forgot-link" class="last">
                    <a href="signup.php" class="link">Can't access your account?</a>
                </div>
            </div>
		</div>
        <div id="body">
        	<div class="text heading red">Gmail</div>
            <div class="text subheading" id="approach">A Google approach to email.</div>
            <div class="text content" id="desc">
            	Gmail is built on the idea that email can be more intuitive, efficient, and useful. And maybe even fun. After all, Gmail has: 
            </div>
            <div class="feature">
            	<div class="picture"><img src="images/lotsOfSpace.png" /></div>
                <div class="text subheading feature-title">Lots of space</div>
                <div class="text content feature-content">Over 10342.091499 megabytes (and counting) of free storage.</div>
            </div>
            <div class="feature">
            	<div class="picture"><img src="images/noSpam.png" /></div>
                <div class="text subheading feature-title">Less spam</div>
                <div class="text content feature-content">Keep unwanted messages out of your inbox.</div>
            </div>
            <div class="feature">
            	<div class="picture"><img src="images/mobileAccess.png" /></div>
                <div class="text subheading feature-title">Mobile access</div>
                <div class="text content feature-content">Get Gmail on your mobile phone. <a href="#" class="link">Learn more</a></div>
            </div>
            <div id="links">
            	<span class="text content right-space"><a href="about.html" class="link">About Gmail</a></span>
                <span class="text content right-space"><a href="#" class="link">New features!</a></span>
                <span class="text content right-space"><a href="signup.php" class="link">Switch to Gmail</a></span>
                <span class="text content right-space"><a href="signup.php" class="link">Create an account</a></span>
            </div>
            
            <div class="notification">
            	<div class="picture"><img src="images/gsf.gif" width="64" height="64" /></div>
                <div class="text subheading" id="noti-title">Your ideas might just change the world</div>
                <div class="text content" id="noti-content">
                	The Google Science Fair 2013 is now open. Visit <a href="#" class="link">googlesciencefair.com</a>	 to learn more and enter.
                </div>
            </div>
        </div>
        		<div class="footer-bar text">
        	<div class="footer">
            	<ul>
                	<li>&copy; 2013 ETAMCCS011</li>
                    <li>Gmail for Work</li>
                    <li>Terms &amp; Privacy</li>
                    <li>Help</li>
                </ul>
            </div>
		</div>
        </div>
	</body>
</html>
