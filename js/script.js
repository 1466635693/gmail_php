function autoFocus(){
	document.getElementById("username").focus();
	document.getElementById("check").checked = false;
}

function validateSignin(){
	var un = document.getElementById('username');
	var pw = document.getElementById('password');
	var regexMail=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*(@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4}))?$/;
	
	document.getElementById('no-username').setAttribute('class','error erroerror hidden');
	document.getElementById('no-password').setAttribute('class','error erroerror hidden');
	document.getElementById('username').setAttribute('class','');
	document.getElementById('password').setAttribute('class','');
	
	if(un.value == "" || un.value == null){
		document.getElementById('no-username').setAttribute('class','error erroerror');
		document.getElementById('username').setAttribute('class','error-box');
		document.getElementById('username').select();
		return false;
	}
	if(!regexMail.test(un.value)){
		document.getElementById('no-username').setAttribute('class','error erroerror');
		document.getElementById('username').setAttribute('class','error-box');
		document.getElementById('username').select();
		return false;
	}
	if(pw.value == "" || pw.value == null){
		document.getElementById('no-password').setAttribute('class','error erroerror');
		document.getElementById('password').setAttribute('class','error-box');
		document.getElementById('password').select();
		return false;
	}
	document.getElementById('signin-form').submit();
	return true;
}
function validate(){
	var fn = document.getElementById('fname');
	var ln = document.getElementById('lname');
	var un = document.getElementById('username');
	var pwd = document.getElementById('password');
	var cpwd = document.getElementById('c-password');
	var month = document.getElementById('month');
	var dy = document.getElementById('day');
	var yr = document.getElementById('year');
	var mob = document.getElementById('phone');
	var mail = document.getElementById('email');
	var cap = document.getElementById('captcha');
	var term = document.getElementById('terms');
	var bot = document.getElementById('no-bot');

	var reg = new RegExp('(\\s|^)'+'error-box'+'(\\s|$)');
    	fn.className=fn.className.replace(reg,' ');
	ln.className=ln.className.replace(reg,' ');
	un.className=un.className.replace(reg,' ');
	pwd.className=pwd.className.replace(reg,' ');
	cpwd.className=cpwd.className.replace(reg,' ');
	dy.className=dy.className.replace(reg,' ');
	yr.className=yr.className.replace(reg,' ');
	mob.className=mob.className.replace(reg,' ');
	mail.className=mail.className.replace(reg,' ');
	cap.className=cap.className.replace(reg,' ');
	term.className=term.className.replace(reg,' ');
	
	document.getElementById('name-error').setAttribute('class','error erroerror hidden');
	document.getElementById('user-error').setAttribute('class','error erroerror hidden');
	document.getElementById('pass-error').setAttribute('class','error erroerror hidden');
	document.getElementById('c-pass-error').setAttribute('class','error erroerror hidden');
	document.getElementById('c-pass-match-error').setAttribute('class','error erroerror hidden');
	document.getElementById('dob-error').setAttribute('class','error erroerror hidden');
	document.getElementById('dob-error-2').setAttribute('class','error erroerror hidden');
	document.getElementById('phone-error').setAttribute('class','error erroerror hidden');
	document.getElementById('phone-error-2').setAttribute('class','error erroerror hidden');
	document.getElementById('mail-error').setAttribute('class','error erroerror hidden');
	document.getElementById('mail-error-2').setAttribute('class','error erroerror hidden');
	document.getElementById('captcha-error').setAttribute('class','error erroerror hidden');
	document.getElementById('terms-error').setAttribute('class','error erroerror hidden');
	
	var noError = true;
	var focus = false;
	
	if(fn.value == "" || fn.value == null){
		document.getElementById('name-error').setAttribute('class','error erroerror');
		var cls = fn.getAttribute('class');
		cls = cls + " error-box";
		fn.setAttribute('class',cls);
		fn.focus();
		focus = true;
		noError = false;
	}
	if(ln.value == "" || ln.value == null){
		document.getElementById('name-error').setAttribute('class','error erroerror');
		var cls = ln.getAttribute('class');
		cls = cls + " error-box";
		ln.setAttribute('class',cls);
		if(!focus){
			ln.focus();
			focus = true;
		}
		noError = false;
	}
	if(un.value == "" || un.value == null){
		document.getElementById('user-error').setAttribute('class','error erroerror');
		var cls = un.getAttribute('class');
		cls = cls + " error-box";
		un.setAttribute('class',cls);
		if(!focus){
			un.focus();
			focus = true;
		}
		noError = false;
	}
	if(pwd.value == "" || pwd.value == null){
		document.getElementById('pass-error').setAttribute('class','error erroerror');
		var cls = pwd.getAttribute('class');
		cls = cls + " error-box";
		pwd.setAttribute('class',cls);
		if(!focus){
			pwd.focus();
			focus = true;
		}
		noError = false;
	}
	if((cpwd.value == "" || cpwd.value == null) && (pwd.value == "" || pwd.value == null)){
		document.getElementById('c-pass-error').setAttribute('class','error erroerror');
		var cls = cpwd.getAttribute('class');
		cls = cls + " error-box";
		cpwd.setAttribute('class',cls);
		if(!focus){
			cpwd.focus();
			focus = true;
		}
		noError = false;
	}
	if(cpwd.value != pwd.value && pwd.value != null && pwd.value != ""){
		document.getElementById('c-pass-match-error').setAttribute('class','error erroerror');
		var cls = cpwd.getAttribute('class');
		cls = cls + " error-box";
		cpwd.setAttribute('class',cls);
		if(!focus){
			cpwd.select();
			focus = true;
		}
		noError = false;
	}
	if(dy.value == "" || dy.value == null){
		document.getElementById('dob-error').setAttribute('class','error erroerror');
		var cls = dy.getAttribute('class');
		cls = cls + " error-box";
		dy.setAttribute('class',cls);
		if(!focus){
			dy.focus();
			focus = true;
		}
		noError = false;
	}else{
		var mnth = month.options[month.selectedIndex].value;
		if(mnth == 1 || mnth == 3 || mnth == 5 || mnth == 7 || mnth == 8 || mnth == 10 || mnth == 12){
			if(dy.value > 31 || dy.value < 1){
				document.getElementById('dob-error-2').setAttribute('class','error erroerror');
				var cls = dy.getAttribute('class');
				cls = cls + " error-box";
				dy.setAttribute('class',cls);
				if(!focus){
					dy.focus();
					focus = true;
				}
				noError = false;
			}
		}else if(mnth == 2){
			if(dy.value > 29 || dy.value < 1){
				document.getElementById('dob-error-2').setAttribute('class','error erroerror');
				var cls = dy.getAttribute('class');
				cls = cls + " error-box ";
				dy.setAttribute('class',cls);
				if(!focus){
					dy.focus();
					focus = true;
				}
				noError = false;
			}
		}else{
			if(dy.value > 30 || dy.value < 1){
				document.getElementById('dob-error-2').setAttribute('class','error erroerror');
				var cls = dy.getAttribute('class');
				cls = cls + " error-box";
				dy.setAttribute('class',cls);
				if(!focus){
					dy.focus();
					focus = true;
				}
				noError = false;
			}
		}
	}
	if(yr.value == "" || yr.value == null){
		document.getElementById('dob-error').setAttribute('class','error erroerror');
		var cls = yr.getAttribute('class');
		cls = cls + " error-box";
		yr.setAttribute('class',cls);
		if(!focus){
			yr.focus();
			focus = true;
		}
		noError = false;
	}
	if(mob.value == "" || mob.value == null){
		document.getElementById('phone-error').setAttribute('class','error erroerror');
		var cls = mob.getAttribute('class');
		cls = cls + " error-box";
		mob.setAttribute('class',cls);
		if(!focus){
			mob.focus();
			focus = true;
		}
		noError = false;
	}else{
		if(mob.value.length != 10 || isNaN(mob.value)){
			document.getElementById('phone-error-2').setAttribute('class','error erroerror');
			var cls = mob.getAttribute('class');
			cls = cls + " error-box";
			mob.setAttribute('class',cls);
			if(!focus){
				mob.focus();
				focus = true;
			}
			noError = false;
		}
		if(mob.value.charAt(0) != '9' && mob.value.charAt(0) != '8' && mob.value.charAt(0) != '7'){
			document.getElementById('phone-error-2').setAttribute('class','error erroerror');
			alert('this error  ' + mob.value.charAt(0));
			var cls = mob.getAttribute('class');
			cls = cls + " error-box";
			mob.setAttribute('class',cls);
			if(!focus){
				mob.focus();
				focus = true;
			}
			noError = false;
		}
	}
	if(mail.value == "" || mail.value == null){
		document.getElementById('mail-error').setAttribute('class','error erroerror');
		var cls = mail.getAttribute('class');
		cls = cls + " error-box";
		mail.setAttribute('class',cls);
		if(!focus){
			mail.focus();
			focus = true;
		}
		noError = false;
	}else{
		var regexMail=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		if(!regexMail.test(mail.value)){
			document.getElementById('mail-error-2').setAttribute('class','error erroerror');
			var cls = mail.getAttribute('class');
			cls = cls + " error-box";
			mail.setAttribute('class',cls);
			if(!focus){
				mail.focus();
				focus = true;
			}
			noError = false;
		}
	}
	if(bot.checked == false){
		if(cap.value == "" || cap.value == null){
			document.getElementById('captcha-error').setAttribute('class','error erroerror');
			var cls = cap.getAttribute('class');
			cls = cls + " error-box";
			cap.setAttribute('class',cls);
			if(!focus){
				cap.focus();
				focus = true;
			}
			noError = false;
		}
	}
	if(term.checked == false){
		document.getElementById('terms-error').setAttribute('class','error erroerror');
		var cls = term.getAttribute('class');
		cls = cls + " error-box";
		term.setAttribute('class',cls);
		if(!focus){
			term.focus();
			focus = true;
		}
		noError = false;
	}
	
	if(noError){
		document.getElementById('signup-form').submit();
	}
	return noError;
}

function bot(){
	var reg = new RegExp('(\\s|^)'+'hidden'+'(\\s|$)');
	var title = document.getElementById('captcha-title');
	var field = document.getElementById('captcha-field');
	if(title.className.match(reg)){
		title.className = title.className.replace(reg, ' ');
		field.className = field.className.replace(reg, ' ');
	}else{
		title.className = title.className + " hidden ";
		field.className = field.className + " hidden ";
	}
}
