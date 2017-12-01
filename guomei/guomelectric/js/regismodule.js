define(['jquery'],function($){
	var cookie={
			 setcookie:function (key,value,day){
				var date=new Date();
				date.setDate(date.getDate()+day);
				document.cookie=key+'='+encodeURI(value)+';expires='+date;
			},
			  getcookie:function (key){
				var arr=decodeURI(document.cookie).split('; ');
				for(var i=0;i<arr.length;i++){
					var newarr=arr[i].split('=');
					if(newarr[0]==key){
						return newarr[1];
					}
				}
			},
			delcookie:function (key){
				cookie.setcookie(key,'value',-1);
			}
		};
	return {
		 regis:(function(){
		 	var $str="abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"1234567890";
			var $oStr2=$("#yanzheng");
			var $oChange=$("#change");
			function test(){
				var $strCode="";
				while($strCode.length<4){
					var n=Math.round(Math.random()*61+0);
					if($strCode.indexOf($str[n])===-1){
						$strCode+=$str[n];
					}
					else{
						continue;
					}
			}
			$oStr2.html($strCode)
			}
			test();
	        $oChange.on("click",function(){
	        	test();
	        })
		 })(),
		 judge:(function(){
		 	$(".username").on("focus",function(){
		 		$(".usna").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("4-20个字符，支持汉字、字母、数字及“-”、“_”组合");
		 	})
		 	$(".username").on("blur",function(){
		 		var $reg1=/^([\u4e00-\u9fa5]|[\w\-]){4,20}$/;
		 		var $name=$(this).val();
		 		if($(this).val()==""){
		 			$(".usna").css({
		 			border:"1px solid red"
		 		}).text("请输入用户名");
		 		}else{
		 			if($reg1.test($(this).val())){
		 			 $.ajax({
					        type:'post',
						     url:'php/register.php',
							 data:{
								name:$name
								}
							 }).done(function(data){
							 	console.log(data)
									if(data){
										$(".usna").css({
							 			border:"1px solid red"
							 		    }).text("用户名已经存在");
									}else{
										$(".usna").css({
							 			border:"1px solid green"
							 		    }).text("√");
									}
								}).fail(function(){
									alert(e);
								})
						}else{
						    $(".usna").css({
				 			border:"1px solid red"
				 		    }).text("格式不正确");
						}
			     }
		 		})
		 	$(".passw").on("focus",function(){
		 		$(".pw").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("6-20个字符，建议由字母、数字与符号两种以上组成");
		 	})
		 	$(".passw").on("blur",function(){
		 		$(".sec").hide();
		 		var $passvalue=$(this).val();
		 		var $reg2=/^.{6,20}$/;
		 		if($(this).val()==""){
		 			$(".pw").css({
		 			border:"1px solid red"
		 		}).text("请输入密码");
		 		}else{
		 			if($reg2.test($passvalue)){
		 				var $j=0;
		 				for(var $i=0;$i<$passvalue.length;$i++){
		 					if($passvalue.charAt(0)==$passvalue.charAt($i)){
		 						$j++;
		 					}
		 				}
		 				if($j==$passvalue.length){
		 					$(".pw").css({
			 			border:"1px solid green"
			 		    }).text("不能为同一字符");
		 				}else{
		 					$(".pw").css({
			 			border:"1px solid green"
			 		    }).text("√");
		 				}	
		 			}else{
		 				$(".pw").css({
			 			border:"1px solid red"
			 		    }).text("密码格式不正确");
		 			}
		 		}
		 	});
		 	$(".passw").on("input",function(){
		 		var $passvalue=$(this).val();
		 		var $oi=$(".sec").find("i");
		 		var $arr=[];
		 		if($passvalue.length==0){
		 			$oi.css({
		 				background:"#333"
		 			})
		 		}else{
		 			$(".sec").show();
		 			for(var $i=0;$i<$passvalue.length;$i++){
		 			if($passvalue.charAt(0)!=$passvalue.charAt($i)){
		 			$arr.push($passvalue.charAt($i));
		 		   }
		 		}
		 		if($arr.length==1){
		 			$oi.eq(0).css({
		 				background:"red"
		 			}).siblings("i").css({
		 				background:"#333"
		 			})
		 		}else if($arr.length==2){
		 			$oi.eq(1).css({
		 				background:"red"
		 			}).siblings("i").css({
		 				background:"#333"
		 			})
		 		}else if($arr.length>=3){
		 			$oi.eq(2).css({
		 				background:"red"
		 			}).siblings("i").css({
		 				background:"#333"
		 			})
		 		}
		 		}
		 	});
		 	$(".sure").on("focus",function(){
		 		$(".su").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("请再次输入密码");
		 	})
		 	$(".sure").on("blur",function(){
		 		var $sure=$(".sure").val();
		 		if($(".passw").val()==$sure){
		 			$(".su").css({
			 			border:"1px solid green"
			 		    }).text("√");
		 		}else{
		 			if($sure==""){
		 				$(".su").css({
		 			border:"1px solid red"
		 		}).text("请输入密码,密码不能为空");
		 			}else{
		 				$(".su").css({
		 			border:"1px solid red"
		 		}).text("两次密码不一致");
		 			}
		 		}
		 		
		 	});
		 	$(".cellnum").on("focus",function(){
		 		$(".cn").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("请输入13或14或15或18开头的11位手机号");
		 	});
		 	$(".cellnum").on("blur",function(){
		 		var $pattern=/^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		 		var $cellvalue=$(this).val();
		 		if($cellvalue==""){
		 			$(".cn").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("请输入手机号");
		 		}else{
		 			if($pattern.test($cellvalue)){
		 			$(".cn").css({
		 			border:"1px solid green"
		 		}).text("√");
		 		}else{
		 			$(".cn").css({
		 			border:"1px solid red"
		 		}).text("请输入正确格式的手机号");
		 		}
		 		}
		 	});
		 	$(".txtte").on("focus",function(){
		 		$(".yz").css({
		 			border:"1px solid #a5a5a5"
		 		}).text("请输入验证码");
		 	})
		 	$(".txtte").on("blur",function(){
		 		var $yzvalue=$(this).val();
		        var $yanzheng=$("#yanzheng").text();
		 		if($yzvalue==""){
		 			$(".yz").css({
		 			border:"1px solid red"
		 		}).text("请输入验证码,不能为空");
		 		}else{
		 			if($yzvalue==$yanzheng){
		 				$(".yz").css({
		 			border:"1px solid green"
		 		  }).text("√");
		 			}else{
		 				$(".yz").css({
		 			border:"1px solid red"
		 		}).text("验证码错误，请重新输入");
		 			}
		 		}
		 	});
		 	$(".sub").on("click",function(){
		 		var $uservalue=$(".usna").text();
		 		var $passvalue=$(".pw").text();
		 		var $suvalue=$(".su").text();
		 		var $cnvalue=$(".cn").text();
		 		var $yzvalue=$(".yz").text();
		 		var $username=$(".username").val();
		 		var $password=$(".passw").val();
		 		var $subvalue=$(this).val();
		 		if($uservalue=="√"&&$passvalue=="√"&&$suvalue=="√"&&$cnvalue=="√"&&$yzvalue=="√"){
		 			$(".sm").text("注册成功，2秒后跳转登录页面");
		 			var $timer=setTimeout(function(){
		 				window.location.href="login.html";
		 			},2000)
		 		}
		 		
		 		$.ajax({
		 			type:"post",
		 			url:"php/register.php",
		 			data:{
		 				name:$username,
		 				pass:$password,
		 				sub:$subvalue
		 			},
		 			async:true
		 		}).done(function(d){
		 			console.log(d)
		 		});
		 		
		 	})
		 	
		 })(),
		 
		 login:(function(){
		 	
		 	var $bstop=1;
		 	$(".login-lb-t").find("i").on("click",function(){
		 		if($bstop==1){
		 			$(".login-lb-b").show();
		 			$(this).css({
		 			backgroundPosition:"0 -25px"
		 		})
		 			$bstop=0;
		 		}else{
		 			$(".login-lb-b").hide();
		 			$(this).css({
		 			backgroundPosition:"0 0"
		 		})
		 			$bstop=1;
		 		}
		 	})
		 	
		 	$("#login .title-l").on("click",function(){
		 		$(this).addClass("active").siblings("div").removeClass("active");
		 		$(".login-l").show();
		 		$(".login-r").hide();
		 	})
		 	$("#login .title-r").on("click",function(){
		 		$(this).addClass("active").siblings("div").removeClass("active");
		 		$(".login-r").show();
		 		$(".login-l").hide();
		 	});
		 	
		 	$(".denglu").on("click",function(){
		 		var $zhanghu=$(".zhanghu").val();
		 		var $mima=$(".mima").val();
		 		$.ajax({
		 			type:"post",
		 			url:"php/login.php",
		 			async:true,
		 			data:{
		 				name:$zhanghu,
		 				pass:$mima
		 			}
		 		}).done(function(data){
		 			if(data){
		 				cookie.setcookie('username',$zhanghu,7);
		 				$(".denglu").val("正在登录，2秒后跳转首页");
		 				setTimeout(function(){
		 				window.location.href="index.html";
		 			},2000); 
		 			var $zhname=cookie.getcookie('username');
				    $("#header-l").find("li").eq(0).find(".member span").text($zhname);
				    console.log($("#header-l").find("li.li"))
					$("#header-l").find("li.li").eq(1).find("a").text("退出");
					$("#header-l").find("li.li").eq(2).find("a").text("");
		 			}else{
		 				$(".dlinfo").text("用户名和密码不匹配")
		 			}
		 		});
		 	});
		 	
		 	
		 })(),
		}
})