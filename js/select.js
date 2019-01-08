var http = 'http://120.78.137.182:8888/';
var provinceOption = '';
var cityOption = '';
var areaOption = '';

//  1.请求数据，获取省的名字和Id
$.ajax({
    url: http+"highway-management/administrativeArea/queryByParentId/0",
    type: "GET",
    contentType: "application/json",
    success: function (result) {
        provinceOption = '';
        result.data.unshift({id: null, areaName: '请选择区域'});
        // console.log(result);
        for(var i = 0; i < result.data.length;i++) {
            provinceOption +=`<option id="${result.data[i].id}">${result.data[i].areaName}</option>`;
        }
        $('#select').html(provinceOption);
    }
});
// 2.当下拉框数据更改时，传出省的id和名字
function cityChange(elment) {
    // console.log(elment);
    console.log(elment.srcElement.selectedOptions[0].id);
    var id =elment.srcElement.selectedOptions[0].id;
    $.ajax({
        url:http+"highway-management/administrativeArea/queryByParentId/"+id,
        type:"GET",
        contentType:"application/json",
        success: function (result) {
            cityOption = '';
            result.data.unshift({id: null, areaName: '请选择区域'});
            for(var i = 0; i<result.data.length;i++) {
                cityOption +=`<option id="${result.data[i].id}">${result.data[i].areaName}</option>`;
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
        url:http+"highway-management/common/config//getServiceAreaByAdministrativeAreaId/"+id,
        type:"GET",
        contentType:"application/json",
        success: function (result) {
            areaOption = '';
            result.data.unshift({id: null, name: '请选择区域'});
            // console.log(result.data);
            for(var i = 0; i<result.data.length;i++) {
                areaOption +=`<option id="${result.data[i].id}">${result.data[i].name}</option>`;
            }
            console.log(areaOption);
            $('#area').html(areaOption);
        }
    });
}