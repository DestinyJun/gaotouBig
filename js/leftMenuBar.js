function bar(myBar) {
    const option = {
        // color: ['#3EAACC'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 0,
            right: 10,
            bottom: 1,
            top: 10,
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                splitLine:{
                    show:false
                },
                axisLabel:{color:'#fff'},
            }

        ],
        yAxis: [
            {
                type: 'category',
                data: ['贵州省', '四川省', '湖南省', '江西省', '湖北省'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{color:'#fff'},
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [100, 52, 200, 334, 390],
                markLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0.2, color: '#399BB9'},
                                {offset: 0.4, color: '#55A0B7'},
                                {offset: 0.6, color: '#71A7B7'},
                                {offset: 1, color: '#83AAB7'},
                            ]
                        )
                    },
                },
                // emphasis: {
                //     color: new echarts.graphic.LinearGradient(
                //         0, 0, 0, 1,
                //         [
                //             {offset: 0.5, color: '#3EAACC'},
                //             {offset: 1, color: '#fff'}
                //         ]
                //     )
                // }
            },
        ]
    };
    myBar.setOption(option);
}