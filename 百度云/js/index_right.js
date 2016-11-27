//右侧页面生成文件夹功能，构造函数，第一个参数是ul
var createfiles = function(obj,update,btn_createEle,back,deletes,allcheck,replaces,menus,box_con,menus_lis,menus_delete,menus_replace,update_file,update_wrap,update_bar,wrapSpan,menu_list,menu_picture,menu_doc,menu_video,menu_seed,menu_music,menu_other,recycle,bg,box,scroll,bar,photo,photoimg,out,usertext,canvas,videos,content){
	this.files = obj;
	this.btn_create = btn_createEle;
	this.back = back;
	this.deletes = deletes;
	this.allcheck = allcheck;
	this.replaces = replaces;
	this.menus_delete = menus_delete;
	this.menus_replace = menus_replace;
	this.menus_select = menus_select;
	this.update = update_file;
	this.update_bar = update_bar;
	this.update_wrap = update_wrap;
	this.wrapSpan = wrapSpan;
	this.menu_list = menu_list;
	this.menu_picture = menu_picture;
	this.menu_doc = menu_doc;
	this.menu_video = menu_video;
	this.menu_seed = menu_seed;
	this.menu_music = menu_music;
	this.menu_other = menu_other;
	this.photo = photo;
	this.bg = bg;
	this.box = box;
	this.scroll = scroll;
	this.bar = bar;
	this.content = content;
	this.recycle = recycle;
	this.photoimg = photoimg;
	this.usertext = usertext;
	this.canvas = canvas;
	this.videos = videos;
	this.out = out;
	this.checkonOff = true;
	this.createonOff = true;
	this.mark = 0;//控制上一个位置
	this.recording = [];//记录回收站数据
	this.Create(getindex(0));//初始页面显示层级为0的层级
	this.Goback();//返回按钮
	this.Btn_create();//新建文件夹
	this.Selectmark();//选择
	this.Deletecheck();//删除文件夹
	this.Allchecked();//全选按钮
	this.Replaces();//删除按钮
	this.menus = menus;//菜单
	this.box_con = box_con;//大框
	this.menus_lis = menus_lis;//菜单列表
	this.menus_render = menus_render;//右键新建文件夹
	this.Menus_Cre();//新建文件夹
	this.Show();//显示右键菜单
	this.Menus_delete();//右键删除菜单
	this.Menus_replace();//右键重命名菜单
	this.Menus_Select();//右键全选按钮
	this.update_file();//上传按钮
	this.Menu_list();//左侧全部文件按钮
	this.Menu_picture();//左侧全部图片按钮
	this.Menu_doc();//左侧全部文档
	this.Menu_video();//左侧全部视频
	this.Menu_seed();//种子
	this.Menu_music();//音乐
	this.Menu_other();//其他
	this.Recycle();//回收站
	this.Scroll();//滚动条
	this.Out();
	this.bigmark = '';
};
//生成文件夹，通过改变date数据来操控页面显示的内容
createfiles.prototype.Create = function(date){
	// var image = imgs||'';
	this.files.innerHTML = '';
	for(var i=0;i<date.length;i++){
		var lis = document.createElement('li');
		lis.id = date[i].id;//绑定id
		lis.username = date[i].username;
		lis.type = date[i].type;
		lis.index = date[i].index;
		lis.src = date[i].src;
		lis.usertype = date[i].usertype;
		lis.con = date[i].con;
		this.CLick(lis);
		// var src = `img/${date[i].type}.png`;
		lis.innerHTML = `<div>
							<i></i>
							 <img src=${date[i].src} />
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
	if(!this.files.children[0]){
		bg.style.display = 'block';
		box.style.display = 'none';
	}else{
		bg.style.display = '';
		box.style.display = 'block';
	}
	content.style.height = document.documentElement.clientHeight-48+'px';
	window.onresize = function(){
		content.style.height = document.documentElement.clientHeight-48+'px';
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
			photo.style.display = 'block';
			photoimg.src = '';
			// console.log(this,this.con,this.id.this.usertype)
			usertext.style.display = 'block';
			usertext.innerHTML = this.con;
			break;
			case 'mp3':
			 // that.song.start(0);
			 canvas.style.display = 'block';
			 photo.style.display = 'block';
			 photoimg.src = '';
			 that.bigmark = this;
			 that.bigmark.con.start(0);
			break;
			case 'jpeg':
			// var divs = document.createElement('div');
			// var Img = document.createElement('img');
			// Img.src = this.src;
			// divs.appendChild(Img)
			
			photo.style.display = 'block';
			photoimg.src = this.src;
			// usertext.style.display = 'none';
			break;
			case 'mp4':
			photo.style.display = 'block';
			videos.style.display = 'block';
			photoimg.src = '';
			videos.src = this.con;
			break;
		}
		
	}
};
//返回键
createfiles.prototype.Goback = function(){
	var bar = this.bar;
	var that = this;
	back.onclick = function(){
		if(!that.createonOff){
			return
		}
		var info = getid(goback);//获得返回的上一个对象
		if(!info){
			return
		}
		var index = info.index;
		goback = index;
		that.Create(getindex(goback));
		that.Selectmark();
		that.Scroll();
	}
};

//新建文件夹
createfiles.prototype.Btn_create = function(){
	var that = this;
	btn_create.onclick = function(){
		if(!that.createonOff){
			return;
		}
		var newdate ={
			id:date.length+1,
			username:'新建文件夹',
			src:'img/file.png',
			index:goback,
			type:'file',
			usertype:1
		};
		date.push(newdate);
		that.Create(getindex(goback));
		that.Selectmark();
		that.checkonOff = true;
		allcheck.className = '';
		that.Scroll();
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
		// if(!that.createonOff){
		// 	return
		// }
		if(is.length==0){
			return
		}
		for(var i=0;i<lis.length;i++){
			if(is[i].className=='activeout'){
				var values = getid(lis[i].id)
				for(var j=0;j<date.length;j++){
					if(date[j]==values){
						that.recording.push(date[j]);
						date[j]='';
					}
				}
			}
		}
		console.log(that.mark)
		distinguish(that);
		that.Selectmark();
		that.Scroll();
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
//滚动条
createfiles.prototype.Scroll = function(){
	var scalx = box_con.clientHeight;
	var scaly = files.offsetHeight;
	if(scalx>scaly){
		scroll.style.display = 'none';
		return
	}else{
		scroll.style.display = 'block';
		this.Mousedown();
	}
}
createfiles.prototype.Mousedown = function(){
	var maxy = scroll.clientHeight - bar.offsetHeight;
	bar.onmousedown = function(ev){
		var prey =  getPos(scroll).y;//当前鼠标点击的位置
		var disy = ev.clientY - getPos(bar).y;//偏移量
		var innerY = box_con.clientHeight-files.offsetHeight; 
		//滚动最上面的距离
		document.onmousemove = function(ev){
			var y = ev.clientY-disy-prey;
			if(y<=0){
				y=0;
			}
			if(y>maxy){
				y=maxy;
			}
			bar.style.top = y+'px';
			var scale = y /maxy;
			files.style.top = scale*innerY+'px';
			return false;
		}
		
		document.onmouseup = function(){
			this.onmousemove = null;
		}
	}
	
}
// var Rightclick = function(){
	
// }
// 
// 
// 右键显示菜单栏
createfiles.prototype.Show = function(){
	if(!this.createonOff){
		return
	}
	for(var i=0;i<menus_lis.length;i++){
		menus_lis[i].onmouseover = function(){
			this.children[0].className = 'active';
			if(this.children[1]){
				this.children[1].style.display='block';
			}
		}
		menus_lis[i].onmouseout = function(){
			this.children[0].className = '';
			if(this.children[1]){
				this.children[1].style.display='none';
			}
		}
	}
	box_con.oncontextmenu = function(ev){
		var disy = getPos(box_con).y;
		var disx = getPos(box_con).x;
		var x = ev.clientX;
		var y = ev.clientY;
		menus.style.display = 'block';
		menus.style.top = y-disy+'px';
		menus.style.left = x-disx+'px';
		return false;
	}
	box_con.onclick = function(){
		menus.style.display = 'none';
		return false;
	}
}
//右键菜单新建文件夹
createfiles.prototype.Menus_Cre = function(){
	var that = this;
	menus_render.onclick = function(){
		if(!that.createonOff){
			return;
		}
		var newdate ={
			id:date.length+1,
			username:'新建文件夹',
			src:'img/file.png',
			index:goback,
			type:'file',
			usertype:0
		};
		date.push(newdate);
		that.Create(getindex(goback));
		that.Selectmark();
		that.checkonOff = true;
		allcheck.className = '';
		that.Scroll();
	}
}
//右键菜单删除
createfiles.prototype.Menus_delete = function(){
	var  is = this.files.getElementsByTagName('i');
	var  lis = this.files.getElementsByTagName('li');
	var that = this;
	menus_delete.onclick = function(){
		if(is.length==0){
			return
		}
		for(var i=0;i<lis.length;i++){
			if(is[i].className=='activeout'){
				var values = getid(lis[i].id)
				for(var j=0;j<date.length;j++){
					if(date[j]==values){
						that.recording.push(date[j]);
						date[j]='';
					}
				}
			}
		}
		that.Create(getindex(goback));
		that.Selectmark();
		that.Scroll();
		allcheck.className = '';
		that.checkonOff = true;
		menus.style.display = 'none';

	}
	
}
//右键菜单重命名
createfiles.prototype.Menus_replace = function(){
	var  is = this.files.getElementsByTagName('i');
	var that = this;
	menus_replace.onclick = function(){
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
//右键全选
createfiles.prototype.Menus_Select = function(){
	var that = this;
	var  divs = this.files.getElementsByTagName('div');
	var  is = this.files.getElementsByTagName('i');
	menus_select.onclick = function(){
		if(is.length==0){
			return
		}
		if(that.checkonOff){
			allcheck.className = 'active';
			for(var i=0;i<is.length;i++){
				divs[i].style.border = '2px solid #2e80dc';
				is[i].className = 'activeout';
				is[i].onOff = false;
			}
		}else{
			allcheck.className = '';
			
			for(var i=0;i<is.length;i++){
				divs[i].style.border = '';
				is[i].className = '';
				is[i].onOff = true;
			}
		}
		that.checkonOff = !that.checkonOff;
	}
	
}
//上传按钮
createfiles.prototype.update_file = function(){
	var that = this;
	update_file.onchange = function(){
		var f = this.files[0];
		var file_name = f.name;
		var fr = new FileReader();
		if(f.type.indexOf('image')!=-1){
			/*var maxWidth = update_wrap.clientWidth;
			var xhr = new XMLHttpRequest();

			xhr.open('post','../php/post_file.php',true);
			xhr.onload = function(){
				console.log(this.responseText);
			};
			//上传过程中触发
			xhr.upload.onprogress = function(ev){
				
					ev.total上传文件的总大小
					ev.loaded 当前上传的大小。
				
				var scale = ev.loaded/ev.total;
				wrapSpan.innerHTML = (scale*100).toFixed(2)+'%';
				update_bar.style.width = maxWidth*scale+'px';

				console.log(ev.total,ev.loaded);
			}
			var fd = new FormData();

			fd.append('file',f);
		
			xhr.send(fd);*/
			//监控格式化是否完成
			fr.onload = function(){
				//创建一个image对象。
				var img = new Image();
				//监控图片是否加载完成。
				img.onload = function(){
					alert('上传图片成功');
				};
				//给img地址。
				img.src = fr.result;
				//把img添加到页面。
				// box_con.appendChild(img);
				var newdate ={
					id:date.length+1,
					username:file_name,
					type:'jpeg',
					src:img.src,
					index:goback,
					usertype:1
					
				};
				date.push(newdate);
				that.Create(getindex(goback));
				that.Selectmark();
				that.checkonOff = true;
				allcheck.className = '';
			};
			//添加需要格式化的文件。
			fr.readAsDataURL(f);
			return;
		}
		if(f.type.indexOf('video')!=-1){
			fr.onload = function(){
				console.log(fr)
				var newdate ={
					id:date.length+1,
					username:file_name,
					type:'mp4',
					src:'img/mp4.png',
					index:goback,
					usertype:3,
					con:fr.result
				};
				date.push(newdate);
				that.Create(getindex(goback));
				that.Selectmark();
				that.checkonOff = true;
				allcheck.className = '';
			};

			//添加需要格式化的文本文件
			fr.readAsDataURL(f);
			return;
		}
		if(f.type.indexOf('text')!=-1){
			fr.onload = function(){
				var cons = fr.result;
				console.log(cons)
				var newdate ={
					id:date.length+1,
					username:file_name,
					type:'txt',
					src:'img/txt.png',
					index:goback,
					usertype:3,
					con:cons
				};
				date.push(newdate);
				console.log(date)
				that.Create(getindex(goback));
				that.Selectmark();
				that.checkonOff = true;
				allcheck.className = '';
			};

			//添加需要格式化的文本文件
			fr.readAsText(f,'UTF-8');
			return;
		}
		if(f.type.indexOf('mp3')!=-1){
			fr.readAsArrayBuffer(f);
			fr.onload = function(ev){
				// console.log(fr.result);
				// img.src = fr.result;
			var al = confirm('上传大概需要5s,确定上传吗？');
			if(al==false){
				return
			}
			var result = ev.target.result;//上传返回的数据
			var context = new AudioContext();//创建音频接口
			/*
			decodeAudioData解码文件
				参数：
					1、需要解码的文件。
					2、回调函数，在解码成功之后调用。
						回调函数有一个参数，是一个二进制数组。

			*/
			//解码文件。
			
			context.decodeAudioData(
				result,//数据
				function(buffer){//解码成功调用该函数。成功后返回数据该参数是固定的
						//buffer 以二进制数组表示的文件。
					//创建音频节点。	
					var source = context.createBufferSource();
				
					//创建获取频谱能量值的analyser节点。
					var analyser = context.createAnalyser();	
					//系统扬声器的节点。
					// console.log(context.destination);
					//链接频谱
					source.connect(analyser);
					//链接系统扬声器节点。
					analyser.connect(context.destination)
					//添加播放数据。
					source.buffer = buffer;
					//开始播放
					// source.start(0);
					//创建频谱长度
					var array = new Uint8Array(analyser.frequencyBinCount);
					var len = 70;
					var n = Math.floor(array.length/len);
					var cgx= canvas.getContext("2d");//创建2d视图
					cgx.fillStyle = 'yellow';
					(function(){
						//获取到音频频率值。每次波动的频率
						analyser.getByteFrequencyData(array);
						cgx.clearRect(0, 0, 1024, 500);//清空画布所有样式
						for(var i=0;i<len;i++){
							cgx.fillRect(i*15, 500-array[i*n], 10, array[i*n]);//初始位置x，初始位置Y，宽度，高度
						}
						requestAnimationFrame(arguments.callee);//arguments.callee代表当前匿名函数
					})();
					var newdate ={
					id:date.length+1,
					username:file_name,
					type:'mp3',
					src:'img/mp3.png',
					index:goback,
					usertype:5,
					con:source
					};
					date.push(newdate);
					that.Create(getindex(goback));
					that.Selectmark();
					that.checkonOff = true;
					allcheck.className = '';
				})

			};
		}
	}
}

////////////////左侧全部文件

createfiles.prototype.Menu_list = function(){
	var that = this;
	menu_list.onclick = function(){
		that.mark = 0;
		that.Create(getindex(0));
		that.Selectmark();
		that.createonOff = true;
		btn_create.style.opacity = '';
	}
}

createfiles.prototype.Menu_picture = function(){
	var that = this;
	menu_picture.onclick = function(){
		that.mark = 1;
		that.Create(getusertype(1));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
}

createfiles.prototype.Menu_doc = function(){
	var that = this;
	menu_doc.onclick = function(){
		that.mark = 2;
		that.Create(getusertype(2));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
}
//左侧图片

createfiles.prototype.Menu_video = function(){
	var that = this;
	menu_video.onclick = function(){
		that.mark = 3;
		that.Create(getusertype(3));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
}
//左侧种子
createfiles.prototype.Menu_seed = function(){
	var that = this;
	menu_seed.onclick = function(){
		that.mark = 4;
		that.Create(getusertype(4));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
}
//左侧音乐
createfiles.prototype.Menu_music = function(){
	var that = this;
	menu_music.onclick = function(){
		that.mark = 5;
		console.log(that.mark)
		that.Create(getusertype(5));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
}
//左侧其他
createfiles.prototype.Menu_other = function(){
	var that = this;
	menu_other.onclick = function(){
		that.mark = 6;
		that.Create(getusertype(6));
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
	}
	
}
//左侧回收站
createfiles.prototype.Recycle = function(){
	var that = this;
	recycle.onclick = function(){
		console.log(getall(date))
		that.Create(that.recording);
		that.Selectmark();
		btn_create.style.opacity = '0.6';
		that.createonOff = false;
		that.Scroll();
	}
}
//点击打开图片
createfiles.prototype.Out = function(){
	var that = this;
	out.onclick = function(){
		that.photo.style.display = 'none'; 
		that.usertext.style.display = 'none';
		that.canvas.style.display = 'none';
		videos.style.display = 'none';
		var lis = document.getElementsByTagName('li');
		if(that.bigmark.type=='mp3'){
			that.bigmark.con.stop(0);
		}
	}
}
//换肤
var change_Bg = function(change_bg,box_con){
	this.change_bg = change_bg;
	this.box_con = box_con;
	this.bgcolor = '';
	this.click();
}
//点击换肤
change_Bg.prototype.click = function(){
	var that = this;
	change_bg.onchange = function(){
		var f = this.files[0];
		var file_name = f.name;
		var fr = new FileReader();
		if(f.type.indexOf('image')!=-1){
			//监控格式化是否完成
			fr.onload = function(){
				//创建一个image对象。
				var img = new Image();
				//监控图片是否加载完成。
				//给img地址。
				img.src = fr.result;
				that.bgcolor = img.src;   
				box_con.style['background-image'] = 'url('+img.src+')';
			};
			//添加需要格式化的文件。
			fr.readAsDataURL(f);
			return;
		}
	}
	
}
//右面弹窗介绍
var section_change = function(section,goright,section_img){
	this.section = section;
	this.goright = goright;
	this.section_img = section_img;
	mTween(section,'right',0,1000,'linear');
	goright.onclick = function(){
		mTween(section,'right',-500,1000,'linear')
	}
	section_img.onclick = function(){
		mTween(section,'right',0,1000,'linear')
	}
	setTimeout(function(){
		mTween(section,'right',-500,1000,'linear')
	},2300)

}