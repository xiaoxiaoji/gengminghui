<?php
function connect(){
	$con = mysql_connect("localhost","gengminghui","Gmh370633162") or die("连接数据库失败".mysql_error());
	mysql_set_charset("utf8");
	mysql_select_db("gengminghui") or die("打开数据库失败");
}
function insert($table,$array){
	$keys="`".join("`,`",array_keys($array))."`";
	$vals="'".join("','",array_values($array))."'";
	$sql="insert {$table}($keys) values({$vals})";
	//echo $sql;
	
	//echo mysql_errno();
	return $sql;
}
function fetchall($sql,$result_type=MYSQL_ASSOC){
	connect();
	$result = mysql_query($sql);
	//print_r($result);
	while(@$row=mysql_fetch_array($result)){
		$rows[]=$row;
	}
	return @$rows;
}

function fecthone($sql,$result_type=MYSQL_ASSOC){
	connect();
	$result = mysql_query($sql);
	@$row=mysql_fetch_array($result);
	ini_set("display_errors", "Off");
	return $row;
	
}

function alertMes($mes,$url){	
	echo "
	<script>	
	alert('$mes');
	window.location='$url';
	</script>	
	";
}


function login(){
	

	$userid = $_POST['userid'];
	$password = $_POST['password'];
	$password = md5($password);
	$verify=$_POST['verify'];
	$verify1=$_SESSION['verify'];	
	connect();
	if(strtolower($verify)==strtolower($verify1)){
	$sql="select * from user where userid='{$userid}' and password='{$password}'";
	$row=fecthone($sql);	
	if($row){
			setcookie("userid",$row['userid'],time()+7*24*3600);
			//setcookie("adminName",$row['username'],time()+7*24*3600);										
		$_SESSION['userid']=$row['userid'];
		alertMes("succeed","getweather.php");
		return $row;
	}else{
			
		alertMes("there are some wrong","login.php");
	}
}else{
	alertMes("verify error","login.php");
}
}
 function logout(){
	session_destroy();
	if(isset($_COOKIE['userid'])){
			setcookie("userid","",time()-1);
		}
 	alertMes("you have exited", "getweather.php");
 }
function regist(){
	connect();
	$userid = $_POST['userid'];
	$password1 = $_POST['password'];
	$password2 = $_POST['password2'];
	if($password1==$password2){
		$password1 = md5($password1);
		$sql = "INSERT INTO `gengminghui`.`user` (`userid`, `password`) VALUES ('$userid', '$password1')";
		if(mysql_query($sql)){
		alertMes("succeed", "getweather.php");
		}
		else{
				echo "
				<script>
		alert('the userid has exited');
		window.location='register.php';
		</script>
		";
		}
	}
	
	else{
		
		alertMes("there was a diffirent in two password", "register.php");
	}
}
?>
