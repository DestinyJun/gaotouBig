// function pie(mycharts,data) {
//     const option = {
//         grid: {
//             left: 0,
//             right: 0,
//             bottom: 0,
//             top:0,
//             containLabel: true
//         },
//         tooltip : {
//             trigger: 'item',
//             formatter: "{a}<br/>{b} : {c} ({d}%)"
//         },
//         color:['#14A3C5','#B73462','#3EC7A9','#48DFF1'],
//         series : [
//             {
//                 name: '车流类型',
//                 type: 'pie',
//                 radius : '64%',
//                 center: ['50%', '50%'],
//                 data:data,
//                 itemStyle: {
//                     emphasis: {
//                         shadowBlur: 10,
//                         shadowOffsetX: 0,
//                         shadowColor: 'rgba(0, 0, 0, 0.5)'
//                     }
//                 },
//                 label:{
//                     formatter: "{b}({d}%)",
//                     color: '#14A3C5'
//                 },
//                 labelLine:{
//                     lineStyle: {
//                         color: '#14A3C5',
//                     }
//                 }
//             }
//         ]
//     };
//     mycharts.setOption(option);
// }
function BPie(myChart,data) {
    var uploadedDataURL = "./js/china.json";
    for (var i = 0 ;i<data.length ; i++){
        if (data[i].name === '新疆维吾尔') {
            data[i].name = '新疆';
        }
    }
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('zhongguo', geoJson);
        myChart.hideLoading();
        console.log(geoJson.features[0].properties.cp[0]);
        const geoCoordMap = {};
        const mapFeatures = geoJson.features;
        mapFeatures.forEach(function(v) {
            // 地区名称
            for (var i = 0 ; i< data.length ; i++){
                if (data[i].value !==0 && data[i].name === v.properties.name){
                    const name = v.properties.name;
                    // 地区经纬度
                    geoCoordMap[name] = v.properties.cp;
                }
            }
        });
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                // var geoCoord = data[i].value;
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        option = {
            title: {
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] === 'undefined') {
                        return params.name + ' : ' + params.value+'辆';
                    } else {
                        return params.name + ' : ' + params.value[2]+'辆';
                    }
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['sell_area'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    // color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    color: ['#15B2D8', '#83AAB7', '#0D95B7'] // 黑紫黑
                    // color: ['#23074d', '#cc5333'] // 紫红
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿

                }
            },
            geo: {
                show: true,
                map: 'zhongguo',
                zoom:'1.5',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#2B91B7',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#0A83A0',
                    }
                }
            },
            series: [{
                name: 'credit_pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10000;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FFF'
                    }
                }
            },
                {
                    type: 'map',
                    map: 'zhongguo',
                    geoIndex: 0,
                    aspectScale: 1.4, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: 30,
                    label: {
                        normal: {
                            formatter:function(params) {
                                if (typeof(params.value)[2] === 'undefined') {
                                    return  params.value;
                                } else {
                                    return   params.value[2];
                                }
                            },
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return val[2] / 50000;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        };
        myChart.setOption(option);
    });
}
