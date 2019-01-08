var divoption ='';
var lioption ='';
divoption = `<div class="bottom">
    <div class="bottomDiv" id="div">
      <ul id="ul">
      </ul>
    </div>
    <div class="lt all"></div>
    <div class="rt all"></div>
    <div class="lb all"></div>
    <div class="rb all"></div>
</div>
<div class="bottomtext" >版权所有：贵州高投服务管理有限公司 <span>123</span> 技术支持：贵阳红鸟智能技术服务有限公司</div>`;
$('body').append(divoption);
//图文信息模板
var arr =new Array();
arr[0] = "贵州省贵阳市修文县久长镇，位于修文、开阳、息烽三县交界" +
    "贵阳市北，修文县城东北，距县城约15公里，距省城贵阳约45公里。是开阳、息烽两县进入省城的必经之地。" +
    "全镇总面积118多平方公里，耕地3.2万亩，其中，田1.55万亩，土1.64万亩。" +
    "镇辖22个村、1个居委会，人口31759人。修文县辖镇。位于县境东北部。辖1个社区、22个行政村。镇政府驻久长坝，距县城17千米。" +
    "川黔铁路、210国道和G75兰海高速公路并行于镇中部。";

setdata();
//设置滚动
var speed = 150;
var MyMar=setInterval(Marquee,speed);
var div = document.getElementById('div');
var ul = document.getElementById('ul');
div.onmouseover=function(){clearInterval(MyMar)};
div.onmouseout=function(){MyMar=setInterval(Marquee,speed); };
setInterval(setdata,12000);
setInterval(removeli,17000);
//滚动函数
function Marquee(){
    if(div.scrollTop>=ul.offsetHeight){
        div.scrollTop=0;
    }
    else{
        div.scrollTop=div.scrollTop+1;
    }
}
//设置列表
function setdata() {
    lioption=``;
    for (var j=0;j<arr.length;j++){
        lioption+= `<li>${arr[j]}</li>`
    }
    $('#ul').append(lioption);
}

function removeli() {
    var lis = $('#ul').children("li");
    if(lis.length > 3) {
        for (var i=0 ;i <lis.length-3;i++){
            lis[i].remove();
        }
    }
}
