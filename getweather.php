<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>天气预报</title>
<link href="uisy/drivers/prviate.css" rel="stylesheet" type="text/css">
<script src="uisy/sprite/jquery.js"></script>
<script src="uisy/sprite/daluzai.js" language="javascript" type="text/javascript" charset="UTF-8"></script>
<script src="uisy/sprite/weather.js" language="javascript" type="text/javascript" charset="UTF-8">
</script>
<!--[if IE 6]><script src="uisy/sprite/debug_ie6.js" language="javascript" type="text/javascript" charset="UTF-8"></script><![endif]-->

</head>
<body>
<br/><br/>
<div class="weather_div">
<?php
if(isset($_COOKIE['userid'])){
	
					 
					 $time = time();
					 echo date("Y-m-d",$time);
					 echo "<br/>";
                    echo "welcome ".$_COOKIE['userid'];
					 echo "<br/>";
					 echo '<a href="doAction.php?act=logout" class="color">注销</a>';
}elseif(isset($_SESSION['userid'])){
                   
					 echo "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ";
					
					 $time = time();
					 echo date("Y-m-d",$time);
					 echo "<br/>";
					 echo "welcome ".$_SESSION['userid'];
					
							
                }
else{
	echo '
<a href="register.php" class="color">注册</a>
<a href="login.php" class="color">登陆</a>';
}
?>
</div>
<form action="#" onSubmit="return false;">     
        <dd class="weather_search_v form_val" id="weather_search">
            <input name="city" type="text" />
        </dd>
        <dd  class="common_front weather_conn form_sub" id="weather_sub">
            <input name="call" type="button" value="查询" title="查询天气预报" />
        </dd>       
        <dd class="weather_author" id="weather_author"></dd>
    </dl>
</form>


<div class="weather_res_case common_hide" id="weather_res_case" style="display:none;">
    <dl class="weather_res_item weather_res_stoday">
        <dd><b id="city"></b></dd>
        <dd>实时气温:<span id="temperature"></span></dd>
        <dd>天气情况:<span id="weather"></span></dd>
        <dd>风向情况:<span id="direction"></span></dd>
        <dd>风力情况:<span id="wind"></span></dd>
    </dl>
    <dl class="weather_res_item weather_res_today">
        <dd class="weather_res_dis_img" id="T_weather_img"></dd>
        <dd>
            <h2>今天</h2>
        </dd>
        <dd>天气情况:<span id="T_weather"></span></dd>
        <dd>气温:<span id="T_temperature"></span></dd>
        <dd>风向:<span id="T_direction"></span></dd>
    </dl>
    <dl class="weather_res_item weather_res_tmw">
        <dd class="weather_res_dis_img" id="M_weather_img"></dd>
        <dd>
            <h2>明天</h2>
        </dd>
        <dd>天气情况:<span id="M_weather"></span></dd>
        <dd>气温:<span id="M_temperature"></span></dd>
        <dd>风向:<span id="M_direction"></span></dd>
    </dl>
    <dl class="weather_res_item weather_res_aftmw">
        <dd class="weather_res_dis_img"  id="L_weather_img"></dd>
        <dd>
            <h2>后天</h2>
        </dd>
        <dd>天气情况:<span id="L_weather"></span></dd>
        <dd>气温:<span id="L_temperature"></span></dd>
        <dd>风向:<span id="L_direction"></span></dd>
    </dl>
    <div class="clear_debug"></div>
</div>
<div class="clear_13"></div>

<script type="text/javascript">

var weather_=new weather();


weather_.getStyle('qq');


def_value('weather_search','请输入要查询的城市天气');


onEvent.onEvent();




</script>
</body>
</html>