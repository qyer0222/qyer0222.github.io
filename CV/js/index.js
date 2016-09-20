(function(window){
	var onoff;
	var ons;
	function init(){
		onff = true;
		$('#header ul a').mouseover(function(){
			console.log(onff)
			if(!onff){
				return
			}
			onoff = false;
			var disx = $(this).innerWidth()
			var disx = $(this).innerWidth();//找到当前a标签的宽度
			var divs = $(this).next()[0];//找到变长的div
			mTween(divs,'width',disx,200,'linear',function(){
				onoff = true;
			});
			/*var divs = $(this).next();
			divs.stop().animate({
				width:disx
			},200)*/
			
		}).mouseout(function(){
			var divs = $(this).next()[0];//找到变长的div
			mTween(divs,'width',30,200,'linear');
			/*var divs = $(this).next();
			divs.animate({
				width:30
			},200)*/
		})
		
		$('#dotted').mousedown(function(ev){
			$(document).mousemove(function(ev){
				var x = ev.clientX;
				var backwidth = window.innerWidth;
				$('#dotted').css('left',x);
				$('.photo_2').css({
					width:(backwidth-x),
					background:'#323232'
				});
				
				return false;//阻止图片默认行为
			}).mouseup(function(){
				var backwidth = window.innerWidth/2;
				$(this).off('mouseup mousemove');
				/*mTween($('.photo_2')[0],'width',backwidth,500,'linear');
				mTween($('#dotted')[0],'left',backwidth,500,'linear');*/
				$('.photo_2').animate({
					width:backwidth
				},function(){
					$('.photo_2').css({
						background:'#667177',
					})
				})
				$('#dotted').animate({
					left:backwidth
				})
			});
		});
		$('.footer_logo_1 i').click(function(){
				$('#dotted').css('display','none');//大圆
				$('.footer_logo_2 b').css('display','block');	//白色X	
				$('.footer_logo_1').css('display','none');	//下方的footer里面的内容
				$('#footer_open').css('display','block');	//替换的footer
				$('.thanks_1').css('display','none');
		});
		$('.footer_logo_2 b').click(function(){
			$('.footer_logo_2 b').css('display','block');
			$('#dotted').css('display','block');
			$('.footer_logo_1').css('display','block');	
			$('#footer_open').css('display','none');	
		})
	}
	window.init = init;
})(window)
