//
// var weatherJosn;
// $.ajax({
//     url:"http://wthrcdn.etouch.cn/weather_mini?",
//     type:'GET',
//     data:{citykey:101260107},
//     success:function (result) {
//         console.log(result);
//         if (result) {
//             weatherJosn = JSON.parse(result);
//             //昨天
//             var yestype = document.getElementById('yestype');
//             var yesday= document.getElementById('yesday');
//             var yeswen= document.getElementById('yeswen');
//             var yesicon= document.getElementById('yesicon');
//             var lowyeswen = weatherJosn.data.yesterday.low.toString();
//             var highyeswen = weatherJosn.data.yesterday.high.toString();
//             yestype.innerText=weatherJosn.data.yesterday.type;
//             yesday.innerText=weatherJosn.data.yesterday.date;
//             yeswen.innerText=lowyeswen.substring(lowyeswen.length-3,lowyeswen.length)+'-'+highyeswen.substring(highyeswen.length-3,highyeswen.length);
//             icon(weatherJosn.data.yesterday.type,yesicon);
//
//             //今天
//             var wentoday = document.getElementById('wentoday');
//             var typeToday = document.getElementById('typeToday');
//             var todayIcon = document.getElementById('todayicon');
//             var windToday = document.getElementById('windToday');
//             var lowwentoday = weatherJosn.data.forecast[0]['low'].toString();
//             var highwentoday = weatherJosn.data.forecast[0]['high'].toString();
//             windToday.innerText = weatherJosn.data.forecast[0]['fengxiang'];
//             wentoday.innerText = lowwentoday.substring(lowwentoday.length-3,lowwentoday.length)+'-'+highwentoday.substring(highwentoday.length-3,highwentoday.length);
//             typeToday.innerText = weatherJosn.data.forecast[0]['type'];
//             icon(weatherJosn.data.forecast[0]['type'],todayIcon);
//
//             //后天
//             var firstDay = document.getElementById('firstDay');
//             var firstWen = document.getElementById('firstWen');
//             var firstIcon = document.getElementById('firstIcon');
//             var firstType = document.getElementById('firstType');
//             var lowwenfirst = weatherJosn.data.forecast[1]['low'].toString();
//             var highwenfirst = weatherJosn.data.forecast[1]['high'].toString();
//             firstDay.innerText = weatherJosn.data.forecast[1]['date'];
//             firstWen.innerText = lowwenfirst.substring(lowwenfirst.length-3,lowwenfirst.length)+'-'+highwenfirst.substring(highwenfirst.length-3,highwenfirst.length);
//             firstType.innerText = weatherJosn.data.forecast[1]['type'];
//             icon(weatherJosn.data.forecast[1]['type'],firstIcon);
//             //大后天
//             var secondDay = document.getElementById('secondDay');
//             var secondWen = document.getElementById('secondWen');
//             var secondIcon = document.getElementById('secondIcon');
//             var secondType = document.getElementById('secondType');
//             var lowwensecond = weatherJosn.data.forecast[2]['low'].toString();
//             var highwensecond = weatherJosn.data.forecast[2]['high'].toString();
//             secondDay.innerText = weatherJosn.data.forecast[2]['date'];
//             secondWen.innerText = lowwensecond.substring(lowwensecond.length-3,lowwensecond.length)+'-'+highwensecond.substring(highwensecond.length-3,highwensecond.length);
//             secondType.innerText = weatherJosn.data.forecast[2]['type'];
//             icon(weatherJosn.data.forecast[2]['type'],secondIcon);
//             //大大后天
//             var thirdDay = document.getElementById('thirdDay');
//             var thirdWen = document.getElementById('thirdWen');
//             var thirdIcon = document.getElementById('thirdIcon');
//             var thirdType = document.getElementById('thirdType');
//             var lowwenthird = weatherJosn.data.forecast[3]['low'].toString();
//             var highwenthird = weatherJosn.data.forecast[3]['high'].toString();
//             thirdDay.innerText = weatherJosn.data.forecast[3]['date'];
//             thirdWen.innerText = lowwenthird.substring(lowwenthird.length-3,lowwenthird.length)+'-'+highwenthird.substring(highwenthird.length-3,highwenthird.length);
//             thirdType.innerText = weatherJosn.data.forecast[3]['type'];
//             icon(weatherJosn.data.forecast[3]['type'],thirdIcon);
//         }
//
//     },
//     error:function (err) {
//         console.log(err);
//     }
// });
//
// function icon(type,id) {
//         switch (type) {
//             case '小雨':  id.className = 'icon-light-rain';break;
//             case '中雨':  id.className = 'icon-moderate-rain';break;
//             case '大雨':  id.className = 'icon-heavy-rain';break;
//             case '小雪':  id.className = 'icon-spit';break;
//             case '多云':  id.className = 'icon-cloudy';break;
//             case '多云转晴':  id.className = 'icon-cloudy';break;
//             case '晴':  id.className = 'icon-fine';break;
//             case '雨夹雪':  id.className = 'icon-sleet';break;
//             case '雷阵雨':  id.className = 'icon-thundershower';break;
//             case '阴':  id.className = 'icon-cloudy-sky';break;
//             case '冻雨':  id.className = 'icon-heavy-rain';break;
//             case '阵雨':  id.className = 'icon-thundershower';break;
//             default:
//                 break;
//         }
//     }
//


//车辆滞留时间监控
function right(cartitle,bigcar,smollcar,truck) {
    $('#rightcartitle1').text(cartitle);
    $('#rightBigCarport1').text(bigcar);
    $('#rightSmollCarport1').text(smollcar);
    $('#rightTruckCarport1').text(truck);

}
function left(cartitle,bigcar,smollcar,truck) {
    $('#leftcartitle1').text(cartitle);
    $('#leftBigCarport1').text(bigcar);
    $('#leftSmollCarport1').text(smollcar);
    $('#leftTruckCarport1').text(truck);
}
function rightTime(cartime,smollcarTime,truckTime) {
    $('#rightBigCarTime').text(cartime);
    $('#rightSmollCarTime').text(smollcarTime);
    $('#rightTruckTime').text(truckTime);

}
function leftTime(cartime,smollcarTime,truckTime) {
    $('#leftBigCarTime').text(cartime);
    $('#leftSmollCarTime').text(smollcarTime);
    $('#leftTruckTime').text(truckTime);
}
