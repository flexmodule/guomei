<?php
    header('content-type:text/html;charset=utf-8');
   $conn=@mysql_connect('localhost','root','zh12345678');
	if(!$conn){
		die('数据库连接错误'.mysql_error());
	}

	mysql_select_db('guomei',$conn) or die ('选择数据库错误' . mysql_error());
	mysql_query('SET NAMES UTF8');
?>