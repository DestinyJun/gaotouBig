// function bar(myBar) {
//     const option = {
//         // color: ['#3EAACC'],
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             },
//             formatter:"{a}</br>{b}客流 : {c}人"
//         },
//         grid: {
//             left: 10,
//             right: 20,
//             bottom: 10,
//             top: 10,
//             containLabel: true
//         },
//         xAxis: [
//             {
//                 type: 'value',
//                 splitLine:{
//                     show:false
//                 },
//                 axisLabel:{color:'#fff'},
//             }
//
//         ],
//         yAxis: [
//             {
//                 type: 'category',
//                 data: ['贵州省', '四川省', '湖南省', '江西省', '湖北省'],
//                 axisTick: {
//                     alignWithLabel: true
//                 },
//                 axisLabel:{color:'#fff'},
//             }
//         ],
//         series: [
//             {
//                 name: '人流分布',
//                 type: 'bar',
//                 barWidth: '40%',
//                 data: [100, 52, 200, 334, 390],
//                 markLine:{
//                     lineStyle:{
//                         color:'#fff'
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         // color:['#14A3C5','#B73462','#3EC7A9','#48DFF1'],
//                         color: function(params){
//                             var colorList = [
//                                 new echarts.graphic.LinearGradient(
//                                     0, 0, 1, 0,
//                                     [
//                                         {offset: 0.2, color: '#840C3D'},
//                                         {offset: 0.4, color: '#980943'},
//                                         {offset: 0.6, color: '#A01C51'},
//                                         {offset: 1, color: '#AE3264'},
//                                     ]
//                                 ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             ),new echarts.graphic.LinearGradient(
//                                 0, 0, 1, 0,
//                                 [
//                                     {offset: 0.2, color: '#087993'},
//                                     {offset: 0.4, color: '#0A8EAF'},
//                                     {offset: 0.6, color: '#2493AF'},
//                                     {offset: 1, color: '#48AFCB'},
//                                 ]
//                             )];
//                             return colorList[params.dataIndex]
//                         }
//
//                     },
//                 },
//             },
//         ]
//     };
//     myBar.setOption(option);
// }

function dataIfo(json,down,up,downtitle,uptitle) {
    if (json.length % 2 === 0){
        var options = '';
        for (var i = 0; i < json.length; i=i+2) {
            options += `<div class="row">
       <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${json[i].head+json[i].value}</span></div>
       <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${json[i+1].head+json[i+1].value}</span></div>
       </div>`;
        }
        $('.basic').html(options);
        var optiontitle = `<div class="row"><span style="margin-left: 10vw ;color: #ffffff">${uptitle}</span>
<div style="width: 25vw;height: 1px;background: white"></div><div>`;
        $('.basic').append(optiontitle);
        if (up.length%2 === 0){
            var optionup = '';
            for (var i = 0; i < up.length; i=i+2) {
                optionup += `<div class="row">
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[i].head+up[i].value}</span></div>
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${up[i+1].head+up[i+1].value}</span></div>
            </div>`;
            $('.basic').append(optionup);
            var optiondowntitle = `<div class="row"><span style="margin-left: 10vw ;color: #3EAACC">${downtitle}</span>
<div style="width: 25vw;height: 1px;background: #3EAACC"></div><div>`;
             $('.basic').append(optiondowntitle);
            }
            if (down.length%2 === 0) {
                var optiondown = '';
                for (var i = 0; i < down.length; i=i+2) {
                optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
               <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
               </div>`;
                $('.basic').append(optiondown);
              }
            }else if (down.length%2 === 1){
                var optiondown = '';
                for (var i = 0; i < down.length-1; i=i+2) {
                 optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
                </div>`;
                    $('.basic').append(optiondown);
                }
                var optiondown1 = `<div class="row">
                    <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[down.length-1].head+down[down.length-1].value}</span></div>
                </div>`;
                $('.basic').append(optiondown1);
            }
        } else if (up.length%2 === 1){
            var optionup1 = '';
            for (var i = 0; i < up.length-1; i=i+2) {
            optionup1 += `<div class="row">
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[i].head+up[i].value}</span></div>
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${up[i+1].head+up[i+1].value}</span></div>
            </div>`;
            }
            $('.basic').append(optionup1);
            var optionup2= `<div class="row">
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[up.length-1].head+up[up.length-1].value}</span></div>
            </div>`;
            $('.basic').append(optionup2);
            var optiondowntitle = `<div class="row"><span style="margin-left: 10vw ;color: #ffffff">${downtitle}</span>
            <div style="width: 25vw;height: 1px;background: white"></div><div>`;
            $('.basic').append(optiondowntitle);
            if (down.length%2 === 0) {
                var optiondown = '';
                for (var i = 0; i < down.length; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
               <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
               </div>`;
                }
                $('.basic').append(optiondown);
            }else if (down.length%2 === 1){
                var optiondown = '';
                for (var i = 0; i < down.length-1; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
                </div>`;
                }
                $('.basic').append(optiondown);
                var optiondown1 = `<div class="row">
                    <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[down.length-1].head+down[down.length-1].value}</span></div>
                </div>`;
                $('.basic').append(optiondown1);
            }
        }
    }else if (json.length %2 === 1){
        var option = '';
        for (var i = 0; i < json.length-1; i=i+2) {
            option += `<div class="row">
          <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${json[i].head+json[i].value}</span></div>
          <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${json[i+1].head+json[i+1].value}</span></div>
          </div>`;
        }
        $('.basic').html(option);
       var  option1 = `<div class="row">
       <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${json[json.length-1].head+json[json.length-1].value}</span></div>
       </div>`;
      $('.basic').append(option1);
      var optiontitle = `<div class="row"><span style="margin-left: 10vw ;color: #3EAACC;text-align: center">${uptitle}</span>
<div style="width: 25vw;height: 1px;background: #3EAACC"></div><div>`;
       $('.basic').append(optiontitle);
        if (up.length%2 === 0){
            var optionup = '';
            for (var i = 0; i < up.length; i=i+2) {
                optionup += `<div class="row">
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[i].head+up[i].value}</span></div>
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${up[i+1].head+up[i+1].value}</span></div>
            </div>`;
            }
            $('.basic').append(optionup);
            var optiondowntitle = `<div class="row"><span style="margin-left: 10vw ;color: #3EAACC">${downtitle}</span>
            <div style="width: 25vw;height: 1px;background: #3EAACC"></div><div>`;
            $('.basic').append(optiondowntitle);
            if (down.length%2 === 0) {
                var optiondown = '';
                for (var i = 0; i < down.length; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
               <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
               </div>`;
                }
                $('.basic').append(optiondown);
            }else if (down.length%2 === 1){
                var optiondown = '';
                for (var i = 0; i < down.length-1; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
                </div>`;
                }
                $('.basic').append(optiondown);
                var optiondown1 = `<div class="row">
                    <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[down.length-1].head+down[down.length-1].value}</span></div>
                </div>`;
                $('.basic').append(optiondown1);
            }
        } else if (up.length%2 === 1){
            var optionup1 = '';
            for (var i = 0; i < up.length-1; i=i+2) {
                optionup1 += `<div class="row">
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[i].head + up[i].value}</span></div>
            <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${up[i + 1].head + up[i + 1].value}</span></div>
            </div>`;
            }
            $('.basic').append(optionup1);
             var optionup2= `<div class="row">
             <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${up[up.length-1].head+up[up.length-1].value}</span></div>
             </div>`;
                $('.basic').append(optionup2);
            var optiondowntitle = `<div class="row"><span style="margin-left: 10vw ;color: #3EAACC">${downtitle}</span>
<div style="width: 25vw;height: 1px;background: #3EAACC"></div><div>
                     `;
            $('.basic').append(optiondowntitle);
            if (down.length%2 === 0) {
                var optiondown = '';
                for (var i = 0; i < down.length; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
               <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
               </div>`;
                }
                $('.basic').append(optiondown);
            }else if (down.length%2 === 1){
                var optiondown = '';
                for (var i = 0; i < down.length-1; i=i+2) {
                    optiondown += `<div class="row">
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[i].head+down[i].value}</span></div>
                <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1vw;padding: 0">${down[i+1].head+down[i+1].value}</span></div>
                </div>`;
                }
                $('.basic').append(optiondown);
                var optiondown1 = `<div class="row">
                    <div class="col-md-6 col-lg-6" style="padding: 0"><span class="pull-left" style="margin-left: 1.2vw ;padding: 0">${down[down.length-1].head+down[down.length-1].value}</span></div>
                </div>`;
                $('.basic').append(optiondown1);
            }
        }
    }
}

