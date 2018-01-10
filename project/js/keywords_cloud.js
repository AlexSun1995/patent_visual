var data = [];
keywords = {
    "Naive": 22199,
    "你们啊！": 10288,
    "so far": 531410,
    "主播": 335610,
    "谦虚": 620,
    "上海": 274470,
    "交大": 12311,
    "教授":23011,
    "一致通过": 56333,
    "热烈滴竹霍": 55561,
    "苟利": 1206,
    "坠吼滴": 4885,
    "没有这个能力": 32294,
    "我们学生": 18574,
    "脑力": 38929,
    "简单": 57299

};
for (var key in keywords) {
    data.push({
        name: key,
        value: Math.sqrt(keywords[key])
    })
}
// var maskImage = new Image();
// maskImage.src = 'imgs/key.png';
var option = {
    title: {
        text: '关键词指数',
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
        name: '关键词',
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
var word_chart = echarts.init(document.getElementById('keywords_'));
word_chart.setOption(option);
window.onresize = function() {
    console.log("keyword size changed");
    word_chart.resize();
};