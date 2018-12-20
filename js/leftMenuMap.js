function Bmap(myChart) {
    var uploadedDataURL = "./js/china.json";
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('zhongguo', geoJson);
        myChart.hideLoading();
        var geoCoordMap = {
            "海南": [110.17, 19.92],
            "河南": [113.700339, 34.751827],
            "河北": [114.54095, 38.058913],
            "湖北": [114.289984, 30.5942],
            "广东": [113.293215, 23.102603],
            "湖南": [113.03042, 28.188898],
            "江西": [115.911671, 28.658012],
            "黑龙江": [126.629804, 45.774197],
            "四川": [104.112035, 30.630737],
            "安徽": [117.321109, 31.850184],
            "贵州": [106.663601,26.647641],
        };
        var data = [{
            name: '海南',
            value: 9925
        },
            {
                name: '河南',
                value: 17737
            },
            {
                name: '河北',
                value: 13177
            },
            {
                name: '湖北',
                value: 12174
            },
            {
                name: '广东',
                value: 8230
            },
            {
                name: '贵州',
                value: 18230
            },
            {
                name: '湖南',
                value: 8173
            },
            {
                name: '江西',
                value: 7423
            },
            {
                name: '黑龙江',
                value: 6829
            },
            {
                name: '四川',
                value: 6158
            },
            {
                name: '安徽',
                value: 5930
            },
            {
                name: '浙江',
                value: 0
            },
            {
                name: '福建',
                value: 0
            },
            {
                name: '新疆',
                value: 0
            },
            {
                name: '西藏',
                value: 0
            },
            {
                name: '青海',
                value: 0
            },
            {
                name: '甘肃',
                value: 0
            },
            {
                name: '青海',
                value: 0
            },
            {
                name: '宁夏',
                value: 0
            },
            {
                name: '内蒙古',
                value: 0
            },
            {
                name: '陕西',
                value: 0
            },
            {
                name: '山东',
                value: 0
            },
            {
                name: '辽宁',
                value: 0
            },
            {
                name: '吉林',
                value: 0
            },
            {
                name: '江苏',
                value: 0
            },
            {
                name: '广西',
                value: 0
            },
            {
                name: '台湾',
                value: 0
            },
            {
                name: '云南',
                value: 0
            },
            {
                name: '山西',
                value: 0
            },
            {
                name: '重庆',
                value: 0
            },
            {
                name: '天津',
                value: 0
            },
            {
                name: '北京',
                value: 0
            },
        ];

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
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
            // grid: {
            //     left: 10,
            //     right: 20,
            //     bottom: 10,
            //     top: 10,
            //     containLabel: true
            // },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] === 'undefined') {
                        return params.name + ' : ' + params.value+'人';
                    } else {
                        return params.name + ' : ' + params.value[2]+'人';
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

