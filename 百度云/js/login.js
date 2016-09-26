//登陆窗口，输入框和密码框内容验证
var Login = function(u_text){
	this.u_text = u_text;
	this.spans=this.u_text.nextElementSibling;
};
Login.prototype.Logkeydown = function(){
	var self = this;
	setTimeout(function(){
		if(self.u_text.value == ''){
			self.spans.style.visibility = 'visible';
		}else{
			self.spans.style.visibility = 'hidden';
		}
	})
};