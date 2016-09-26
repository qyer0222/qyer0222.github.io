//鼠标移入移除显示li的内容
function border(obj){
    var showborder = new Showborder(nav_a[obj]);
    nav_a[obj].onmouseover = function(){
        showborder.Showbo();
    };
    nav_a[obj].onmouseout = function(){
        showborder.clearbo();
    };
}

//鼠标移入移除显示隐藏
var Show = function(listEle,list_authorEle,authorEle){
    this.list = listEle;
    this.list_author = list_authorEle;
    this.author = authorEle;
};
Show.prototype.navmove = function(){
    this.list.style.display = 'block';
    this.list_author.style.background = '#F0F0DF';
    this.author.style.color = 'black';
};
Show.prototype.navout = function(){
    this.list.style.display = '';
    this.list_author.style.background = '';
    this.author.style.color = '';
};
//显示出div里面每个li的边框
var Showborder = function(nav_aEle){
    this.nav_a = nav_aEle;
};
Showborder.prototype.Showbo = function(){
    this.nav_a.style.border = '1px solid black';
};
Showborder.prototype.clearbo = function(){
    this.nav_a.style.border = '1px solid #F0F0DF';
};