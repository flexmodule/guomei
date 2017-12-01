define(['jquery'],function($){
	return {
		 castlist:(function(){
   	        var $banner=$("#banner-lunbo");
			var $shoppinglc=$("#shopping-lc");
			var $shoppingcc=$("#shopping-cc");
			var $financeul=$("#finance-ul");
			var $guesslike=$("#guess-like-ul");
			var $shoppingbc=$("#shopping-bc");
			var $guesslike=$("#guess-like-ul");
			var $hottopic=$(".topic-l-child");
			var $samestair=$(".samestair-ul");	
			var $livel=$(".live-service-l");
			var $liver=$(".live-service-r");
			$.ajax({
				url:"php/php.php",
				dataType:'json'
				}).done(function(data){
//					console.log(typeof d)
//					var data=$.parseJSON(d);
					console.log(data.ulfirst)
					var $bannerhtml="";
					for(var i=0;i<8;i++){
						$bannerhtml+="<li><a href='#'><img src='"+data.cast[i].url+"'/></a></li>"
					}
					$banner.html($bannerhtml);
					var $html1="";
					$html1="<div class='shopping-lc-l'><a href='#'><img src='"+data.cast[8].url+"'/></a></div>"+"<div class='shopping-lc-r'><p><a href='#'><img src='"+data.cast[9].url+"'/></a></p><p><a href='#'><img src='"+data.cast[10].url+"'/></a></p></div>";
				    $shoppinglc.html($html1);
				    var $html2="";
				    $html2="<div class='shopping-cc-l'><a href='#'><img src='"+data.cast[11].url+"'/></a></div>"+"<div class='shopping-cc-r'><p><a href='#'><img src='"+data.cast[12].url+"'/></a></p><p><a href'#'><img src='"+data.cast[13].url+"'/></a></p></div>";
					$shoppingcc.html($html2);
					var $html3="";
					$html3+="<div class='shopping-bc-l'><a href='#'><img src='"+data.cast[14].url+"'/></a><a href='#'><img src='"+data.cast[15].url+"'/></a></div><ul>";
					for(var i=16;i<23;i++){
						$html3+="<li><a href='#'><img src='"+data.cast[i].url+"'/></a></li>"
					}
					$html3+="</ul>";
					$shoppingbc.html($html3);
					var $finnancehtml="";
					for(var i=23;i<28;i++){
						$finnancehtml+="<li><a href='#'><img src='"+data.cast[i].url+"'/></a></li>"
					}
					$financeul.html($finnancehtml);
					var $guesslikehtml="";
					for(var i=0;i<3;i++){
						$guesslikehtml+="<ul index="+i+">";
						if(i==0){
							for(var j=0;j<6;j++){
							$guesslikehtml+="<li><a href='#'><img src='"+data.lunbo[j].url+"'/></a><a href='#'>"+data.lunbo[j].title+"</a><a href='#'>"+data.lunbo[j].price+"</a></li>";	
							}
						}else if(i==1){
							for(var j=6;j<12;j++){
							$guesslikehtml+="<li><a href='#'><img src='"+data.lunbo[j].url+"'/></a><a href='#'>"+data.lunbo[j].title+"</a><a href='#'>"+data.lunbo[j].price+"</a></li>";
						}
				    	}else if(i==2){
				    		for(var j=12;j<18;j++){
							$guesslikehtml+="<li><a href='#'><img src='"+data.lunbo[j].url+"'/></a><a href='#'>"+data.lunbo[j].title+"</a><a href='#'>"+data.lunbo[j].price+"</a></li>";
						}
				    	}
				    	$guesslikehtml+="</ul>";
					}
					$guesslike.html($guesslikehtml);
					var $hottopichtml="";
					for(var i=19;i<22;i++){
						$hottopichtml+="<li><div class='topicani'><a href'#'><img class='aniimg' src='"+data.lunbo[i].url+"'/></a></div><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><p><span>0</span><em>0</em></p></li>";
					}
					$hottopic.html($hottopichtml);
					var topicani1=`<div class='fashion' style='background:rgba(0,0,0,.2);width:0px;height:20px;border-radius:10px;text-align:center;color:#fff;display:none;position:absolute;left:0;top:0;z-index=-1;'>时髦精</div>`;
					$(".topicani").append(topicani1);
					$(".topic-l-child").find("li").hover(function(){
						$(this).find(".fashion").show().stop(true,true).animate({
						width:98
						})
					},function(){
						$(this).find(".fashion").hide().stop(true,true).animate({
						width:0
					})
					})
					
					var $samestairul="";
					for(var j=0;j<5;j++){
						$samestairul+="<ul indexid="+j+" class='bigul clear lunbo'>";
						if(j==0){
							for(var i=0;i<10;i++){
								$samestairul+="<li class='ulli'><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><a href='#'>"+data.lunbo[i].price+"</a></li>";						
						   }
						}else if(j==1){
							for(var i=10;i<20;i++){
								$samestairul+="<li class='ulli'><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><a href='#'>"+data.lunbo[i].price+"</a></li>";						
						   }
						}else if(j==2){
							for(var i=20;i<30;i++){
								$samestairul+="<li class='ulli'><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><a href='#'>"+data.lunbo[i].price+"</a></li>";						
						  }
						}else if(j==3){
							for(var i=30;i<40;i++){
								$samestairul+="<li class='ulli'><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><a href='#'>"+data.lunbo[i].price+"</a></li>";					
						  }
						}else if(j==4){
							for(var i=40;i<50;i++){
								$samestairul+="<li class='ulli'><a href='#'><img src='"+data.lunbo[i].url+"'/></a><a href='#'>"+data.lunbo[i].title+"</a><a href='#'>"+data.lunbo[i].price+"</a></li>";						
						  }
						}
						$samestairul+="</ul>";
					}
					$samestair.html($samestairul);
					var $ulfirst=$(".ul-first");
					var ulfirsthtml="";
					ulfirsthtml+="<ul class='ul-first clear lunbo'>";
					for(var i=0;i<7;i++){
						ulfirsthtml+="<li class='ulli'><a href='#'><img src='"+data.ulfirst[i].url+"'></a></li>";
					}
					ulfirsthtml+="</ul>";
					$(ulfirsthtml).prependTo($samestair);
					var $lite=$(".ul-first").find("li:first");
					var lifirsthtml="";
					lifirsthtml+="<div class='uldiv'><u><i class='ili active'></i><i class='ili'></i><i class='ili'></i></u><p id='li-left'></p><p id='li-right'></p><ul class='li-first'>";
					for(var i=0;i<3;i++){
						lifirsthtml+="<li class='bigli'><a href='#'><img class='bigimg' src='"+data.ulfirst[i].url+"'/></a></li>";
						}				
					lifirsthtml+="</ul></div>";
					$lite.html(lifirsthtml);
					var $mocate=$("#mocate");
					var mocatehtml="";
					for(var i=0;i<8;i++){
							mocatehtml+="<li><a href='#'><img src='"+data.lis[i].url+"'></a></li>"
						}
					$mocate.html(mocatehtml);
					var $lis=$(".li-first").find("li");
					console.log($lis)
					 $lis.each(function(){
						var lishtml="";
						lishtml+="<ul>";
						for(var i=0;i<6;i++){
							lishtml+="<li><a href='#'><img src='"+data.lis[i].url+"'></a></li>"
						}
						lishtml+="</ul>";
						$(this).prepend(lishtml);
					})
					 var livelhtml="";
					 livelhtml+="<ul>";
					 for(var i=0;i<3;i++){
					 	livelhtml+="<li><a href='#' class='licai-t'><i><p></p><span></span></i><img src='"+data.livel[i].url+"'></a></li>"
					 }
					 livelhtml+="</ul>";
					  $livel.html(livelhtml);
					  $livel.find("li:first").find(".licai-t").find("p").text("理财");
					  $livel.find("li:first").find(".licai-t").find("span").text("金融频道");
					  $livel.find("li:last").find(".licai-t").find("p").text("邀请好友");
					  $livel.find("li:last").find(".licai-t").find("span").text("10元理财现金任性送");
					   $livel.find("li").eq(1).find(".licai-t").find("p").text("理财新手");
					  $livel.find("li").eq(1).find(".licai-t").find("span").text("首投送20元理财现金");
					  var liverhtml="";
					 liverhtml+="<ul>";
					 for(var i=0;i<data.liver.length;i++){
					 	liverhtml+="<li class='lvxing'><a href='#' class='lvxing-b'><p><i></i><span></span></p><img src='"+data.liver[i].url+"'></a></li>"
					 }
					 liverhtml+="</ul>";
					 $liver.html(liverhtml);
					 var livelihtml=`<div class='li-b'>
					 <h6><a href='#'>美盈宝</a>/<a href='#'>定期</a>/<a href='#'>投金宝</a>/<a href='#'>保险理财</a>/<a href='#'>基金</a></h6>
					 <h5><a href='#'>首投送20元现金</a><a href='#'>10元理财现金任性送</a><br><a href='#'>添加虎妞送好礼</a></h5>
					 </div>`;
					  $livel.find("li").eq(0).find(".licai-t").append(livelihtml);
					  var livelihtml2=`<div class='li-b'>
					 <h6><a href='#'>机票</a>/<a href='#'>火车票</a>/<a href='#'>度假</a>/<a href='#'>教育</a>/<a href='#'>演出票</a></h6>
					 <h5><a href='#'>机票立选</a><a href='#'>优选酒店</a><a href='#'>日本签证</a><a href='#'>川藏线自驾游</a><br><a href='#'>话剧二维码杀手全场六折</a></h5>
					 </div>`;
					  $liver.find("li").eq(0).append(livelihtml2);
					  
					  
					 
					  
					  
					  
					  //banner轮播图
					  ;(function(){
					  	var $index=0;
				        var $qindex=0;
				        var $oli=$(".banner-c").find("ol li");
				        var $uli=$("#banner-lunbo").find("li");
				        var timer;
				        var $bstop=1;
				        var a=0;
						$oli.hover(function(){
							$index=$(this).index();
							if($index!=a){
								imgscroll();
							}
						},function(){
							a=$index;
							return false;
						})
						
						$(".banner-c").hover(function(){
							clearInterval(timer);
						},function(){
							timer=setInterval(function(){
							$("#banner-left").trigger("click")
						 },2000)
						})
						function imgscroll(){
							$oli.eq($index).addClass("active").siblings("li").removeClass("active");
							$uli.eq($index).stop(true,true).animate({
								opacity:1
							},500);
							$uli.eq($qindex).stop(true,true).animate({
								opacity:0
							},500);
							$qindex=$index;
						}
						$("#banner-left").on("click",function(){
							if($index>=$oli.length-1){
								$qindex=7;
								$index=0;
							}else{
								$index++;
							}
							imgscroll();
						})
						$("#banner-right").on("click",function(){
							if($index<=0){
								$qindex=0;
								$index=7;
							}else{
								$index--;
							}
							imgscroll();
						})
						timer=setInterval(function(){
							$("#banner-left").trigger("click")
						},2000)
					  })();
					  
					  //guesslike轮播图
					  ;(function(){
					  	var $index=0;
	                    var $qindex=0;
				        var $uli=$("#guess-like-ul").find("ul");
						function imgscroll(){
							$uli.eq($index).stop(true,true).animate({
								opacity:1
							},500);
							$uli.eq($qindex).stop(true,true).animate({
								opacity:0
							},500);
							$qindex=$index;
						}
						$("#like-left").on("click",function(){
							if($index>=2){
								$qindex=2;
								$index=0;
							}else{
								$index++;
							}
							imgscroll();
						})
						$("#like-right").on("click",function(){
							if($index<=0){
								$qindex=0;
								$index=2;
							}else{
								$index--;
							}
							imgscroll();
						})
		
					  })();
					   //楼梯轮播图
					      function lbfn(mainid){
					     	var $index=0;
					        var $qindex=0;
					        var $ms=$(mainid).find(".samestair-r");
					        var $oli=$(mainid).find(".samestair-r").find("ol li");
					        var $uli=$(mainid).find(".samestair-ul").find(".lunbo");
					        var $ma=$(mainid).find(".samestair-a");
							$oli.hover(function(){
							$index=$(this).index();
							imgscroll();
						    },function(){
							return false;
						   })
							$ms.hover(function(){
								$ma.show();
								return false;
							},function(){
								$ma.hide();
								return false;
							})
							function imgscroll(){
								$oli.eq($index).addClass("active").siblings("li").removeClass("active");
								$uli.eq($index).css({
									display:"block"
								})
								$uli.eq($qindex).css({
									display:"none"
								})
								
								$qindex=$index;
							}
							$ma.on("click",function(){
								if($index>=$oli.length-1){
									$qindex=$oli.length-1;
									$index=0;
								}else{
									$index++;
								}
								imgscroll();
							})
					   };
					   lbfn("#mobile");
					   lbfn("#computer");
					   lbfn("#house-electrical");
					   lbfn("#bath");
					   lbfn("#supermarket");
					   lbfn("#cloth");
					   lbfn("#house-live");
					   lbfn("#car");
					   lbfn("#overseas");
					
					    //楼梯轮播小图
					    (function(){
					    	var $index=0;
					        var $qindex=0;
					        var $uldiv=$("#mobile").find(".uldiv");
					        var $uli=$uldiv.find(".bigli");
					        var $oli=$uldiv.find("u i");
					        var timer;
					        var $b;
							$oli.hover(function(){
							$index=$(this).index();
							if($b!=$index){
								imgscroll();
							}
						},function(){
							$b=$index;
							return false;
						})
							$uldiv.hover(function(){
								clearInterval(timer);
								$("#li-left").show();
								$("#li-right").show();
							},function(){
								timer=setInterval(function(){
								$("#li-left").trigger("click")
							 },1000)
								$("#li-left").hide();
								$("#li-right").hide();
							})
							function imgscroll(){
								$oli.eq($index).addClass("active").siblings("i").removeClass("active");
								$uli.eq($index).stop(true,true).animate({
									opacity:1
								},500);
								$uli.eq($qindex).stop(true,true).animate({
									opacity:0
								},500);
								$qindex=$index;
							}
							$("#li-left").on("click",function(){
								if($index>=$oli.length-1){
									$qindex=2;
									$index=0;
								}else{
									$index++;
								}
								imgscroll();
							})
							$("#li-right").on("click",function(){
								if($index<=0){
									$qindex=0;
									$index=2;
								}else{
									$index--;
								}
								imgscroll();
							})
							timer=setInterval(function(){
								$("#li-left").trigger("click")
							},2000)
					    })()
					  
				})
			})(),
			headerul:(function(){
$("#header-l .li").hover(function(){
	$(this).find(".red").css({
			color:"red"
		})
	if($(this).index()==0){
		$(this).css("background","#fff")
		$("#user").show();
		$(this).find(".red").find("i").css("background-position","-55px -433px")
	}
},function(){
	$(this).find(".red").css({
			color:""
		})
	if($(this).index()==0){
		$(this).css("background","")
		$("#user").hide();
		$(this).find(".red").find("i").css("background-position","-62px -433px");
	}
})

$("#user-b").find(".redte").hover(function(){
	$(this).css({
		color:"red"
	})
},function(){
	$(this).css({
		color:""
	})
})
var $num=0;
$("#tequan-l").on("click",function(){
	if($num>0){
		$num--;
		$("#user-b").find("ul").animate({
		left:-$num*240
	})
	}
})
$("#tequan-r").on("click",function(){
	if($num<2){
		$num++;
		$("#user-b").find("ul").animate({
		left:-$num*240
	})
		console.log($num)
	}
})
$("#header-r li").hover(function(){
	$(this).find(".red").css({
			color:"red"
		})
	if($(this).index()==1||3||4||5){
		$(this).find("a").find("i").css("background-position","-55px -433px");
	}
},function(){
	$(this).find(".red").css({
			color:""
		})
	if($(this).index()==1||3||4||5){
		$(this).find(".red").find("i").css("background-position","-62px -433px");
	}
})	
})(),
headclose:(function(){
var $close=$("#headbanner .close");
	$close.on("click",function(){
	$("#headbanner").hide();
});
$close.hover(function(){
	$(this).css("background","rgba(0,0,0,.5)");
	$(this).find("i").css("background-position","-72px -466px")
},function(){
	$(this).css({
		background:""	
	});
	$(this).find("i").css("background-position","-60px -466px")
});
})(),
loutinav:(function(){
	if(window.location.pathname=="/guomelectric/index.html"){
	$(window).scroll(function(){
		//吸顶菜单
		$scrolltop=$(window).scrollTop();
		if($scrolltop>$("#shopping").offset().top){
		$("#search-input").css({
			position:"fixed",
			top:8,
			left:500,
			zIndex:10
		})
		$(".upmenu").show();
		$(".banner-l").css({
			position:"fixed",
			top:42,
			left:112,
			zIndex:10,
			display:"none"
		})
		$(".upmenu-l").hover(function(){
			$(".banner-l").show();
		},function(){
			$(".banner-l").hide();
		})
		$(".banner-l").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
	    }else{
	    	$("#search-input").css({
			position:"static",
		})
	    	$(".upmenu").hide();
	    	
	    	$(".banner-l").css({
			position:"static",
			display:"block"
		})
	    	$(".banner-l").hover(function(){
			$(".banner-l").show();
		},function(){
			$(".banner-l").show();
		})
	    }
	    //楼梯
		if($scrolltop>($("#mobile").offset().top)-($(window).height())){
			$("#loutinav").fadeIn(500);
		}else{
			$("#loutinav").fadeOut(500);
		}
		$("#loutinav").find("em").parent("li").each(function(){
			var $index=$(this).index()-1;
           if($scrolltop<($(".ltnav").eq($index).offset().top)+200){
           	$(this).addClass("loutiactive").siblings("li").removeClass("loutiactive");
           	$(this).find("em").show().parent("li").siblings("li").find("em").hide();
           	return false;
           }
		})
	})
   $("#loutinav").find("em").parent("li").on("click",function(){
    $(this).addClass("loutiactive").siblings("li").removeClass("loutiactive");
    $(this).find("em").show().parent("li").siblings("li").find("em").hide();
	var $index=$(this).index("li");
	var $index=$(this).index()-1;
 	var $top=$(".ltnav").eq($index).offset().top;
 	console.log($(".ltnav").eq(9).html())
	$("html,body").stop(true,true).animate({
		scrollTop:$top
	});
})
   $("#loutinav").find(".up").on("click",function(){
   	$("html,body").stop(true,true).animate({
		scrollTop:0
	});
   })
   $("#loutinav").find(".down").on("click",function(){
   	var $footscrolltop=$("#footer").offset().top;
   	$("html,body").stop(true,true).animate({
		scrollTop:$footscrolltop
	});
   })
   }
})(),
upmenu:(function(){	
if(window.location.pathname=="/guomelectric/index.html"){
if($(window).scrollTop()>$("#shopping").offset().top){
		$("#search-input").css({
			position:"fixed",
			top:8,
			left:500,
			zIndex:10
		})
		$(".upmenu").show();
		$(".banner-l").css({
			position:"fixed",
			top:42,
			left:112,
			zIndex:10,
			display:"none"
		})
		$(".upmenu-l").hover(function(){
			$(".banner-l").show();
		},function(){
			$(".banner-l").hide();
		})
		$(".banner-l").hover(function(){
			$(".banner-l").show();
		},function(){
			$(".banner-l").hide();
		})
	}else{
	    	$("#search-input").css({
			position:"static",
		})
	    	$(".upmenu").hide();
	    	$(".banner-l").css({
			position:"static",
			display:"block"
		})
	    	$(".banner-l").hover(function(){
			$(".banner-l").show();
		},function(){
			$(".banner-l").show();
		})
	    }
	}
})(),
cateblock:(function(){
	$("#kinds").find("li").hover(function(){
		var $index=$(this).index();
		$(this).css({
			background:"#fff"
		})
		$(this).find("a").css({
			color:"#333"
		})
		$(".cate").eq($index).show();
	},function(){
		var $index=$(this).index();
		$(this).css({
			background:"#333"
		})
		$(this).find("a").css({
			color:"#fff"
		})
		$(".cate").eq($index).hide();
	})
	
})()
	}
});