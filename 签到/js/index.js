(function(window){
	var date, 
	year,
	month,
	d,
	hours,
	min,
	seconds,
	oldtime,
	nowdays;
	var onOff = false;
	function int(dataEle,divsEle,imgsEle,imgEle,creatdataEle, sing_nowEle,qiandao_proEle,closeEle,year_monthEle,mysignEle,my_sign_proEle, close2Ele){
		year_month= year_monthEle
		data = dataEle;//32个方块
		divs = divsEle;//时钟
		imgs = imgsEle;//分号
		img = imgEle;//图片
		creatdata = creatdataEle;//包裹日期的ul
		sing_now =  sing_nowEle;//立即签到
		qiandao_pro = qiandao_proEle;
		close = closeEle;
		mysign = mysignEle;
		my_sign_pro = my_sign_proEle;
		close2 =  close2Ele;
		date = new Date();//获取日期对象
		nowdays = date.getDate();
		d = date.getDate(); //当前日期号
		hours = date.getHours();//时
		min = date.getMinutes();//分
		seconds = date.getSeconds();//秒
		oldtime = gettime();//获取当前时分秒
		generate();//初始化生成
		showtime();//翻转
		create();
		sing_now.onclick = sign;
		close.onclick = closewindow;
		close2.onclick = closewindow;
		mysign.onclick = mysignwindow;
	}
	//获取当前时分秒
	function gettime(){
		var date = new Date();
		var hours = date.getHours();//时
		var min = date.getMinutes();//分
		var seconds = date.getSeconds();//秒
		var date = toTwo(hours)+toTwo(min)+toTwo(seconds);
		return date;
	}
	//补0
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}	
	//初始化生成当前时钟
	function generate(){
		for(var i=0;i<oldtime.length;i++){
			 divs[i].getElementsByTagName('img')[0].src = 'images/'+oldtime[i]+'.jpg';
		}
		//生成年月
		var date = new Date();//获取日期对象
		var year = date.getFullYear();//年
		var month = date.getMonth()+1;//月
		var d = date.getDate();
		year_month.innerHTML = toTwo(year)+'年'+toTwo(month)+'月'+d+'日';
	}
	//翻转
	function showtime(){
		setInterval(function(){
			imgs[0].src = 'images/colon.jpg';//出现
			imgs[1].src = 'images/colon.jpg';//出现
			setTimeout(function(){
				imgs[0].src = 'images/colon1.jpg';//消失
				imgs[1].src = 'images/colon1.jpg';//消失
			},500)
			//数字
			var newtime =gettime();
			//注意这里要避免for套for
			for(var i=0;i<oldtime.length;i++){
				 if(newtime[i]!=oldtime[i]){
					auto(i,newtime[i])
				}
			}
			//这里如果不及时更新时间，获取到的时间会不准确
			oldtime = newtime;
			function auto(i,newtime){
				mTween(divs[i],'top',21,400,'linear',function(){
					img[i].src = 'images/'+newtime+'.jpg';
					mTween(divs[i],'top',0,400,'linear');
					mTween(divs[i],'height',42,400,'linear')
				})
				mTween(divs[i],'height',0,400,'linear')
			}
		},1000)
	}
	//日期
	function create(){
		date.setDate(1);//设置当前为1号
		var day = date.getDay();//获取循环次数
		date.setDate(0);//上个月最后一天
		var premonth = date.getDate();//上个月有多少天
		var preday = premonth - day + 1;
		var str = '';
		//生成上个月的
		for(var i=0;i<day;i++){
			str+='<li class="old">'+preday+'</li>';
			preday++;
		}
		date.setDate(date.getDate()+1);//去本月的第一天
		date.setMonth(date.getMonth()+1);//去下个月
		date.setDate(0);
		var now = date.getDate()+1;//从1开始循环
		//生成这个月的
		for(var i=1;i<now;i++){
			if(i==nowdays){
				if(onOff==true){
					str+='<li class="ok">'+i+'</li>';
				}else{
					str+='<li class="active">'+i+'</li>';
				}	
			}else{
				str+='<li>'+i+'</li>';
			}
			
		}
		//下个月
		var nextday = 42-now-day+2;//下个月总数
		for(var i=1;i<nextday;i++){
			str+='<li class="new">'+i+'</li>';
		}
		creatdata.innerHTML = str;
	}
	//签到
	function sign(){
		if(onOff)return;
		onOff=true;
		create();
		qiandao_pro.style.display = 'block';
		sing_now.className = 'sing_now_ac';
	}
	//关闭弹出窗口
	function closewindow(){
		qiandao_pro.style.display = 'none';
		my_sign_pro.style.display = 'none';
		return false;//阻止默认关闭后，浏览器回滚
	}
	function mysignwindow(){
		my_sign_pro.style.display = 'block';
	}
	window.int = int;
})(window)
