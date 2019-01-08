//头部
displayTime();
clock();
// const myBar = echarts.init(document.getElementById('bar'));
// bar(myBar);
//中国地图
const myChartMap = echarts.init(document.getElementById('Map'));
Bmap(myChartMap);
//厕所使用率仪表盘
const myChartgraph1 = echarts.init(document.getElementById('graph1'));
dashboard2(myChartgraph1,'男厕所');
const myChartgraph2 = echarts.init(document.getElementById('graph2'));
dashboard3(myChartgraph2,'女厕所');
// 右边

// 车辆类型分布饼状图
const myChartpie = echarts.init(document.getElementById('pie'));
pie(myChartpie);
// 车位使用率仪表图
const myChartdashboard1 = echarts.init(document.getElementById('dashboard1'));
dashboard1(myChartdashboard1,'小车车位');
const myChartdashboard2 = echarts.init(document.getElementById('dashboard2'));
dashboard2(myChartdashboard2,'客车车位');
const myChartdashboard3 = echarts.init(document.getElementById('dashboard3'));
dashboard3(myChartdashboard3,'货车车位');


//背景地图
// const myChart = echarts.init(document.getElementById('main'));
// map(myChart);



