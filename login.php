<!DOCTYPE html>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
	<meta http-equiv=Content-Type content="text/html;charset=utf-8">
		<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">
		<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
		<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
		<link rel="stylesheet" type="text/css" href="css/main.css"/>
		<link rel="stylesheet" type="text/css" href="css/reset.css"/>
		<title>regist</title>
		<script src="js/logres.js" type="text/javascript" charset="utf-8"></script>
	</head>
		
	<body>		
<div class="loginBox">
	<div class="login_cont">
		<center><h3 class="log_title">
			login
		</h3></center>
		<br/>
	<form method="post"  action="doAction.php?act=login" onsubmit="return check()">
		<ul class="login">
			<div class="dropdown">

 
  
			</div>
			</br>
			<li class="l_tit">UserID</li>
			<li class="mb_10"><input id='name' type="text"  name="userid" placeholder="请输入用户名" class="login_input user_icon"></li>
			<li class="l_tit">password</li>
			<li class="mb_10"><input id="pass" type="password" name="password" class="login_input user_icon"></li>
			<li class="l_tit">验证码</li>
				<li class="mb_10"><input type="text" id="verify" name="verify" class="login_input password_icon"></li>
				<img src="image_func.php" alt="" name="image" onclick="update1()"/>
			<li>			
			<input type="submit" value="login" class="login_btn">					
		</ul>
		</form>		
	</div>
</div>
</body>
</html>

