//头部
displayTime();
clock();
// 左边
// const myChartline = echarts.init(document.getElementById('line'));
// line(myChartline);
//客流柱状图

const myBar = echarts.init(document.getElementById('bar'));
bar(myBar);
//中国地图
const myChartMap = echarts.init(document.getElementById('Map'));
Bmap(myChartMap);
//厕所使用率仪表盘
const myChartgraph1 = echarts.init(document.getElementById('graph1'));
dashboard2(myChartgraph1);
const myChartgraph2 = echarts.init(document.getElementById('graph2'));
dashboard3(myChartgraph2);
// 右边
/*//天气调用
// const text = Weather();
// var ajax = new XMLHttpRequest();
// //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
// ajax.open('get','http://wthrcdn.etouch.cn/weather_mini?citykey='+101260107);
// //步骤三:发送请求
// ajax.send();
// //步骤四:注册事件 onreadystatechange 状态改变就会调用
// ajax.onreadystatechange = function () {
//     if (ajax.status===200) {
//         //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
//         console.log(ajax.responseText);//输入相应的内容
//         // json = ajax.responseText;
//     }
// };
// console.log(text);*/
// 车辆类型分布饼状图
const myChartpie = echarts.init(document.getElementById('pie'));
pie(myChartpie);
// 车位使用率仪表图
const myChartdashboard1 = echarts.init(document.getElementById('dashboard1'));
dashboard1(myChartdashboard1);
const myChartdashboard2 = echarts.init(document.getElementById('dashboard2'));
dashboard2(myChartdashboard2);
const myChartdashboard3 = echarts.init(document.getElementById('dashboard3'));
dashboard3(myChartdashboard3);


//背景地图
const myChart = echarts.init(document.getElementById('main'));
map(myChart);



