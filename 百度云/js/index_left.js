//左侧显示阴影
var ShowShadow = function(obj){
    this.obj = obj;
    this.ShowNow();
};
ShowShadow.prototype.ShowNow = function(){
    for(var i=0;i<this.obj.length;i++){
        this.obj[i].onmouseover = function(){
            this.style.background = '#e1e1e1';
            this.children[0].children[0].className = 'mover';
        }
        this.obj[i].onmouseout = function(){
            this.style.background = '';
            this.children[0].children[0].className = '';
        }
    }
    
};
// var Click = function(menu_list){
//     this.menu_list = menu_list;
//     this.Menu_list();
// }
// Click.prototype.Menu_list = function(){
//     var that = this;
//     menu_list.onclick = function(){
//         console.log( create.Create())
//       create.Create(1);
//     }
// }