<!DOCTYPE html>

<html>
	<head>
		<title>Google Accounts</title>
        <link rel="icon" href="images/favicon.ico" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
        <script type="text/javascript" src="js/script.js">

		</script>
	</head>
	<body onLoad="document.getElementById('fname').focus();">
    	<div id="container">
		<div id="title">
			<span id="logo"><img src="images/google.png" /></span>
			<span id="side-box">
				<a href="index.php" id="side-box-button" class="button button-white">Sign in</a>
			</span>
		</div>
		<div id="login">
        	<div id="login-data">
            <form action="register.php" method="post" id="signup-form">
                <div id="inputs-login">
                    <div id="name-text" class="title">Name</div>
                    <div id="name-box">
                        <input type="text" class="half field" name="fname" id="fname" />
						<input type="text" class="half field" name="lname" id="lname" />
                        <div id="name-error" class="error erroerror hidden">You can't leave this empty.</div>
                    </div>
                    <div id="password-text" class="title">Choose your username</div>
                    <div id="password-box" class="field">
                        <input type="text" name="username" id="username" />
                        <div id="user-error" class="error erroerror hidden">You can't leave this empty.</div>
                    </div>
                    <div class="title">Create a password</div>
                    <div class="field">
                        <input type="password" name="password" id="password" />
                        <div id="pass-error" class="error erroerror hidden">You can't leave this empty.</div>
                    </div>
                    <div class="title">Confirm your password</div>
                    <div class="field">
                        <input type="password" name="c-password" id="c-password" />
                        <div id="c-pass-error" class="error erroerror hidden">You can't leave this empty.</div>
						<div id="c-pass-match-error" class="error erroerror hidden">Passwords doesn't match.</div>
                    </div>
                    <div class="title">Birthday</div>
                    <div class="field">
			<select name="month" class="two-fifth dropdown" id="month">
				<option value="1">January</option>
				<option value="2">February</option>
				<option value="3">March</option>
				<option value="4">April</option>
				<option value="5">May</option>
				<option value="6">June</option>
				<option value="7">July</option>
				<option value="8">August</option>
				<option value="9">September</option>
				<option value="10">October</option>
				<option value="11">November</option>
				<option value="12">December</option>
			</select>
			<input type="text" class="one-fifth" name="day" id="day" />
			<input type="text" class="two-fifth" name="year" id="year" />
            <div id="dob-error" class="error erroerror hidden">You can't leave this empty.</div>
	    <div id="dob-error-2" class="error erroerror hidden">Please enter a valid date.</div>
		</div>
                    <div class="title">Gender</div>
                    <div class="field">
                        <select name="gender" class="dropdown">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Others</option>
						</select>
                    </div>
                    <div class="title">Mobile Phone</div>
                    <div class="field">
                        <input type="text" name="phone" id="phone" />
                        <div id="phone-error" class="error erroerror hidden">You can't leave this empty.</div>
						<div id="phone-error-2" class="error erroerror hidden">Please enter a valid mobile number.</div>
                    </div>
                    <div class="title">Your current email address</div>
                    <div class="field">
                        <input type="text" name="email" id="email" />
                        <div id="mail-error" class="error erroerror hidden">You can't leave this empty.</div>
                        <div id="mail-error-2" class="error erroerror hidden">Please enter a valid email address.</div>
                    </div>
                    <div class="title">Prove you're not a robot</div>
                    <div class="field">
                        <input type="checkbox" name="no-bot" class="check" id="no-bot" onchange="bot();" />
			<span>Skip this verification (phone verification may be required)</span>
                    </div>
                    <div class="title" id="captcha-title">Captcha</div>
                    <div class="field" id="captcha-field">
                        <input type="text" name="captcha" id="captcha" />
                        <div id="captcha-error" class="error erroerror hidden">You can't leave this empty.</div>
                    </div>
                    <div class="title">Location</div>
                    <div class="field">
			<select name="location" class="dropdown">
				<option value="india">India</option>
			</select>
                    </div>
                    <div class="field">
                    	<label>
                        <input type="checkbox" name="terms" class="check" id="terms" />
			I agree to the Google <a href="#" class="link">Terms of Service</a> and <a href="#" class="link">Privacy Policy</a></label>
            			<div id="terms-error" class="error erroerror hidden">You can't leave this unchecked.</div>
                    </div>
                    <div class="field last">
                    	<label>
                        <input type="checkbox" name="gplus" class="check" id="gplus" />
			Google may use my account information to personalize +1's on content and ads on non-Google websites. <a href="#" class="link">About personalization.</a></label>
                    </div>
                    <div id="button" class="last">
                    	<a href="#" class="button button-blue" onClick="validate();">Next Step</a>
                    </div>
                </div>
             </div>
             </form>
		</div>
        <div id="body-big">
        	<div class="text subheading-big red">Create a new Google Account</div>
            <div class="feature-big">
            	<div class="picture"><img src="images/more-than.jpg" /></div>
                <div class="text subheading-big feature-title-big">Your Google Account is more than just Gmail.</div>
                <div class="text content-big feature-content-big">
                	Talk, chat, share, schedule, store, organize, collaborate, discover, and create. Use Google products from Gmail to Google+ to YouTube, view your search history, all with one username and password, all backed up all the time and easy to find at (you guessed it) Google.com.
                </div>
            </div>
            <div class="feature-big">
            	<div class="picture"><img src="images/take-it-with-you.jpg" /></div>
                <div class="text subheading-big feature-title-big">Your Google Account is more than just Gmail.</div>
                <div class="text content-big feature-content-big">
                	Talk, chat, share, schedule, store, organize, collaborate, discover, and create. Use Google products from Gmail to Google+ to YouTube, view your search history, all with one username and password, all backed up all the time and easy to find at (you guessed it) Google.com.
                </div>
            </div>
            <div class="feature-big">
            	<div class="picture"><img src="images/share.jpg" /></div>
                <div class="text subheading-big feature-title-big">Your Google Account is more than just Gmail.</div>
                <div class="text content-big feature-content-big">
                	Talk, chat, share, schedule, store, organize, collaborate, discover, and create. Use Google products from Gmail to Google+ to YouTube, view your search history, all with one username and password, all backed up all the time and easy to find at (you guessed it) Google.com.
                </div>
            </div>
            <div class="feature-big">
            	<div class="picture"><img src="images/work-in-the-future.jpg" /></div>
                <div class="text subheading-big feature-title-big">Your Google Account is more than just Gmail.</div>
                <div class="text content-big feature-content-big">
                	Talk, chat, share, schedule, store, organize, collaborate, discover, and create. Use Google products from Gmail to Google+ to YouTube, view your search history, all with one username and password, all backed up all the time and easy to find at (you guessed it) Google.com.
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
