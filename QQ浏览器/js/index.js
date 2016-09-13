(function(window){
	var num;
	var adds;
	var onOff;
	function int(){
		num = 0;
		adds = 10;
		onOff = true;
		mScroll(document,function(){
			console.log('向上滚动');
			//控制多次滚动
			if(!onOff){
				return;
			}
			onOff = false;
			//当num<0，就表示无法再往上滚动了
			if(num<=0){
				onOff = true;
				return;
			}else{
				var pag = '#page'+num;//当前页数，向上翻会优先隐藏pag
				num--;
				var pages = '#page'+num;//上一页，向上翻会优先显示pages
				$('#scroll div').removeClass('bright')[num].className = 'bright';//清除圆点，并给当前圆点加样式
				$(pages)[0].className = 'show';
				$(pag)[0].className = 'hide';
				setTimeout(function(){onOff = true},600)//延迟执行
			}
		},function(){
			console.log('向下滚动');
			if(!onOff){
				return;
			}
			onOff = false;
			if(num>=3){
				num = -1;
			}
			//当页面到最后一页再次向下翻转会回到第一页
			if(num==-1){
				var pag = '#page'+(num+4);
			}else{
				var pag = '#page'+num;
			}
			num++;
			var pages = '#page'+num;
			$('#scroll div').removeClass('bright')[num].className = 'bright';
			$(pages)[0].className = 'show';
			$(pag)[0].className = 'hide';
			setTimeout(function(){onOff = true},600)
		});
//		Create();
	}
	
//	function Create(){
//		
//		var divs = document.createElement('div');
//		var str = divs.style.width = 100*Math.random()+'px';
//		divs.style.height =str;
//		
//		setInterval(function(){
//			adds ++;
//			divs.style.left = adds*1.1+'px';
//			divs.style.top = adds*1.1+'px';
//		},300)
//		$('#football')[0].appendChild(divs);
//	}
	
//	创建滚动函数,并解决兼容性问题
	function mScroll(obj,upper,down){
		obj.addEventListener('DOMMouseScroll', fn, false);
		obj.onmousewheel  = fn;

		function fn(ev){
			var n;
			/*
				负数代表向下
				正数是向上
				n就是这个数字
			*/
			if(ev.detail){
				//firefox
				n = -ev.detail;
			}else{
				//ie和chrome
				n = ev.wheelDelta;
			}
			//n小于0向下滚动，否则向上。
			if(n<0){
				down();
			}else{
				upper();
			}
		}
	}

	window.int = int;
})(window)
