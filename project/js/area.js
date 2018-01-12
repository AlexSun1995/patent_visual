var myCharts = echarts.init(document.getElementById('area_'));
myCharts.showLoading();
$.get("http://139.199.69.206:8080/allchinesearea", function (data) {
    result = [];
    for (var i = 0; i < data.length; i++) {
        result.push({
            name: data[i].area,
            value: data[i].area_count
        })
    }
    result.push({
       name: "江苏",
       value: 1451675
    });
    console.log(result);
    // getForeign(result.foreign)
    myCharts.hideLoading();
    var option = {
        title: {
            text: '专利地域分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['专利']
        },
        dataRange: {
            min: 100,
            max: 1000000,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [
            {
                name: '专利',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: result
            }
        ]
    };
    myCharts.setOption(option);
});

