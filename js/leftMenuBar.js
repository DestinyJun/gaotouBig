function bar(myBar) {
    const option = {
        // color: ['#3EAACC'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:"{a}</br>{b}客流 : {c}人"
        },
        grid: {
            left: 10,
            right: 20,
            bottom: 10,
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
                name: '人流分布',
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
                        // color:['#14A3C5','#B73462','#3EC7A9','#48DFF1'],
                        color: function(params){
                            var colorList = [
                                new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0.2, color: '#840C3D'},
                                        {offset: 0.4, color: '#980943'},
                                        {offset: 0.6, color: '#A01C51'},
                                        {offset: 1, color: '#AE3264'},
                                    ]
                                ),new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0.2, color: '#087993'},
                                    {offset: 0.4, color: '#0A8EAF'},
                                    {offset: 0.6, color: '#2493AF'},
                                    {offset: 1, color: '#48AFCB'},
                                ]
                            ),new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0.2, color: '#087993'},
                                    {offset: 0.4, color: '#0A8EAF'},
                                    {offset: 0.6, color: '#2493AF'},
                                    {offset: 1, color: '#48AFCB'},
                                ]
                            ),new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0.2, color: '#087993'},
                                    {offset: 0.4, color: '#0A8EAF'},
                                    {offset: 0.6, color: '#2493AF'},
                                    {offset: 1, color: '#48AFCB'},
                                ]
                            ),new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0.2, color: '#087993'},
                                    {offset: 0.4, color: '#0A8EAF'},
                                    {offset: 0.6, color: '#2493AF'},
                                    {offset: 1, color: '#48AFCB'},
                                ]
                            )];
                            return colorList[params.dataIndex]
                        }

                    },
                },
            },
        ]
    };
    myBar.setOption(option);
}