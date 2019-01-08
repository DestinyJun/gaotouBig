var appId = 1024;
var appKey = 'f384575f-1479-494d-bb42-8abf06fe7c9b';
var time1 = '';
tick();
var sign = hex_md5(appId + time1 + appKey);
function getJson() {
//     return //
  json = {
    'appId': appId,
    'time': time1,
    'sign': sign
  };
  return json;

}


function tick() {
    var myDate = new Date();
    myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    myDate.getMonth(); //获取当前月份(0-11,0代表1月)
    myDate.getDate(); //获取当前日(1-31)
    // myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    // myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
    myDate.getHours(); //获取当前小时数(0-23)
    myDate.getMinutes(); //获取当前分钟数(0-59)
    myDate.getSeconds(); //获取当前秒数(0-59)
    myDate.getMilliseconds(); //获取当前毫秒数(0-999)
    // myDate.toLocaleDateString(); //获取当前日期
    var Month = myDate.getMonth() < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1);
    var day = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate();
    var Hours = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();
    var Minutes = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();
    var Seconds = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();
    var Milliseconds = myDate.getMilliseconds() < 10 ? '0' + myDate.getMilliseconds() : myDate.getMilliseconds();
    time1 = myDate.getFullYear() + Month + day + Hours + Minutes + Seconds + Milliseconds; //获取当前时间
    console.log(time1);
}