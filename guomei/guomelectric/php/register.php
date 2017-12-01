<?php
   require "public.php";
	if(isset($_POST['name'])){
		$username=$_POST['name'];
	}else{
		exit('非法操作');
	}

	$query="select * from user where name='$username'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){
		echo true;//有重复
	}else{
		echo false;//没有重复
	}

    if(isset($_POST['sub']) && $_POST['sub']=="立即注册"){
		$user=$_POST['name'];
		$pass=md5($_POST['pass']);
		$insertquery="insert user(name,pass) values('$user','$pass')";
	    mysql_query($insertquery);
	}
	
        

?>