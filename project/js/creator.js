var creator_chart = echarts.init(document.getElementById('creator_'));
creator_chart.showLoading();
window.onresize = function () {
    console.log("creator size changed");
    creator_chart.resize();
};

$.get("http://139.199.69.206:8080/creatortop", function (data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var tmp = {};
        tmp.name = data[i].creator_name;
        tmp.value = data[i].creator_count;
        result.push(tmp);
    }
    console.log(result);
    creator_chart.hideLoading();
    var option = {
        title: {
            text: '热门发明人',
            x: 'center',
            textStyle: {
                fontSize: 23
            }

        },
        tooltip: {
            trigger: 'item'
        },
        dataRange: {
            min: 0,
            max: 100,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
        },
        backgroundColor: '#F7F7F7',
        series: [{
            name: '发明人姓名',
            type: 'wordCloud',
            //size: ['9%', '99%'],
            sizeRange: [12, 150],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            shape: 'circle',
            // maskImage: maskImage,
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: result
        }]
    };
    creator_chart.setOption(option);
});