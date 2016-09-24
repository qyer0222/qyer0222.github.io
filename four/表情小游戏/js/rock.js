function rock(obj,attr,callback){
	var status = parseFloat(getComputedStyle(obj)[attr]);
	var arr = [];
	var num = 0;
	if(obj.onff){
		return;
	}
	obj.onff = true;
	for(var i=20;i>0;i-=2){
		arr.push(i,-i)
	}
	arr.push(0);
	var shake = setInterval(function(){
		obj.style[attr] = Number(status)+Number(arr[num])+'px';
		num++;
		if(num>=arr.length){
			clearInterval(shake);
			obj.onff = false;
			callback&&callback();
		}
	},30);
}