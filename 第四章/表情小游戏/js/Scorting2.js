(function(window){
		var lis;
		var onff = true;
		var arrtext;
		var arr;
		var arrimg;
		var arrtext;
		var imgs;
	function int(lisEle,btnEle,psEle,imgEle){
		lis = lisEle;
		btn = btnEle;
		ps = psEle;
		imgs = imgEle;
		arrtext = [];//存文字
		arrimg = [];//存图片
		arr = [];//存数字
		//给数组内填入内容
		for(var i=0;i<lis.length;i++){
			arrtext.push(ps[i].innerHTML)
			arrimg.push(imgs[i].src)
			arr.push(ps[i].innerHTML.charAt(0)-1)//获取页面的数字，由于页面获取初始为1，所以要减1
		}
		btn[0].onclick = leftClick;
		btn[1].onclick = rightClick;
	}
	function leftClick(){
		if(onff){
			btn[0].innerHTML = '从小到大';
			//从小到大排序
			arr.sort(function(a,b){
				return b-a;
			})
			make();
			onff = false;
		}else{
			btn[0].innerHTML = '从大到小';
			//从大到小排序
			arr.sort(function(a,b){
				return a-b;
			})
			onff = true;
			make();
		}
	};
	//打乱顺序
	function rightClick(){
		arr.sort(function(){
			return Math.random()-0.5;
		})
		make();
	};
	//生成内容
	function make(){
		for(var i =0;i<lis.length;i++){
			imgs[i].src = arrimg[arr[i]];
			ps[i].innerHTML = arrtext[arr[i]];
		}
	}
window.int = int;	
})(window)
