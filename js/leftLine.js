function line(mychart) {
    // const option = {
    //     grid: {
    //         left: 0,
    //         right: 0,
    //         bottom: '3%',
    //         top: 0,
    //         containLabel: true
    //     },
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         data: [300, 532, 120, 40, 400],
    //         type: 'line',
    //         areaStyle: {},
    //         smooth: true
    //
    //     },
    //         {
    //             data: [120, 262, 500, 84, 400],
    //             type: 'line',
    //             areaStyle: {},
    //             smooth: true
    //         }]
    // };

    var myData = ['中式快餐', '西式快餐', '小吃', '住宿', '商超', '汽修'];
    var lineData = [100, 100, 100, 100, 100, 100];
    var thisYearData = {
        1: [11, 38, 23, 39, 66, 66]
    };
    var timeLineData = [1];
    var background = "#0C1212"; //背景

    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend : {
                top : '5%',
                left : '31%',
                itemWidth : 10,
                itemHeight : 22,
                itemGap: 343,
                icon : 'horizontal',
                textStyle : {
                    color : '#ffffff',
                    fontSize : 5,
                },
                data: ['']
            },
            grid: [{
                show: false,
                left: '10%',
                top: '5%',
                bottom: 0,
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '18%',
                top: '5%',
                bottom: 0,
                width: '0%'
            }, {
                show: false,
                left: '28%',
                top: '5%',
                bottom:0,
                containLabel: true,
                width: '50%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: myData
            }],
            series: []

        },
        options: []
    };

    option.baseOption.timeline.data.push(timeLineData[0]);
    option.options.push({
        series: [
            {
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#4890A5'
                    }
                },
                barWidth: 10,
                symbolRepeat: true,
                symbolSize: [2,10],
                data: lineData,
                barGap: '-100%',
                barCategoryGap: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: (series) => {
                            return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                        },
                        position: 'right',
                        textStyle:{
                            color: '#ffffff',
                            fontSize: 12,
                        },
                        offset: [15, -1],
                    }
                },
                z: -100,
                animationEasing: 'elasticOut',
                animationDelay: function (dataIndex, params) {
                    return params.index * 30;
                }
            }, {
                name: '消费喜好',
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#007CA0'
                    }
                },
                symbolRepeat: true,
                symbolSize: [3,10],
                data: thisYearData[timeLineData[0]],
                animationEasing: 'elasticOut',
                animationDelay: function (dataIndex, params) {
                    return params.index * 30 * 1.1;
                }
            }
        ]
    });

    mychart.setOption(option);
}