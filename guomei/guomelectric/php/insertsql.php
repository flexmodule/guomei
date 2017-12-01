<?php
require "public.php";
if(isset($_POST['sid'])&&isset($_POST['url'])&&isset($_POST['title'])&&isset($_POST['price'])){
    	 $sid=@$_POST['sid'];
		 $url=@$_POST['url'];
		 $title=@$_POST['title'];
		 $price=@$_POST['price'];
    }else{
    	exit('非法登录');
    }


    $query="select * from shopcar where sid= 11";
    $result=mysql_query($query);
    if(mysql_fetch_array($result)){
    	
        print_r(mysql_fetch_array($result,MYSQL_ASSOC));
    }else{
    	$insertquery = "INSERT INTO shopcar(sid,url,title,price) VALUES (".$sid.','.$url.','.$title.','.$price.")";
        mysql_query($insertquery);
    }
    

		
//  	$num=($castarr[$i]->num)+1;
//  	$numquery = 'UPDATE  shopcar  SET num='.$num.' WHERE id=1';
//  	mysql_query($numquery);

    	
    
 
?>
