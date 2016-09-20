(function(window){
		var lis;
		var onff = true;
		var arrtext;
		var arr;
	function int(lisEle,btnEle,psEle,ulsEle){
		lis = lisEle;
		btn = btnEle;
		ps = psEle;
		uls = ulsEle;
		arr = Array.from(lis);
		btn[0].onclick=leftClick;
		btn[1].onclick=rightClick;
	}
	function leftClick (){
		if(onff){
			btn[0].innerHTML = '从小到大';
			arr.sort(function(a,b){
				return $$('p',b)[0].innerHTML.charAt()-$$('p',a)[0].innerHTML.charAt();
			})
		}else{
			btn[0].innerHTML = '从大到小';
			arr.sort(function(a,b){
				return $$('p',a)[0].innerHTML.charAt()-$$('p',b)[0].innerHTML.charAt();
			})
		}
		onff = !onff;
		fn();
	}
	function rightClick(){
		var str = '';
		arr.sort(function(){
			return Math.random()-0.5;
		})
		fn();
	}
	function fn(){
		var str='';
		for(var i=0;i<lis.length;i++){
//			str += arr[i].outerHTML;
			str += '<li>'+arr[i].innerHTML+'</li>';	
			console.log(arr[i].innerHTML)
		}
		uls.innerHTML=str;
	}
window.int = int;	
})(window)
