// function bar(myBar) {
//     const option = {
//         // color: ['#3EAACC'],
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             },
//             formatter:"{a}</br>{b}客流 : {c}人"
//         },
//         grid: {
//             left: 10,
//             right: 20,
//             bottom: 10,
//             top: 10,
//             containLabel: true
//         },
//         xAxis: [
//             {
//                 type: 'value',
//                 splitLine:{
//                     show:false
//                 },
//                 axisLabel:{color:'#fff'},
//             }
//
//         ],
//         yAxis: [
//             {
//                 type: 'category',
//                 data: ['贵州省', '四川省', '湖南省', '江西省', '湖北省'],
//                 axisTick: {
//                     alignWithLabel: true
//                 },
//                 axisLabel:{color:'#fff'},
//             }
//         ],
//         series: [
//             {
//                 name: '人流分布',
//                 type: 'bar',
//                 barWidth: '40%',
//                 data: [100, 52, 200, 334, 390],
//                 markLine:{
//                     lineStyle:{
//                         color:'#fff'
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         // color:['#14A3C5','#B73462','#3EC7A9','#48DFF1'],
//                         color: function(params){
//                             var colorList = [
//                                 new echarts.graphic.LinearGradient(
//                                     0, 0, 1, 0,
//                                     [
//                                         {offset: 0.2, color: '#840C3D'},
//                                         {offset: 0.4, color: '#980943'},
//                                         {offset: 0.6, color: '#A01C51'},
//                                         {offset: 1, color: '#AE3264'},
//                                     ]
//                                 ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             )];
//                             return colorList[params.dataIndex]
//                         }
//
//                     },
//                 },
//             },
//         ]
//     };
//     myBar.setOption(option);
// }

var json = [
    {"header": "经度：", "value": "160.705390"},
    {"header": "维度：", "value": "160.705390"},
    {"header": "占地面积：", "value": "90"},
    {"header": "始建时间：", "value": "2013-10-13"},
    {"header": "区长电话：", "value": "18311563380"},
    {"header": "运营时间：", "value": "2018-07-18"},
    {"header": "供电账户：", "value": "久长服务区"},
    {"header": "用水量：", "value": "5448"},
    {"header": "保洁人员：", "value": "15"},
    {"header": "安保人员：", "value": "20"},
    {"header": "大车车位：", "value": "200"},
    {"header": "小车车位：", "value": "300"},
    {"header": "客车车位：", "value": "300"},
    {"header": "货车车位：", "value": "200"},
];
for (var i = 0; i < json.length; i++) {

    if ((i+1) %2 ===1){
        var div = document.createElement('div');
        div.className = 'row';
        $('.basic').append(div);
        // console.log((i+1) %2);
        var left = document.createElement('div');
        var leftspan = document.createElement('span');
        left.className = 'col-md-6'+' '+'col-lg-6';
        left.style.padding = '0';
        leftspan.className='pull-left';
        leftspan.style.marginLeft='1.4vw';
        div.appendChild(left);
        left.appendChild(leftspan);
        leftspan.innerText = json[i].header+json[i].value;
    } else {
        var right = document.createElement('div');
        var rightspan = document.createElement('span');
        right.className = 'col-md-6'+' '+'col-lg-6';
        left.style.padding = '0';
        div.appendChild(right);
        right.appendChild(rightspan);
        rightspan.className='pull-left';
        rightspan.innerText = json[i].header+json[i].value;
    }
}
