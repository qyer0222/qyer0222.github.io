//右侧页面生成文件夹功能，构造函数，第一个参数是ul
var createfiles = function(obj,btn_createEle,back,deletes,allcheck,replaces){
	this.files = obj;
	this.btn_create = btn_createEle;
	this.back = back;
	this.deletes = deletes;
	this.allcheck = allcheck;
	this.replaces = replaces;
	this.checkonOff = true;
	this.Create(getindex(0));//初始页面显示层级为0的层级
	this.Goback();
	this.Btn_create();//新建文件夹
	this.Selectmark();//选择
	this.Deletecheck();//删除文件夹
	this.Allchecked();//全选按钮
	this.Replaces();//删除按钮
};
//生成文件夹，通过改变date数据来操控页面显示的内容
createfiles.prototype.Create = function(date){
	this.files.innerHTML = '';
	for(var i=0;i<date.length;i++){
		var lis = document.createElement('li');
		lis.id = date[i].id;//绑定id
		lis.username = date[i].username;
		lis.type = date[i].type;
		lis.index = date[i].index;
		this.CLick(lis);
		lis.innerHTML = `<div>
							<i></i>
							<img src="img/${date[i].type}.png" />
						</div>
						<p>
							<input type="text" value="">
							<span>${date[i].username}</span>
							<em>
								<img src = "img/right.png">
							</em>
							<em>
								<img src = "img/error.png">
							</em>
						</p>`;	
		this.files.appendChild(lis);
	}
};
//点击进入文件夹,参数是点击的lis
createfiles.prototype.CLick = function(lis){

	var that = this;
	lis.onclick = function(){
		switch(this.type){
			case 'file':
			that.Create(getindex(this.id));
			goback = this.id;
			that.Selectmark();
			break;
			case 'txt':
			break;
			case 'html':
			break;
		}
		
	}
};
//返回键
createfiles.prototype.Goback = function(){
	var that = this;
	back.onclick = function(){
		var info = getid(goback);//获得返回的上一个对象
		if(!info){
			return
		}
		var index = info.index;
		goback = index;
		that.Create(getindex(goback));
		that.Selectmark();
	}
};

//新建文件夹
createfiles.prototype.Btn_create = function(){
	var that = this;
	btn_create.onclick = function(){
		var newdate ={
			id:date.length+1,
			username:'新建文件夹',
			type:'file',
			index:goback
		};
		date.push(newdate);
		that.Create(getindex(goback));
		that.Selectmark();
		that.checkonOff = true;
		allcheck.className = '';
	}
};

//点击i标签选择按钮
createfiles.prototype.Selectmark = function(){
	var  is = this.files.getElementsByTagName('i');
	var  divs = this.files.getElementsByTagName('div');
	var  that = this;
	//遍历i标签
	for(var i=0;i<is.length;i++){
		divs[i].index = i;//用自定义属性将div和i标签进行关联
		is[i].onOff = true;//控制开关
		//移入div
		divs[i].onmouseover = function(){
			//判断i的className，如果是点中状态，则依然是点中状态，注意这里移入移除都会触发divs【i】.ommouseover
			//这个事件，主要原因还是事件冒泡的原因，但是如果阻止冒泡的话，当用户移入到i标签的时候可以阻止，移除以后仍然会触发这个事件，所以这里做了一个判断
			if(is[this.index].className=='activeout'){
				this.children[0].className  = 'activeout';
			}else{
				this.children[0].className  = 'active';
			}
			
			this.style.border = '2px solid #2e80dc';
		}
		//点击勾选按钮
		is[i].onclick = function(ev){
			if(this.onOff){
				this.className = 'activeout';//有对号
			}else{
				this.className  = 'active';//无对号有框
			}
			this.onOff = !this.onOff;
			ev.stopPropagation();//阻止冒泡
			//关联全选按钮
				for(var i=0;i<is.length;i++){
					if(is[i].onOff){
						that.checkonOff = true;
						allcheck.className = '';
						return
					}	

				}
			that.checkonOff = false;
			allcheck.className = 'active';
		}
		//移出div
		divs[i].onmouseout = function(ev){
			if(is[this.index].className=='activeout'){
				this.children[0].className  = 'activeout';//有对号
			}else{
				this.children[0].className  = '';//清空
				this.style.border = '';
			}
		}
		
	}
}
//删除按钮，删除的是数据，删除后需要重新刷新页面
createfiles.prototype.Deletecheck = function(){
	var  is = this.files.getElementsByTagName('i');
	var  lis = this.files.getElementsByTagName('li');
	var that = this;
	deletes.onclick = function(){
		if(is.length==0){
			return
		}
		for(var i=0;i<lis.length;i++){
			if(is[i].className=='activeout'){
				var values = getid(lis[i].id)
				for(var j=0;j<date.length;j++){
					if(date[j]==values){
						date[j]='';
					}
				}
			}
		}

		that.Create(getindex(goback));
		that.Selectmark();
		allcheck.className = '';
		that.checkonOff = true;
	}
}

//全选按钮

createfiles.prototype.Allchecked = function(){
	var that = this;
	var  divs = this.files.getElementsByTagName('div');
	var  is = this.files.getElementsByTagName('i');
	allcheck.onclick = function(){
		if(is.length==0){
			return
		}
		if(that.checkonOff){
			this.className = 'active';
			for(var i=0;i<is.length;i++){
				divs[i].style.border = '2px solid #2e80dc';
				is[i].className = 'activeout';
				is[i].onOff = false;
			}
		}else{
			this.className = '';
			
			for(var i=0;i<is.length;i++){
				divs[i].style.border = '';
				is[i].className = '';
				is[i].onOff = true;
			}
		}
		that.checkonOff = !that.checkonOff
	}
}
//重命名按钮
createfiles.prototype.Replaces = function(){
	var  is = this.files.getElementsByTagName('i');
	var that = this;
	replaces.onclick = function(){
		var arr = [];
		for(var i=0;i<is.length;i++){
			if(is[i].className == 'activeout'){
				arr.push(is[i]);//存储进数组
			}
		}
		clearrepeat(arr);//数组去重
		if(arr.length>1||arr.length==0){
			return;
		}else{
			var p = arr[0].parentNode.nextElementSibling;
			p.children[1].className = 'hidden';
			p.children[2].className = 'show';
			p.children[3].className = 'show';
			p.children[0].className = 'show';
			p.children[0].value = p.children[1].innerHTML;
			p.children[0].select();
			p.children[0].onclick = function(ev){
				ev.stopPropagation();//阻止冒泡
			}
			p.children[2].onclick = function(ev){
				console.log(this.value)
				p.children[1].innerHTML = p.children[0].value;
				p.children[1].className = 'show';
				p.children[2].className = 'hidden';
				p.children[3].className = 'hidden';
				p.children[0].className = 'hidden';
				arr[0].className  = '';//清空勾选状态
				arr[0].parentNode.style.border = '';
				arr[0].onOff = true;
				that.checkonOff = true;//关联全选按钮状态
				allcheck.className = '';
				ev.stopPropagation();//阻止冒泡
			}
			p.children[3].onclick = function(ev){
				p.children[1].className = 'show';
				p.children[2].className = 'hidden';
				p.children[3].className = 'hidden';
				p.children[0].className = 'hidden';
				arr[0].className  = '';//清空
				arr[0].parentNode.style.border = '';
				arr[0].onOff = true;
				that.checkonOff = true;
				allcheck.className = '';
				ev.stopPropagation();//阻止冒泡
			}
		}
		
	}	
}