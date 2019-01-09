var url = 'http://123.249.28.108:8889/highway-sabd';
//头部

//获取传过来的值
var value = window.localStorage.getItem("id");
var title = window.sessionStorage.getItem("title");

// 设置页面的title
$('#title').text(title);

//页面时间刷新
displayTime();
clock();

//获取传入的参数
var json = getJson();


//左边
//1、实时请求客流
getPeopleNum();
setInterval(getPeopleNum, 50000);

//2、 基本信息
getPeopleInfo();

//3、 中国地图
getPeopleMap();

//4 、厕所使用率仪表盘
getToiletData();


//右边
// 1、请求客流
getCarNum();
setInterval(getCarNum, 50000);

//2、 车辆类型分布饼状图
getCarPie();

// 车位使用率仪表图
getCarportData();


//左边客流请求函数
function getPeopleNum() {
    $.ajax({
        url: url + "/serviceArea/realTime/passenger/total/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            // console.log(result);
            peopelData(result.data);

        }
    });
}

// 左边基本信息请求函数
function getPeopleInfo() {
    $.ajax({
        url: url + "/serviceArea/config/getServiceAreaById/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            var dataInfo = [];
            for (var i = 0; i < result.data.commonAttributeValues.length; i++) {
                dataInfo.push({
                    'header': result.data.commonAttributeValues[i].attributeDesc + '：',
                    'value': result.data.commonAttributeValues[i].value
                })
            }
            dataIfo(dataInfo);
        }
    });
}

// 左边全国客流分布情况请求函数
function getPeopleMap() {
    $.ajax({
        url: url + "/serviceArea/realTime/passenger/nationwideDistributeMap/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            // console.log(result.data);
            // carData(result.data);
            const myChartMap = echarts.init(document.getElementById('Map'));
            Bmap(myChartMap, result.data);
        }
    });
}

// 左边厕所使用率
function getToiletData() {
    const myChartgraph1 = echarts.init(document.getElementById('graph1'));
    dashboard2(myChartgraph1, '男厕所');
    const myChartgraph2 = echarts.init(document.getElementById('graph2'));
    dashboard3(myChartgraph2, '女厕所');

}

// 右边车流请求函数
function getCarNum() {
    $.ajax({
        url: url + "/serviceArea/realTime/vehicle/total/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            // console.log(result.data);
            carData(result.data);

        }
    });
}

// 右边车辆饼状图
function getCarPie() {
    $.ajax({
        url: url + "/serviceArea/realTime/vehicle/vechileTypePie/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            // console.log(result.data);
            // carData(result.data);
            var datapie = [];
            for (let i = 0; i < result.data.length; i++) {
                datapie.push({'name': result.data[i].name, 'value': result.data[i].value})
            }
            console.log(datapie);
            const myChartpie = echarts.init(document.getElementById('pie'));
            pie(myChartpie, datapie);
            // for (var j = 0; j < result.data.length ; j++) {
            //     datapie.push({'name':result.datap[j].name,'value':result.datap[j].value})
            // }
        }
    });
}

function getCarportData() {
    const myChartdashboard1 = echarts.init(document.getElementById('dashboard1'));
    dashboard1(myChartdashboard1, '小车车位');
    const myChartdashboard2 = echarts.init(document.getElementById('dashboard2'));
    dashboard2(myChartdashboard2, '客车车位');
    const myChartdashboard3 = echarts.init(document.getElementById('dashboard3'));
    dashboard3(myChartdashboard3, '货车车位');
}


