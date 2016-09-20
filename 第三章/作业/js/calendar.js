(function(window){
	var year,
		span,
		as;
	var len = 42;
	var nums = 0;
	function int(psEle,spanEle,everyDayEle,asEle){
		ps = psEle;
		span = spanEle;
		everyDay = everyDayEle;
		as = asEle;
		as[0].onclick = leftonclick;
		as[1].onclick = rightonclick;
		show();
		create();
//		
	}
	
	function show(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		ps.innerHTML = year+'年'+month+'月'+day+'日';
		console.log(nums)
	}
	function create(){
		var date = new Date();
		date.setMonth(date.getMonth()+nums);
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hours = date.getHours();
		var min = date.getMinutes();
		var s = date.getSeconds();
		span.innerHTML = year+'年'+month+'月';
		date.setDate(1);
		var week = date.getDay();
		if(week == 0){
			week = 7;
		}
		date.setDate(0);
		var prevnum = date.getDate();
		var prev = date.getDate()-week+1;
		var str = '';
		//生成上个月的div
		for(var i=prev;i<=prevnum;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		date.setMonth(date.getMonth()+2);
		date.setDate(0);
		var next = date.getDate();
		//生成本月的div如果和当前日期是同一个值则高亮
		for(var i=1;i<=next;i++){
			if(i==day){
				str += '<a href="javascript:;" class="active">'+i+'</a>';
			}else{
				str += '<a href="javascript:;">'+i+'</a>';
			}
		}
		var num = len-week-next;
		//生成下个月的div
		for(var i=1;i<=num;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		everyDay.innerHTML = str;
	}
	function leftonclick(){
		nums--;
		create();
	}
	function rightonclick(){
		nums++;
		create();
	}
	window.int = int;
})(window);
