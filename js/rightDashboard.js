// function  dashboard1(mychart,name) {
//    const option = {
//         tooltip : {
//             formatter: "{a} <br/>{b} : {c}%"
//         },
//        grid: {
//                    left: 0,
//                    right: 0,
//                    bottom: '20%',
//                    top: 0,
//                    containLabel: true
//                },
//         series: [
//             {
//                 type: 'gauge',
//                 startAngle:'360',
//                 endAngle:'360',
//                 detail: {
//                     formatter:'{value}%',
//                     fontSize:10,
//                     offsetCenter:'50%'
//                 },
//                 axisLine:{
//                     lineStyle: {
//                         width: 6,
//                         color: [[0,'#0D89AD'],[1,'#0D89AD']]
//                     }
//                 },
//                 axisTick:{
//                     lineStyle:{
//                         color:'#71A7B7'
//                     }
//                 },
//                 data: [{value: 0,name:name}],
//                 splitLine:{
//                     show:'false',
//                     length:0,
//                 },
//                 pointer:'false',
//                 axisLabel:'false',
//                 title:{
//                     offsetCenter:[0,'140%'],
//                     color:'#3EAACC',
//                     fontSize:14
//                 }
//             },
//
//         ]
//     };
//     mychart.setOption(option,true);
//     setInterval(function () {
//         option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
//         option.series[0].data[0].value =((360-option.series[0].endAngle)/3.6).toFixed(2);
//         mychart.setOption(option, true);
//     },2000);
// }
// function  dashboard2(mychart,name) {
//     const option = {
//         tooltip : {
//             formatter: "{a} <br/>{b} : {c}%"
//         },
//         grid: {
//             left: 0,
//             right: 0,
//             bottom: '20%',
//             top: 0,
//             containLabel: true
//         },
//         series: [
//             {
//                 type: 'gauge',
//                 startAngle:'360',
//                 endAngle:'360',
//                 detail: {
//                     formatter:'{value}%',
//                     fontSize:10,
//                     offsetCenter:'50%'
//                 },
//                 axisLine:{
//                     lineStyle:{
//                         width:6,
//                         color: [[0,'#0D89AD'],[1,'#0D89AD']]
//                     }
//                 },
//                 axisTick:{
//                     lineStyle:{
//                         color:'#71A7B7'
//                     }
//                 },
//                 data: [{value: 0,name:name}],
//                 splitLine:{
//                     show:'false',
//                     length:0,
//                 },
//                 pointer:'false',
//                 axisLabel:'false',
//                 title: {
//                     offsetCenter:[0,'140%'],
//                     color:'#3EAACC',
//                     fontSize:14
//                 }
//             },
//
//         ]
//     };
//     mychart.setOption(option,true);
//     setInterval(function () {
//         option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
//         option.series[0].data[0].value = ((360-option.series[0].endAngle)/3.6).toFixed(2);
//         mychart.setOption(option, true);
//     },2000);
// }
// function  dashboard3(mychart,name) {
//    const option = {
//         tooltip : {
//             formatter: "{a} <br/>{b} : {c}%"
//         },
//        grid: {
//            left: 0,
//            right: 0,
//            bottom: '20%',
//            top: 0,
//            containLabel: true
//        },
//         series: [
//             {
//                 type: 'gauge',
//                 startAngle:'360',
//                 endAngle:'360',
//                 detail: {
//                     formatter:'{value}%',
//                     fontSize:10,
//                     offsetCenter:'50%'
//                 },
//                 axisLine:{
//                     lineStyle:{
//                         width:6,
//                         color: [[0,'#0D89AD'],[1,'#0D89AD']]
//                     }
//                 },
//                 axisTick:{
//                     lineStyle:{
//                         color:'#71A7B7'
//                     }
//                 },
//                 data: [{value: 0,name:name}],
//                 splitLine:{
//                     show:'false',
//                     length:0,
//                 },
//                 label:{
//                     name:'厕所使用率'
//                 },
//                 pointer:'false',
//                 axisLabel:'false',
//                 title: {
//                     offsetCenter:[0,'140%'],
//                     color:'#3EAACC',
//                     fontSize:14
//                 }
//             },
//
//         ]
//     };
//
//     setInterval(function () {
//         option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
//         option.series[0].data[0].value = ((360-option.series[0].endAngle)/3.6).toFixed(2);
//         mychart.setOption(option, true);
//     },2000);
//     mychart.setOption(option,true);
// }

// 上下行厕所
function leftToilet(tiolettitle,manToilet,womenToilet) {
    $('#letfTitile').text(tiolettitle);
    $('#leftManTiolet').text(manToilet);
    $('#leftWomenTiolet').text(womenToilet);
}

function rightToilet(tiolettitle,manToilet,womenToilet) {
    $('#rightTitile').text(tiolettitle);
    $('#rightManTiolet').text(manToilet);
    $('#rightWomenTiolet').text(womenToilet);
}
//上下行车位
function rightCar(cartitle,bigcar,smollcar,truck) {
    $('#rightcartitle').text(cartitle);
    $('#rightBigCarport').text(bigcar);
    $('#rightSmollCarport').text(smollcar);
    $('#rightTruckCarport').text(truck);
}
function leftCar(cartitle,bigcar,smollcar,truck) {
    $('#leftcartitle').text(cartitle);
    $('#leftBigCarport').text(bigcar);
    $('#leftSmollCarport').text(smollcar);
    $('#leftTruckCarport').text(truck);
}

