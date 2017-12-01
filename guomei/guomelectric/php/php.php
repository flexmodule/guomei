<?php
    require "public.php";
    $query1 = "SELECT * FROM cast";
    $result1 = mysql_query($query1);
    $arr1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$arr1[$i]=mysql_fetch_array($result1 , MYSQL_ASSOC);
	}
	$query2 = "SELECT * FROM lunbo";
    $result2 = mysql_query($query2);
    $arr2=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$arr2[$i]=mysql_fetch_array($result2 , MYSQL_ASSOC);
	}
	
	$topicquery="SELECT * FROM louti";
	$topicresult = mysql_query($topicquery);
	$topicarr=array();
	for($i=0;$i<mysql_num_rows($topicresult);$i++){
		$topicarr[$i]=mysql_fetch_array($topicresult , MYSQL_ASSOC);
	}
	$ulfirstquery="SELECT * FROM louti where sid > 5";
	$ulfirstresult = mysql_query($ulfirstquery);
	$ulfirstarr=array();
	for($i=0;$i<mysql_num_rows($ulfirstresult);$i++){
		$ulfirstarr[$i]=mysql_fetch_array($ulfirstresult , MYSQL_ASSOC);
	}
	$lifirstquery="SELECT * FROM louti where sid > 5";
	$lifirstresult = mysql_query($lifirstquery);
	$lifirstarr=array();
	for($i=0;$i<mysql_num_rows($lifirstresult);$i++){
		$lifirstarr[$i]=mysql_fetch_array($lifirstresult , MYSQL_ASSOC);
	}
	$mobilequery="SELECT * FROM mobile";
	$mobileresult = mysql_query($mobilequery);
	$mobilearr=array();
	for($i=0;$i<mysql_num_rows($mobileresult);$i++){
		$mobilearr[$i]=mysql_fetch_array($mobileresult , MYSQL_ASSOC);
	}
	$livelquery="SELECT * FROM live where sid < 4";
	$livelresult = mysql_query($livelquery);
	$livelarr=array();
	for($i=0;$i<mysql_num_rows($livelresult);$i++){
		$livelarr[$i]=mysql_fetch_array($livelresult , MYSQL_ASSOC);
	}
	$liverquery="SELECT * FROM live where sid > 3";
	$liverresult = mysql_query($liverquery);
	$liverarr=array();
	for($i=0;$i<mysql_num_rows($liverresult);$i++){
		$liverarr[$i]=mysql_fetch_array($liverresult , MYSQL_ASSOC);
	}
	$picquery="SELECT * FROM goods";
	$picresult = mysql_query($picquery);
	$picarr=array();
	for($i=0;$i<mysql_num_rows($picresult);$i++){
		$picarr[$i]=mysql_fetch_array($picresult , MYSQL_ASSOC);
	}
	class Guomei{
		
	};
	$gm=new Guomei();
	$gm->cast=$arr1;
	$gm->lunbo=$arr2;
	$gm->topic=$topicarr;
	$gm->ulfirst=$ulfirstarr;
	$gm->lifirst=$lifirstarr;
	$gm->lis=$mobilearr;
	$gm->livel=$livelarr;
	$gm->liver=$liverarr;
	$gm->piclist=$picarr;
	echo json_encode($gm);
?>