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
