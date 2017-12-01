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
				cookie.addCookie(key,'value',-1);
			}
		};
	return {
		jianhu:(function(){
					//页面刚进入载入缓存购物车
				if(cookie.getCookie('cartsid') && cookie.getCookie('cartnum')){
					var s=cookie.getCookie('cartsid').split(',');
					var n=cookie.getCookie('cartnum').split(',');
					console.log(s,n)
					for(var i=0;i<s.length;i++){
						createcart(s[i],n[i]);
					}
				}
               var $castli=$(".cast-tab-l").find(".cast-li");
			   var sidarr=[];
               var numarr=[];

				function cookieToArray(){
					if(cookie.getCookie('cartsid')){
						sidarr=cookie.getCookie('cartsid').split(',');
					}else{
						sidarr=[];
					}
					
					if(cookie.getCookie('cartnum')){
						numarr=cookie.getCookie('cartnum').split(',');
					}else{
						numarr=[];
					}
				}
				

				$castli.on('click',function(e){
					if($(e.target).attr("class")=="btn"){
					var $sid=$(e.target).parent("li").find("p").find("img").attr("sid");
					var $price=$(e.target).parent("li").find("span").text();
					cookieToArray();
					if($.inArray($sid,sidarr)!=-1){
						 $('.goodsli:visible').each(function(){
							if($sid==$(this).find('.goodsimg').find('img').attr('sid')){
								 var $num = $(this).find('.num').find('input').val();
				                $num++;
				                $(this).find('.num').find('input').val($num);
				                $price=$(this).find('.price').html();
				                var arr=$price.split("￥");
								$price=parseFloat(arr[1]);
				                $(this).find('.total').html(($price * $num).toFixed(2));
				                arrnum[$.inArray($sid, arrsid)] = $num;	
								cookie.addCookie('cartnum',numarr.toString(),7);
								totalprice();
							}
						});
					}else{
						sidarr.push($sid);
						cookie.addCookie('cartsid',sidarr.toString(),7);
						numarr.push(1);
						cookie.addCookie('cartnum',numarr.toString(),7);
						createcart($sid,1);
					}
				}
				})

				function createcart(sid,num){
						 $.ajax({
							url:"php/php.php",
							dataType:'json'
						 }).done(function(data){
						 for(var i=0;i<15;i++){
						  if(sid==data.lunbo[i].sid){
							var $sid=data.lunbo[i].sid;
					        var $price=data.lunbo[i].price;
					        var $url=data.lunbo[i].url;
			            	var $title=data.lunbo[i].title
							var $clone=$(".goodsli:hidden").clone(true);
							$clone.find('.goodsimg').find('img').attr('src',$url);
							$clone.find(".choose").find('input').prop('checked', true);
			                $clone.find('.goodsimg').find('img').attr('sid',sid);
			                $clone.find('.goodsinfo').find('a').html($title);
			                $clone.find('.price').html($price);
				   			$clone.find('.num').find('input').val(num);
							var arr=$price.split("￥");
							$price=parseFloat(arr[1]);
			                $clone.find('.total').html(($price * num).toFixed(2));
							$clone.css({
								display:"block"
							});
							$clone.appendTo(".shopli");		
							kong();
							totalprice();		
							}
				} 
				})
						 }
				kong();
				function kong(){
					if(cookie.getCookie('cartsid')){
						$(".castinfo").hide();
					}else{
						 $(".castinfo").show();
					}
				}
				
				totalprice();
				function totalprice(){
					var total=0;
					$('.goodsli:visible').each(function(){
						if($(this).find(".choose").find('input:checkbox').is(':checked')){
							var $price=$(this).find('.total').html();
							$price=parseFloat($price);
							total+=$price;
						}
					});
					console.log($('.totalprice').find(".tp-l").find("span"),total)
					$('.totalprice').find(".tp-l").find("span").html('￥'+total);
				}
				
				$(".remowhole a").on("click",function(){
					$('.goodsli:visible').remove();
					cookie.delCookie("cartnum");
					cookie.delCookie("cartsid");
				})

				function delgoodslist(sid,sidarray){
					var arr=[];
					for(var i=0;i<sidarray.length;i++){
						if(sid!=sidarray[i]){
							arr.push(sidarray[i]);
						}
					}
					numarr.splice(sidarray.indexOf(sid),1);
					console.log(sid,arr,sidarray)
					sidarr=arr;
					cookie.addCookie('cartsid',sidarr.toString(),7);
					cookie.addCookie('cartnum',numarr.toString(),7);
				}
				
				$('.goodsli').on('click', '.handle .remo', function(ev) {
					    cookieToArray();
					    $(this).parents('.goodsli').remove();
					    delgoodslist($(this).parents('.goodsli').find(".goodsimg").find('img').attr('sid'),sidarr);
					    totalprice();
					    
					});

					$('.shopli-t input').prop('checked', true);	
					$('.shopli-t input').on('change', function() {
						if($(this).prop('checked')){
						$('.goodsli:visible').find(".choose").find('input:checkbox').prop('checked',true);
						}else{
							$('.goodsli:visible').find(".choose").find('input:checkbox').prop('checked',false);
						}
						 $('.goodsli:visible').find(".choose").find('input').prop('checked', $(this).prop('checked'));
						totalprice();
						
						});
							
							
						var $inputchecked = $('.goodsli:visible').find(".choose").find('input');
						$('.shopli').on('change', $inputchecked, function() {
						    var $inputs = $('.goodsli:visible').find('input:checkbox'); 
						    if ($('.goodsli:visible').find(".choose").find('input:checked').length == $inputs.size()) {
						        $('.shopli-t input').prop('checked', true);
						    } else {
						        $('.shopli-t input').prop('checked', false);
						    }
						    totalprice();
						});

		
				$('.jia').on('click',function(){	
					var $count=$(this).parents('.num').find('input').val();
					$count++;
					if($count>=99){
						$count=99;
					}
					$(this).parents('.num').find('input').val($count);
					$(this).parents('.goodsli').find('.total').html(singlegoodsprice($(this)));
					totalprice();
					setcookie($(this));
				});
				
				
			
				$('.jian').on('click',function(){
					var $count=$(this).parents('.num').find('input').val();
					$count--;
					if($count<=1){
						$count=1;
					}
				    $(this).parents('.num').find('input').val($count);
					$(this).parents('.goodsli').find('.total').html(singlegoodsprice($(this)));
					totalprice();
					setcookie($(this));
				});
				
				$('.num input').on('input',function(){
					var $reg=/^\d+$/g;//只能输入数字
					var $value=parseInt($(this).val());
					if($reg.test($value)){
						if($value>=99){
							$(this).val(99);
						}else if($value<=0){
							$(this).val(1);
						}else{
							$(this).val($value);
						}
					}else{
						$(this).val(1);
					}
					$(this).parents('.goodsli').find('.total').find('span').html(singlegoodsprice($(this)));
					totalprice();
					setcookie($(this));
				});
				
			
				function singlegoodsprice(row){
					var $price=row.parents('.goodsli').find('.price').html();
					var arr=$price.split("￥");
				    $price=parseFloat(arr[1]);
					var $cnum=parseInt(row.parents('.num').find('input').val());
					console.log($price,$cnum)
					return ($price*$cnum).toFixed(2);
				}

			
				function setcookie(obj){
					cookieToArray();
					var $index=obj.parents('.goodsli').find(".goodsimg").find('img').attr('sid');
					console.log($index)
					numarr[sidarr.indexOf($index)]=obj.parents('.goodsli').find('.num input').val();
					cookie.addCookie('cartnum',numarr.toString(),7);
				}
	})(),
}
	})
