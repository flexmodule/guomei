define(['jquery'],function($){
	var cookie={
			 addCookie:function (key,value,day){
				var date=new Date();
				date.setDate(date.getDate()+day);
				document.cookie=key+'='+encodeURI(value)+';expires='+date;
			},
			  getCookie:function (key){
				var arr=decodeURI(document.cookie).split('; ');
				for(var i=0;i<arr.length;i++){
					var newarr=arr[i].split('=');
					if(newarr[0]==key){
						return newarr[1];
					}
				}
			},
			delCookie:function (key){
				cookie.setCookie(key,'value',-1);
			}
		};
	return {
		casttab:(function(){
			$.ajax({
				url:"php/php.php",
				dataType:'json'
				}).done(function(data){
					var castlihtml="";
					console.log(data.lunbo)
					for(var i=0;i<10;i++){
						castlihtml+="<li><p><a href='#'><img src='"+data.lunbo[i].url+"' sid='"+(i+1)+"'/></a></p><h3><a href='#'>"+data.lunbo[i].title+"</a></h3><span>"+data.lunbo[i].price+"</span><a href='javascript:;' class='btn'>加入购物车</a></li>"
					}
					var $castul=$(".cast-tab-l").find(".cast-li");
					$castul.html(castlihtml);
				
					//推荐列表轮播
					;(function(){
					var $index=0;
			        var $uli=$(".cast-tab-l").find(".cast-li");
			        var $left=$(".cast-tab-l").find(".cast-l");
			        var $right=$(".cast-tab-l").find(".cast-r");
			        var $oli=$(".cast-tab").find("ol li");
			        var $castpage=$(".cast-tab").find(".same-cast");
					function imgscroll(){
						$uli.stop(true,true).animate({
							left:900*$index
						},500);
					}
					
					$oli.hover(function(){
						$index=$(this).index();
						$(this).addClass("active").siblings("li").removeClass("active");
						$castpage.eq($index).css({
							display:"block"
						}).siblings(".same-cast").css({
							display:"none"
						})
					})
					$left.on("click",function(){
						if($index>-1){
							$index--;
							imgscroll();
						}
					})
					$right.on("click",function(){
						if($index<0){
						$index++;
						imgscroll();
						}
					})
					})();
				
					
					//detail页面
					
					 ;(function(){
					 	var $picul=$("#list").find(".goodimg");
					  $picul.each(function(index){
					  	console.log($(this))
					  	$(this).attr({
					  		src:data.piclist[index].url
					  	})
					  })
					  $("#spic").find("img").attr({
					  	src:data.piclist[6].url
					  })
					  $("#list").find("li").hover(function(){
					  	var $index=$(this).index()+5;
					  	$(this).addClass("active").siblings("li").removeClass("active");
					  	$("#spic").find("img").attr({
					  	src:data.piclist[$index].url
					  })
					  });
						$("#spic").hover(function(ev){
						   $("#sf").show();
						   $("#bf").show();
						   var spicurl=$("#spic").find("img").attr("src");
						   $("#bpic").attr({
						   	src:spicurl
						   })
							$("#sf").width(($("#spic").width())*($("#bf").width())/($("#bpic").width()));
			    			$("#sf").height(($("#spic").height())*($("#bf").height())/($("#bpic").height()));
			    		    var $scale=($("#bf").width())/($("#sf").width());
			    		    $(this).on("mousemove",function(ev){
			    		    var $x=ev.pageX-$("#spic").offset().left-($("#sf").width())/2;
			    			var $y=ev.pageY-$("#spic").offset().top-($("#sf").height())/2;
			    			if($x<0){
			    				$x=0;
			    			}else if($x>=$("#spic").width()-$("#sf").width()){
			    				$x=$("#spic").width()-$("#sf").width();
			    			}
			    			if($y<0){
			    				$y=0;
			    			}else if($y>=$("#spic").height()-$("#sf").height()){
			    				$y=$("#spic").height()-$("#sf").height();
			    			}
			    			$("#sf").css({
			    				left:$x,
			    				top:$y
			    			})
			    			$("#bpic").css({
			    				left:-$scale*$x,
			    				top:-$scale*$y
			    			})
			    		    })
						},function(){
							$("#sf").hide();
							$("#bf").hide();
						})
						
				
						var $num=5;
						if($num>($("#list ul li").length)){
							$("#right").css("color","#fff");
						}
						
					    $("#left").on("click",function(){
					    	if($num>5){
					    		$num--;
					    		if($num==5){
					    			$("#left").css("color","#fff");
					    		}
					    		$("#right").css("color","#333");
					    	}
					    	$("#list ul").animate({
					    		left:-($("#list ul li img").width())*($num-5)
					    	})
					    })
					    
					    $("#right").on("click",function(){
					    	if($num<($("#list ul li").length)){
					    		$num++;
					    		if($num==($("#list ul li").length-1)){
					    			$("#right").css("color","#fff");
					    		}
					    		$("#left").css("color","#333");
					    	}
					    	$("#list ul").animate({
					    		left:-($("#list ul li img").width())*($num-5)
					    	})
					    })
					})();
					  ;(function(){
					  	$(".spec").find("p").eq(3).find("i").on("click",function(){
					  		$(this).css({
					  			border:"1px solid red"
					  		})
					  	});
					  	$(".spec").find("p").eq(4).find("i").on("click",function(){
					  		$(this).css({
					  			border:"1px solid red"
					  		});
					  		$(".spec").find("p").eq(4).find("b").css({
					  			border:"1px solid rgba(0, 0, 0, 0.2)"
					  		})
					  	});
					  	$(".spec").find("p").eq(4).find("b").on("click",function(){
					  		$(this).css({
					  			border:"1px solid red"
					  		});
					  		$(".spec").find("p").eq(4).find("i").css({
					  			border:"1px solid rgba(0, 0, 0, 0.2)"
					  		})
					  	});
					  	$(".join").find(".num").find("i").find("span").eq(0).on("click",function(){
					  		var $nm=$(this).parents(".num").find("input").val();
					  		if($nm>=99){
					  			$nm=99;
					  		}else{
					  			$nm++;
					  		}
					  		$(this).parents(".num").find("input").val($nm);
					  	})
					  	$(".join").find(".num").find("i").find("span").eq(1).on("click",function(){
					  		var $nm=$(this).parents(".num").find("input").val();
					  		if($nm<=1){
					  			$nm=1;
					  		}else{
					  			$nm--;
					  		}
					  		$(this).parents(".num").find("input").val($nm);
					  	});
					  	if(window.location.pathname=="/guomelectric/details.html"){
					  	(function(){
					  	var $box1=$(".spec").find("p").eq(3).find("i").find("img");
					    var $box2=$(".shopping-car-tc").find("em");
						var current={
							cx:$box1.offset().left,
							cy:$box1.offset().top
						}
						var a=0.0014;
						var target={
							x:$box2.offset().left-current.cx,
							y:$box2.offset().top-current.cy
						}
						var b=(target.y-a*Math.pow(target.x,2))/target.x;
						var x=0;
						function move(obj){
						var $num1=$(".join").find(".num").find("input").val();
						var $num2=$(".shopping-car-tc").find("em").find("i").html();
						var $totalnum=parseInt($num1)+parseInt($num2);
						var timer=setInterval(function(){
							x+=10;
							obj.css({
								left:x
							})
							obj.css({
								top:a*Math.pow(x,2)+b*x
							})
							if(x>=target.x-20){
								obj.remove();
								x=0;
								$box2.find("i").html($totalnum);
								clearInterval(timer);
							}	
						},20)
						return false;
						}
						
						
							$("#joincast").on("click",function(){
						    var newNode=$box1.clone(true);
							newNode.css({position:"absolute",width:40,height:40,left:0,top:0})
							newNode.appendTo($(".spec").find("p").eq(3).find("i"))
							move(newNode);
							$totalnum=parseInt($box2.find("i").html());
							$nm=$(this).parents(".join").find(".num").find("input").val();
					  		cookie.addCookie('cartnum',$totalnum,7);
					  		cookie.addCookie('cartsid',12,7);
							})
					 })();
					  	}
					  	
					  })();
				})
		})(),
		
		
		 
	}
})