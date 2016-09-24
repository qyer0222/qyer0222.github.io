(function(window){
	var all;
	var onff = true;
	function init(expansionEle,listEle,lisEle,BalloonEle,searchEle,replaceEle,spansEle,searchBtnEle,psEle,replayEle){
		expansion = expansionEle;
		list = listEle;
		lis = lisEle;
		Balloon = BalloonEle;
		expansion.onclick = click;
		search = searchEle;
		replace = replaceEle;
		spans = spansEle;
		searchBtn = searchBtnEle;
		ps = psEle;
		all = ps.innerHTML;//获取当前页面的内容
		replay = replayEle;
		lis[0].onclick = select1;
		lis[1].onclick = select2;
		spans[0].onclick = choose1;
		spans[1].onclick = choose2;
		searchBtn[1].onclick =searchclick;
		replay[2].onclick = replayclick;
	}
	//右上角展开按钮
	function click(){
		if(onff){
			list.style.display = 'block';
			onff = false;
		}else{
			list.style.display = 'none';
			onff = true;
		}
	}
	//右上角查找按钮
	function select1(){
		Balloon.style.display = 'block';
		search.style.display = 'block';
		replace.style.display = 'none';
		list.style.display = 'none';
		onff = true;
	}
	//右上角替换按钮
	function select2(){
		Balloon.style.display = 'block';
		replace.style.display = 'block';
		search.style.display = 'none';
		list.style.display = 'none';
		onff = true;
	}
	//绿色查找按钮
	function choose1(){
		search.style.display = 'block';
		replace.style.display = 'none';
	}
	//绿色替换按钮
	function choose2(){
		replace.style.display = 'block';
		search.style.display = 'none';
	}
	//查询
	function searchclick(){
		if(searchBtn[0].value==''){
			alert('不能为空');
			searchBtn[0].select();
			return;
		}
		var str = all.indexOf(searchBtn[0].value);
		if(str<0){
			alert('你查找的数字不存在');
			searchBtn[0].select();
			return;
		}
		var arr = all.split(searchBtn[0].value);
		var con = arr.join('<strong>'+searchBtn[0].value+'</strong>');
		ps.innerHTML = con;
	}
	//删除
	function replayclick(){
		var str = all.indexOf(replay[0].value); 
		if(str==-1){
			alert('你要删除的内容不存在');
			replay[0].select();
			return;

		}
		if(replay[0].value==''){
			alert('请输入要被替换的内容');
			replay[1].select();
			return;
		}
		if(replay[1].value==''){
			if(confirm('真的要删除吗')==true){
				var arr = all.split(replay[0].value);
				var con = arr.join('');//此时replay[1].value = '';
				replay[0].select();
			}else{
				replay[1].select();
				return;	
			}
		}
		var arr = all.split(replay[0].value);
		var con = arr.join(replay[1].value);
		ps.innerHTML = con;
		all = con;//修改all的内容
	}
	window.init = init;
})(window);