// 热门发明人视图
var data = [];
keywords = {
    "不公告发明人":39791,
    "不公告设计人":25114,
    "张伟":12252,
    "王伟":10861,
    "王勇":10006,
    "王磊":9576,
    "李伟":9563,
    "张磊":9283
};
for (var key in keywords) {0
    data.push({
        name: key,
        value: Math.sqrt(keywords[key])
    })
}
// var maskImage = new Image();
// maskImage.src = 'imgs/key.png';
function  showChart(data) {
    var option = {
        title: {
            text: '热门发明人',
            x: 'center',
            textStyle: {
                fontSize: 23
            }

        },
        tooltip:{
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
            sizeRange: [12, 80],
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
                    color: function() {
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
            data: data
        }]
    };
    var creator_chart = echarts.init(document.getElementById('creator_'));
    creator_chart.setOption(option);

    window.onresize = function() {
        console.log("creator size changed");
        creator_chart.resize();
    };
}
showChart(data);
