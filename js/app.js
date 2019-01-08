var url = 'http://123.249.28.108:8889/highway-sabd';
//头部
// var thisURL = document.URL;
// var getval =thisURL.split('?')[1];
// var id = getval.split(",")[0];
// var value = id.split("=")[1];
// var titledata= getval.split(",")[1];
// var title= titledata.split("=")[1];
var value=window.localStorage.getItem("id");
var title=window.sessionStorage.getItem("title");
// var value = titledata.split("=")[0];
// var title = titledata.split("=")[1];
$('#title').text(title);
console.log(value);
function  showvalf(){
    // alert(showval);
    // console.log(titledata);
    // document.getElementById('value').value=showval;
}
displayTime();
clock();
var json = getJson();
// console.log(json);
//左边

//1、请求客流
getPeopleNum();
setInterval(getPeopleNum,5000);
function getPeopleNum() {
    $.ajax({
        url:url+"/serviceArea/realTime/passenger/total/"+value,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            // console.log(result);
            peopelData(result.data);

        }
    });
}
//2、 基本信息
// console.log(value+123);
getPeopleInfo();
function getPeopleInfo() {
    $.ajax({
        url:url+"/serviceArea/config/getServiceAreaById/"+value,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            var dataInfo =[];
            for (var i = 0; i<result.data.commonAttributeValues.length;i++){
                dataInfo.push({'header':result.data.commonAttributeValues[i].attributeDesc+'：','value':result.data.commonAttributeValues[i].value})
            }
            dataIfo(dataInfo);
        }
    });
}

//3、 中国地图
getPeopleMap();
function getPeopleMap() {
    $.ajax({
        url:url+"/serviceArea/realTime/passenger/nationwideDistributeMap/"+value,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            // console.log(result.data);
            // carData(result.data);
            const myChartMap = echarts.init(document.getElementById('Map'));
            Bmap(myChartMap,result.data);
        }
    });
}

//4 、厕所使用率仪表盘
const myChartgraph1 = echarts.init(document.getElementById('graph1'));
dashboard2(myChartgraph1,'男厕所');
const myChartgraph2 = echarts.init(document.getElementById('graph2'));
dashboard3(myChartgraph2,'女厕所');


//右边
// 1、请求客流
getCarNum();
setInterval(getCarNum,5000);
function getCarNum() {
    $.ajax({
        url:url+"/serviceArea/realTime/vehicle/total/"+value,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            // console.log(result.data);
            carData(result.data);

        }
    });
}

//2、 车辆类型分布饼状图
getCarPie();
function getCarPie() {
    $.ajax({
        url:url+"/serviceArea/realTime/vehicle/vechileTypePie/"+value,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            // console.log(result.data);
            // carData(result.data);
            var datapie = [];
            for (let i = 0; i < result.data.length ; i++) {
                datapie.push({'name':result.data[i].name,'value':result.data[i].value})
            }
            console.log(datapie);
            const myChartpie = echarts.init(document.getElementById('pie'));
            pie(myChartpie,datapie);
            // for (var j = 0; j < result.data.length ; j++) {
            //     datapie.push({'name':result.datap[j].name,'value':result.datap[j].value})
            // }
        }
    });
}


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

// $(document).ready(function(e) {if (window.history && window.history.pushState) {$(window).on('popstate', function () {window.history.pushState('forward', null, '#');window.history.forward(1);alert('你确定要返回上一页') ;//这里是返回上一页之前的业务逻辑，可提示消息，可以是跳转的事件如window.location.href="http://www.baidu.com";});}window.history.pushState('forward', null, '#'); //在IE中必须得有这两行window.history.forward(1);});

