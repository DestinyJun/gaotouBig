//
// function Weather() {
//     // var json;
//     //步骤一:创建异步对象
//     var ajax = new XMLHttpRequest();
// //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
//     ajax.open('get','http://wthrcdn.etouch.cn/weather_mini?citykey='+101260107);
// //步骤三:发送请求
//     ajax.send();
// //步骤四:注册事件 onreadystatechange 状态改变就会调用
//     ajax.onreadystatechange = function () {
//         if (ajax.status===200) {
//             //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
//             console.log(ajax.responseText);//输入相应的内容
//             // json = ajax.responseText;
//         }
//     };
//     return ajax.responseText;
// }
