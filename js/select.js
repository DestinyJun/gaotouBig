// var http = 'http://123.249.28.108:8889/highway-sabd';
var http = 'http://120.77.171.73:8080/highway-sabd';
var provinceOption = '';
var cityOption = '';
var areaOption = '';
//  1.请求数据，获取省的名字和Id
var json =getJson();
$.ajax({
    url: http + "/serviceArea/config/getProvince",
    type: "GET",
    data: json,
    contentType: "application/json",
    success: function (result) {
        provinceOption = '';
        result.data.unshift({id: null, areaName: '请选择省：'});
        // console.log(result);
        for (var i = 0; i < result.data.length; i++) {
            provinceOption += `<option id="${result.data[i].id}">${result.data[i].areaName}</option>`;
        }
        $('#select').html(provinceOption);
    }
});
cityOption =`<option id="">请选择市：</option>`;
$('#city').html(cityOption);
areaOption =`<option id="">请选择服务区：</option>`;
$('#area').html(areaOption);

// 2.当下拉框数据更改时，传出省的id和名字
function cityChange(elment) {
    // console.log(elment);
    console.log(elment.srcElement.selectedOptions[0].id);
    var id =elment.srcElement.selectedOptions[0].id;
    $.ajax({
        url:http+"/serviceArea/config/getCityByProvinceId/"+id,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            cityOption = '';
            result.data.unshift({id: null, areaName: '请选择市：'});
            for(var i = 0; i<result.data.length;i++) {
                cityOption +=`<option id="${result.data[i].id}" name="${result.data[i].areaName}">${result.data[i].areaName}</option>`;
            }
            $('#city').html(cityOption);
        }
    });
}
// 3.传出省的id,查询出相应的市
function areaChange(elment) {
    // console.log(elment.srcElement.selectedOptions[0].id);
    var id =elment.srcElement.selectedOptions[0].id;
    $.ajax({
        url:http+"/serviceArea/config/getServiceAreaByCityId/"+id,
        type:"GET",
        data:json,
        contentType:"application/json",
        success: function (result) {
            areaOption = '';
            result.data.unshift({id: null, name: '请选择服务区：'});
            // console.log(result.data);
            for(var i = 0; i<result.data.length;i++) {
                areaOption +=`<option id="${result.data[i].id}" title="${result.data[i].name}" value="bigdata.html">${result.data[i].name}</option>`;
            }
            console.log(areaOption);
            $('#area').html(areaOption);
        }
    });
}
function routing(elment){
    window.localStorage.setItem("id", elment.srcElement.selectedOptions[0].id);
    window.sessionStorage.setItem("title", elment.srcElement.selectedOptions[0].title);
    if (elment.srcElement.selectedOptions[0].id != 1){
        alert('该服务区还未开放，当前开放服务区：久长服务区')
    } else {
        self.location.href=elment.srcElement.selectedOptions[0].value+'?value='+elment.srcElement.selectedOptions[0].id+',title='+elment.srcElement.selectedOptions[0].title;
    }
}

