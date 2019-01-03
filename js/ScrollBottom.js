var div = document.createElement('div');
var div1 = document.createElement('div');
div.className = 'bottom';
//显示图文信息
div1.className = 'bottomDiv';

//四个边角
var lefttop = document.createElement('div');
var righttop = document.createElement('div');
var leftbottom = document.createElement('div');
var rightbottom = document.createElement('div');
lefttop.className = 'lt'+' '+'all';
righttop.className = 'rt'+' '+'all';
leftbottom.className = 'lb'+' '+'all';
rightbottom.className = 'rb'+' '+'all';

//图文信息模板
var arr =new Array();
arr[0] = "贵州省贵阳市修文县久长镇，位于修文、开阳、息烽三县交界" +
    "贵阳市北，修文县城东北，距县城约15公里，距省城贵阳约45公里。是开阳、息烽两县进入省城的必经之地。" +
    "全镇总面积118多平方公里，耕地3.2万亩，其中，田1.55万亩，土1.64万亩。" +
    "镇辖22个村、1个居委会，人口31759人。修文县辖镇。位于县境东北部。辖1个社区、22个行政村。镇政府驻久长坝，距县城17千米。" +
    "川黔铁路、210国道和G75兰海高速公路并行于镇中部。";
var ul = document.createElement('ul');
setdata();
div.appendChild(lefttop);
div.appendChild(leftbottom);
div.appendChild(righttop);
div.appendChild(rightbottom);
div.appendChild(div1);
div1.appendChild(ul);
document.body.appendChild(div);

//设置滚动
var speed = 150;
var MyMar=setInterval(Marquee,speed);
div1.onmouseover=function(){clearInterval(MyMar)};
div1.onmouseout=function(){MyMar=setInterval(Marquee,speed); };
setInterval(setdata,12000);
setInterval(removeli,30000);

//滚动函数
function Marquee(){
    if(div1.scrollTop>=ul.offsetHeight){
        div1.scrollTop=0;
    }
    else{
        div1.scrollTop=div1.scrollTop+1;
    }
}
//设置列表
function setdata() {
    for (var j=1;j<arr.length+1;j++){
        var li = document.createElement('li');
        li.innerText = arr[j-1];
        ul.appendChild(li);
    }
}

//移除多的li
function removeli() {
    // $('.bottomDiv ul').removeChild();
    // console.log();
    var item = document.getElementsByTagName("ul");
    var listitem =item[1].getElementsByTagName("li");
    // $('.bottomDiv ul').remove(listitem[0]);
    if(listitem.length>3){
        // listitem[0].remove();
        // listitem[1].remove();
        for (var i=0;i<listitem.length-2;i++){
            listitem[i].remove();
        }
    }
}
