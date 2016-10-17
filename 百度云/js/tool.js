//getclass方法
function getClass(className,context){
    var eles = (context||document.body).getElementsByTagName('*');
    var arr = [];
    var re = new RegExp('\\b'+className+'\\b','g');
    // console.log(re);
    for(var i=0;i<eles.length;i++){
        if(re.test(eles[i].className)){
            arr.push(eles[i]);
        }
    }
    return arr;
}

//根据层级找符合的id,id只有一个哦
function getid(index){
    for(var i=0;i<date.length;i++){
        if(index == date[i].id){
            return date[i];
        }
    } 
}

//usertype.找存储的类型
function getusertype(index){
    var arr = [];
    for(var i=0;i<date.length;i++){
        if(index == date[i].usertype){
            arr.push(date[i]);
        }
    } 
    return arr;
}
//找所有类型
function getall(date){
    var arr = [];
    for(var i=0;i<date.length;i++){
        if(date[i].index){
            arr.push(date[i]);
        }
    }
    return arr;
}

//封装函数功能:根据输入的参数可以找寻到和该参数相同的层级
function getindex(id){
    var arr = [];
    for(var i=0;i<date.length;i++){
        if(id == date[i].index){
            arr.push(date[i]);
        }
    } 
    return arr;
}
//数组去重
function clearrepeat(arr){
    var arr1 = [].concat(arr);

    for(var i=0;i<arr1.length-1;i++){
        for(var j=i+1;j<arr1.length;j++){//每次循环的起始值是不断随着i变化的
            // console.log(arr1);
            if(arr1[i] === arr1[j]){
                arr1.splice(j,1);
                j--;//当删除j的数值之后，j在循环的时候就相当于减少1，j++的话，j就会跳过一个数值，所以要自减
            }
        }
        
    }
    return arr1;
}
//滚动条
function getPos(node,pos){
                pos = pos||{x:0,y:0};
                // debugger;
                pos.x +=node.offsetLeft;
                pos.y +=node.offsetTop;
                
                if(node.offsetParent){
                    var p = node.offsetParent;
                    // console.log(getComputedStyle(p).borderTopWidth);
                    pos.x += css(p,'borderLeftWidth');
                    pos.y += css(p,'borderTopWidth');
                    getPos(node.offsetParent,pos);

                }
                return pos;
            }
//获取属性值
function css(obj,attr){
    return parseFloat(getComputedStyle(obj)[attr]);
}
//根据文件类型生成内容
function distinguish(that){
    switch(that.mark){
            case 0 :
            that.Create(getindex(goback));
            break;
            case 1 :
            that.Create(getusertype(1));
            break;
            case 2 :
            that.Create(getusertype(2));
            break;
            case 3 :
            that.Create(getusertype(3));
            break;
            case 4 :
            that.Create(getusertype(4));
            break;
            case 5 :
            that.Create(getusertype(5));
            break;
            case 6 :
            that.Create(getusertype(6));
            break;
        }
}

function mTween(obj,attr,target,duration,fx,callBack){
    //获取起始位置
    var begin = parseFloat(getComputedStyle(obj)[attr]);
    //算出总距离
    var count = target - begin;
    //var time = new Date().getTime();
    //记录时间
    var time = +new Date();
    //防止定时器冲突，所以每次开启先清除。
    clearInterval(obj[attr])
    obj[attr] = setInterval(function(){
        //获取已过去的时间
        var t = +new Date() - time ;
        // console.log(1);
        //已过去时间超出总时间代表运动结束
        if(t>=duration){
            t = duration;
            //清除定时器
            clearInterval(obj[attr]);
            //如果有回调函数就执行回调
            callBack&&callBack();
        }
        //var value = count*t/duration + begin;
        //根据传入的运动方式算出obj应该运动的值
        var value = Tween[fx](t,begin,count,duration);
        
        obj.style[attr] = value + 'px';
    },16)
}

/*
* t : time 已过时间
* b : begin 起始值
* c : count 总的运动值
* d : duration 持续时间
*
* 曲线方程
*
* http://www.cnblogs.com/bluedream2009/archive/2010/06/19/1760909.html
* */

//Tween.linear();

var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) { 
            return b; 
        }
        if ( (t /= d) == 1 ) {
            return b+c; 
        }
        if (!p) {
            p=d*0.3; 
        }
        if (!a || a < Math.abs(c)) {
            a = c; 
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },    
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c; 
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                    Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) * 
                Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
           s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    }, 
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158; 
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },       
    bounceOut: function(t, b, c, d){//*
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },      
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}