
// JavaScript Document
$('.grey_Wrap').click(function(){
		$('.grey_Wrap').hide();
		$('.navSort_wrap,.back_wrap').addClass(' Anima_nav');
		$('.navSort_wrap,.back_wrap').removeClass('nav_left');
		});
	$('.nav_btn').click(function(){
		$('.grey_Wrap').show();
		
		$('.navSort_wrap,.back_wrap').addClass('nav_left');
		$('.navSort_wrap,.back_wrap').removeClass('Anima_nav');
		});
$(function(){
	
	//预约
	$('.state_inp,.tit i').bind("touchend",function(){
		$('.sel').toggle();
		});
	
	$('.radio_wrap .rad_opt').bind("touchend",function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		});
	
	$('.add_customer').bind("touchend",function(){
		$('.add_cusCon').show();
		$('.cusCon_wrap').show();
		
		})	;
	$('.add_cusCon .close').bind("touchend",function(){
		$('.add_cusCon').hide();
		$('.cusCon_wrap').hide();
		});	

	$('.same_state .rad_opt').bind('touchend',function(){
		if($(this).index()===0){
			$('.showTime2').hide();
			
				$('.showTime3').addClass('back');
				
			}else{
				$('.showTime2').show();
				}
		});
	
	$('.Reason').bind("touchend",function(){
		$('.Reason_tab').toggle();
		});
 //产品库
 	$('.ui-icon-search').bind('touchend',function(){
		$('.sear-wrap').toggle();
		});
	$('.download-icon').bind('touchend',function(){
		$('.download-list').toggle();
		});
	$('.goods-hot').eq(0).show();
	$('.goods-sort-path li').bind('touchend',function(){
		$(this).addClass('on');
		$(this).siblings('li').removeClass('on');
		var i=$(this).index();
		$('.goods-hot').eq(i).show();
		$('.goods-hot').eq(i).siblings('.goods-hot').hide();
		
		});
	//小秘书
	
	/*$('.Secrect_wrap table a').bind('touchend',function(){
		$('.warn_wrap').show();
		})	*/
	/*$('.warn_wrap .close,.ok').bind('touchend',function(){
		$('.warn_wrap').hide();
		})	*/
			
	});
	
	function anima(){
	var top1=$('.showTime1').offset().top;
	var top2=$('.showTime2').offset().top;
	var top3=$('.showTime3').offset().top;                      
	var height=$(window).height();

	if(top1<=height){
		$('.showTime1').addClass('back');
		}
	if(top2<=height){
		$('.showTime2').addClass('back');
		}
	if(top3<=height){
		$('.showTime3').addClass('back');
		}

	window.onscroll=function(){
	var top1=$('.showTime1').offset().top;
	var top2=$('.showTime2').offset().top;
	var top3=$('.showTime3').offset().top;
	var height=$(window).height();
	var scrollTop=$(window).scrollTop();
	if(top1-scrollTop<=height){
		$('.showTime1').addClass('back');
		}
	if(top2-scrollTop<=height){
		$('.showTime2').addClass('back');
		}
	
	if(top3-scrollTop<=height){
		$('.showTime3').addClass('back');
		}
	
		};
	
		$(" .control_wrap .rad_opt").bind('touchend',function(){
		if($(this).index()===0){
			if($(this).parent().hasClass('aa')){
			$('.fjxAdd').show();
			}
			if($(this).parent().hasClass('bb')){
			$('.takenAdd').show();
			}
			if($(this).parent().hasClass('cc')){
			$('.gdylAdd').show();
			}
			}else{
				if($(this).parent().hasClass('aa')){
				$('.fjxAdd').hide();
				}
				if($(this).parent().hasClass('bb')){
				$('.takenAdd').hide();
				}
				if($(this).parent().hasClass('cc')){
				$('.gdylAdd').hide();
				}
				}
		
		});
		
		}


	 	
		