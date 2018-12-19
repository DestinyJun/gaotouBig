function  dashboard1(mychart) {
   const option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                type: 'gauge',
                startAngle:'360',
                endAngle:'360',
                detail: {
                    formatter:'{value}%',
                    fontSize:10,
                    offsetCenter:'50%'
                },
                axisLine:{
                    lineStyle: {
                        width: 6,
                        color: [[0,'#0D89AD'],[1,'#0D89AD']]
                    }
                },
                axisTick:{
                    lineStyle:{
                        color:'#71A7B7'
                    }
                },
                data: [{value: 0}],
                splitLine:{
                    show:'false',
                    length:0,
                },
                pointer:'false',
                axisLabel:'false'
            },

        ]
    };

    setInterval(function () {
        option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[0].value =((360-option.series[0].endAngle)/3.6).toFixed(2);
        mychart.setOption(option, true);
    },2000);
    mychart.setOption(option,true);
}
function  dashboard2(mychart) {
    const option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                type: 'gauge',
                startAngle:'360',
                endAngle:'360',
                detail: {
                    formatter:'{value}%',
                    fontSize:10,
                    offsetCenter:'50%'
                },
                axisLine:{
                    lineStyle:{
                        width:6,
                        color: [[0,'#0D89AD'],[1,'#0D89AD']]
                    }
                },
                axisTick:{
                    lineStyle:{
                        color:'#71A7B7'
                    }
                },
                data: [{value: 0}],
                splitLine:{
                    show:'false',
                    length:0,
                },
                pointer:'false',
                axisLabel:'false'
            },

        ]
    };

    setInterval(function () {
        option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[0].value = ((360-option.series[0].endAngle)/3.6).toFixed(2);
        mychart.setOption(option, true);
    },2000);
    mychart.setOption(option,true);
}
function  dashboard3(mychart) {
   const option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                type: 'gauge',
                startAngle:'360',
                endAngle:'360',
                detail: {
                    formatter:'{value}%',
                    fontSize:10,
                    offsetCenter:'50%'
                },
                axisLine:{
                    lineStyle:{
                        width:6,
                        color: [[0,'#0D89AD'],[1,'#0D89AD']]
                    }
                },
                axisTick:{
                    lineStyle:{
                        color:'#71A7B7'
                    }
                },
                data: [{value: 0}],
                splitLine:{
                    show:'false',
                    length:0,
                },
                label:{
                    name:'厕所使用率'
                },
                pointer:'false',
                axisLabel:'false'
            },

        ]
    };

    setInterval(function () {
        option.series[0].endAngle = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[0].value = ((360-option.series[0].endAngle)/3.6).toFixed(2);
        mychart.setOption(option, true);
    },2000);
    mychart.setOption(option,true);
}