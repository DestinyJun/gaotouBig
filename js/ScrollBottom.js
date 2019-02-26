var arr =new Array();
arr[0] = "贵州省贵阳市修文县久长镇，位于修文、开阳、息烽三县交界" +
    "贵阳市北，修文县城东北，距县城约15公里，距省城贵阳约45公里。是开阳、息烽两县进入省城的必经之地。" +
    "全镇总面积118多平方公里，耕地3.2万亩，其中，田1.55万亩，土1.64万亩。" +
    "镇辖22个村、1个居委会，人口31759人。修文县辖镇。位于县境东北部。辖1个社区、22个行政村。镇政府驻久长坝，距县城17千米。" +
    "川黔铁路、210国道和G75兰海高速公路并行于镇中部。";

var divoption ='';
// divoption = `<div class="bottom">
//     <div class="bottomDiv" id="div">
//       <ul id="ul">
//        <li id="bottomlione">${arr[0]}</li>
//        <li id="bottomlitwo">${arr[0]}</li>
//       </ul>
//     </div>
//     <div class="lt all"></div>
//     <div class="rt all"></div>
//     <div class="lb all"></div>
//     <div class="rb all"></div>
// </div>
divoption = `<div class="bottom">
    <div class="bottomDiv" id="div">
       <div id="banner">
        <div id="banner_bg">
        </div>
        <div id="banner_info">
        </div>
        <ul>
            <li class="on"> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
            <li> 5 </li>
        </ul>
        <div id="banner_list">
            <a href="#" target="_blank"><img src="../lib/image/1-1.jpg"></a>
            <a href="#" target="_blank"><img src="../lib/image/1-2.jpg"></a>
            <a href="#" target="_blank"><img src="../lib/image/1-3.jpg"></a>
            <a href="#" target="_blank"><img src="../lib/image/1-4.jpg"></a>
            <a href="#" target="_blank"><img src="../lib/image/1-5.jpg"></a>
        </div>
    </div>
    </div>
    <div class="lt all"></div>
    <div class="rt all"></div>
    <div class="lb all"></div>
    <div class="rb all"></div>
</div>
<!--设置底部的版权信息-->
<div class="bottomtext" >版权所有：贵州高投服务管理有限公司 <span>123</span> 技术支持：贵阳红鸟智能技术服务有限公司</div>`;
$('body').append(divoption);
//图文信息模板


// setdata();
//设置滚动
// var speed = 180;
// setInterval(Marquee,speed);
// var div = document.getElementById('div');
// var ul = document.getElementById('ul');
// div.onmouseover=function(){clearInterval(MyMar)};
// div.onmouseout=function(){MyMar=setInterval(Marquee,speed); };
// setInterval(setdata,9000);
// setInterval(removeli,17000);
//滚动函数
// var flag = 1;
// function Marquee(){
//     if(div.scrollTop>=div.offsetHeight+10){
//         // div.scrollTop=0;
//         if (flag %2 ===1){
//             $('#ul').append($('#bottomlione'));
//         } else {
//             $('#ul').append($('#bottomlitwo'));
//         }
//         flag++;
//     }
//     else{
//         div.scrollTop=div.scrollTop+1;
//     }
// }
//设置列表
// function setdata() {
//     lioption=``;
//     for (var j=0;j<2;j++){
//         lioption+= `<li id="bottomlione">${arr[0]}</li>`
//     }
//     $('#ul').append(lioption);
// }

// // 移除列表
// function removeli() {
//     var lis = $('#ul').children("li");
//     if(lis.length > 3) {
//         for (var i=0 ;i <lis.length-3;i++){
//             lis[i].remove();
//         }
//     }
// }
var t = n = 0,
    count;
$(document).ready(function() {
    // 获取图片标签长度
    count = $("#banner_list a").length;
    // 不是当前显示的图片隐藏
    $("#banner_list a:not(:first-child)").hide();
    // 点击下面的1234按钮，切换图片
    $("#banner li").click(function() {
        var i = $(this).text() - 1;
        n = i;
        if (i >= count) return;
        // 淡入淡出效果
        $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);

        // 响应点击
        $(this).toggleClass("on");

        // 切换按钮的时候让上一个按钮回归原来的样式
        $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 4000);
    $("#banner").hover(function() {
            clearInterval(t)
        },
        function() {
            t = setInterval("showAuto()", 4000);
        });
})
// 自动轮播
function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
}