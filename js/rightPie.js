function pie(mycharts) {
    const option = {
        grid: {
            left: 0,
            right: 0,
            bottom: 0,
            top:0,
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b} : {c} ({d}%)"
        },
        color:['#14A3C5','#B73462','#3EC7A9','#48DFF1'],
        series : [
            {
                name: '车流类型',
                type: 'pie',
                radius : '64%',
                center: ['50%', '50%'],
                data:[
                    {value:1648, name:'小汽车'},
                    {value:335, name:'客车'},
                    {value:310, name:'大巴车'},
                    {value:135, name:'货车'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label:{
                    formatter: "{b}({d}%)",
                    color: '#14A3C5'
                },
                labelLine:{
                    lineStyle: {
                        color: '#14A3C5',
                    }
                }
            }
        ]
    };
    mycharts.setOption(option);
}
