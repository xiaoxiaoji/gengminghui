<?php
header("content-type:text/html;charset=utf-8");
session_start();
require_once 'mysql_function.php';
$act = $_REQUEST['act'];
if($act == "regist"){
	regist();
}

if($act == "login"){
	login();
}
if($act=="logout"){
	logout();
}





?>