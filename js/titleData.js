
//左边客流量
function peopelData(data){
    // const data =  (Math.random() * 1000).toFixed(0) - 0;
    var text = document.getElementById('user');
    text.innerText =data;
}
//右边车流量
function carData(data){
    var car = document.getElementById('car');
    car.innerText =data;
}

var time = document.getElementById("time");
var date = document.getElementById("date");
var nowWeek = document.getElementById("nowWeek");
function displayTime() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth()+1;
    var day = nowDate.getDate();
    var week = nowDate.getDay();
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var timestr = year + '/' + month + '/' + day;
    date.innerHTML= timestr;
    nowWeek.innerHTML = weekday[week];
}
function clock(){
    let nowTime = new Date();
    let hour = nowTime.getHours();
    let minute = nowTime.getMinutes();
    let second = nowTime.getSeconds();
    hour = hour<10?'0'+hour:hour;
    minute = minute<10?'0'+minute:minute;
    second=second<10?'0'+second:second;
    let attime= hour + ':' + minute + ':' + second;
    // console.log(attime);
    time.innerHTML = attime;
}
setInterval(clock,1000);

