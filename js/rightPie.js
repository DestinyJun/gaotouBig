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
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '车流类型',
                type: 'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'客车'},
                    {value:310, name:'大巴车'},
                    {value:234, name:'货车'},
                    {value:135, name:'油气车'},
                    {value:1648, name:'小汽车'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    mycharts.setOption(option);
}
