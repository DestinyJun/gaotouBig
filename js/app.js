// var url = 'http://123.249.28.108:8889/highway-sabd';
var url = 'http://120.77.171.73:8080/highway-sabd';
//头部

//获取传过来的值
var value = window.localStorage.getItem("id");
var title = window.sessionStorage.getItem("title");

console.log(window.sessionStorage);
// console.log(window.sessionStorage.getItem("provinceId"));

console.log(title);
// 设置页面的title
$('#title').text(title);

//页面时间刷新
displayTime();
clock();

//获取传入的参数
var json = getJson();
// console.log(json);
var jsondata = getData();
console.log(jsondata);
//左边
//1、实时请求客流
getPeopleNum();
setInterval(getPeopleNum, 4000);

//2、 基本信息
getPeopleInfo();

//3、 中国地图
getPeopleMap();

//4 、厕所使用率仪表盘
getToiletData();


//右边
// 1、请求客流
getCarNum();
setInterval(getCarNum, 4000);

//2、 车辆类型分布饼状图
getCarPie();

// 车位使用率仪表图
getCarportData();

//车辆滞留情况
setInterval(function () {
    getCarportTime();
},1000);





//左边客流请求函数
function getPeopleNum() {
    console.log(value);
    $.ajax({
        url: url + "/serviceArea/realTime/passenger/total/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            // console.log(result);
            if (result.data) {
                peopelData(result.data);
            }

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
            console.log(result);
            if (result.data){
                var dataInfo = [];
                var upInfo = [];
                var downInfo = [];
                var downtitle ;
                var uptitle ;
                var downtotaltitle = result.data.description;
                // console.log(result.data);
                downtitle = result.data.downAttributeValues.source+'-->'+result.data.downAttributeValues.destination;
                uptitle = result.data.upAttributeValues.source+'-->'+result.data.upAttributeValues.destination;
                for (let i = 0; i < result.data.commonAttributeValues.length; i++) {
                    if(result.data.commonAttributeValues[i].show){
                        dataInfo.push({
                            'head': result.data.commonAttributeValues[i].attributeDesc + '：',
                            'value': result.data.commonAttributeValues[i].value
                        })
                    }
                }
                for (let i = 0; i < result.data.downAttributeValues.attributeValues.length; i++) {
                    if (result.data.downAttributeValues.attributeValues[i].show){
                        downInfo.push({
                            'head': result.data.downAttributeValues.attributeValues[i].attributeDesc + '：',
                            'value': result.data.downAttributeValues.attributeValues[i].value
                        })
                    }
                }
                for (let i = 0; i < result.data.upAttributeValues.attributeValues.length; i++) {
                    if (result.data.upAttributeValues.attributeValues[i].show){
                        upInfo.push({
                            'head': result.data.upAttributeValues.attributeValues[i].attributeDesc + '：',
                            'value': result.data.upAttributeValues.attributeValues[i].value
                        })
                    }
                }
                // console.log(upInfo);
                // if(downtotaltitle!=null){
                dataIfo(dataInfo,downInfo,upInfo,downtitle,uptitle,downtotaltitle);
                dataIfotwo(dataInfo,downInfo,upInfo,downtitle,uptitle,downtotaltitle);
                if (downtotaltitle == null){
                    $('#downtitle p').text('');
                    var basicspeed = 150;
                    setInterval(basicMarquee,basicspeed);
                    var basicdiv = document.getElementById('basicdiv');
//滚动函数
                    var flag = 1;
                    function basicMarquee(){


                        if(basicdiv.scrollTop>=basicdiv.offsetHeight+60){

                            // basicdiv.scrollTop=0;
                            if (flag %2 ===1){
                                $('#basicul').append($('#basicli'));

                            } else {
                                $('#basicul').append($('#basiclitwo'));
                            }
                            flag++;
                            // console.log(basicdiv.offsetHeight);
                        }
                        else{
                            basicdiv.scrollTop=basicdiv.scrollTop+1;
                            // console.log(basicdiv.scrollTop);

                        }
                    }
                }else {
                    var basicspeed = 150;
                    setInterval(basicMarquee,basicspeed);
                    var basicdiv = document.getElementById('basicdiv');
//滚动函数
                    var flag = 1;
                    function basicMarquee(){


                        if(basicdiv.scrollTop>=basicdiv.offsetHeight+148){

                            // basicdiv.scrollTop=0;
                            if (flag %2 ===1){
                                $('#basicul').append($('#basicli'));

                            } else {
                                $('#basicul').append($('#basiclitwo'));
                            }
                            flag++;
                            // console.log(basicdiv.offsetHeight);
                        }
                        else{
                            basicdiv.scrollTop=basicdiv.scrollTop+1;
                            // console.log(basicdiv.scrollTop);

                        }
                    }
                }
                for (let i = 0 ; i<upInfo.length;i++){
                    switch (upInfo[i].head) {
                        case '男卫生间：': $('#leftManSum').text(upInfo[i].value);break;
                        case '女卫生间：': $('#leftWomenSum').text(upInfo[i].value);break;
                        case '大车车位：': $('#leftBigCarSum').text(upInfo[i].value);break;
                        case '小车车位：': $('#leftSmollCarSum').text(upInfo[i].value);break;
                        case '客车车位：': $('#leftTruckSum').text(upInfo[i].value);break;
                    }

                }
                for (let j = 0 ; j<downInfo.length;j++){
                    // console.log(upInfo[j].head);
                    switch (downInfo[j].head) {
                        case '男卫生间：': $('#rightManSum').text(downInfo[j].value);break;
                        case '女卫生间：': $('#rightWomenSum').text(downInfo[j].value);break;
                        case '大车车位：': $('#rightBigCarSum').text(downInfo[j].value);break;
                        case '小车车位：': $('#rightSmollCarSum').text(downInfo[j].value);break;
                        case '客车车位：': $('#rightTruckSum').text(downInfo[j].value);break;
                    }

                }
            }

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
            if ( result.data) {
                const myChartMap = echarts.init(document.getElementById('Map'));
                Bmap(myChartMap, result.data);
            }

        }
    });
}

// 左边厕所使用率
function getToiletData() {
    setInterval(function () {
        var cartitleleft = '遵义->贵阳';
        var cartitle = '贵阳->遵义';
        leftToilet(cartitleleft,'无','无');
        rightToilet(cartitle,'无','无')

    },1000)
    // const myChartgraph1 = echarts.init(document.getElementById('graph1'));
    // f(myChartgraph1);
    // const myChartgraph2 = echarts.init(document.getElementById('graph2'));
    // dashboard3(myChartgraph2, '女厕所');

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
            if (result.data) {
                carData(result.data);

            }

        }
    });
}

// 右边车辆饼状图
function getCarPie() {

    $.ajax({
        url: url + "/serviceArea/realTime/vehicle/nationwideDistributeMap/" + value,
        type: "GET",
        data: json,
        contentType: "application/json",
        success: function (result) {
            if (result.data) {
                const myChartpie = echarts.init(document.getElementById('pie'));
                BPie(myChartpie, result.data);
            }

        }
    });

    // $.ajax({
    //     url: url + "/serviceArea/realTime/vehicle/vechileTypePie/" + value,
    //     type: "GET",
    //     data: json,
    //     contentType: "application/json",
    //     success: function (result) {
    //         // console.log(result.data);
    //         // carData(result.data);
    //         var datapie = [];
    //         for (let i = 0; i < result.data.length; i++) {
    //             datapie.push({'name': result.data[i].name, 'value': result.data[i].value})
    //         }
    //         console.log(datapie);
    //         Bmap(myChartpie, result.data);
    //         // pie(myChartpie, datapie);
    //         // for (var j = 0; j < result.data.length ; j++) {
    //         //     datapie.push({'name':result.datap[j].name,'value':result.datap[j].value})
    //         // }
    //     }
    // });
}

function getCarportData() {
    setInterval(function () {

        var cartitleleft = '遵义->贵阳';
        var cartitle = '贵阳->遵义';
        leftCar(cartitleleft,'无','无','无');
        rightCar(cartitle,'无','无','无')

    },1000);
    // const myChartdashboard1 = echarts.init(document.getElementById('dashboard1'));
    // dashboard1(myChartdashboard1, '小车车位');
    // const myChartdashboard2 = echarts.init(document.getElementById('dashboard2'));
    // dashboard2(myChartdashboard2, '客车车位');
    // const myChartdashboard3 = echarts.init(document.getElementById('dashboard3'));
    // dashboard3(myChartdashboard3, '货车车位');
}


function getCarportTime() {
    // setInterval(function () {
    $.ajax({
        url: "http://120.77.171.73:8080/highway-sabd/vehicle/get/volume",
        type: "POST",
        data: jsondata,
        contentType: "application/x-www-form-urlencoded",
        success: function (result) {
            if (result.data) {
                // console.log(result.data.VEHICLE_VOLUME_2_3_1_2.goodsCarNum);

                let cartitleleft = result.data.VEHICLE_VOLUME_2_3_1_2.orientation;
                let cartitle =  result.data.VEHICLE_VOLUME_2_3_1_3.orientation;
                left(cartitleleft,result.data.VEHICLE_VOLUME_2_3_1_2.goodsCarNum,result.data.VEHICLE_VOLUME_2_3_1_2.smallCarNum,result.data.VEHICLE_VOLUME_2_3_1_2.passengerCarNum);

                right(cartitle,result.data.VEHICLE_VOLUME_2_3_1_3.goodsCarNum,result.data.VEHICLE_VOLUME_2_3_1_3.smallCarNum,result.data.VEHICLE_VOLUME_2_3_1_3.passengerCarNum)
            }
        }
    });

    $.ajax({
        url: "http://120.77.171.73:8080/highway-sabd/vehicle/query/detention/time",
        type: "POST",
        data: jsondata,
        contentType: "application/x-www-form-urlencoded",
        success: function (result) {
            if (result.data) {
                console.log(result.data);
                rightTime(result.data.VEHICLE_DETENTION_TIME_2_3_1_2.goodsCarDetentionTimeAvg.toFixed(3),result.data.VEHICLE_DETENTION_TIME_2_3_1_2.smallCarDetentionTimeAvg.toFixed(3),result.data.VEHICLE_DETENTION_TIME_2_3_1_2.passengerCarDetentionTimeAvg.toFixed(3));

                leftTime(result.data.VEHICLE_DETENTION_TIME_2_3_1_3.goodsCarDetentionTimeAvg.toFixed(3),result.data.VEHICLE_DETENTION_TIME_2_3_1_3.smallCarDetentionTimeAvg.toFixed(3),result.data.VEHICLE_DETENTION_TIME_2_3_1_3.passengerCarDetentionTimeAvg.toFixed(3))
            }
        }
    });
}
