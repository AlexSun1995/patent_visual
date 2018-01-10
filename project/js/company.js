// 模拟传过来的json 数据
json = [
    {
        "count": "13197",
        "word": "海洋王"
    },
    {
        "count": "3747",
        "word": "美的"
    },
    {
        "count": "2998",
        "word": "比亚迪"
    },
    {
        "count": "2232",
        "word": "格力"
    },
    {
        "count": "1418",
        "word": "南车"
    },
    {
        "count": "1330",
        "word": "中铁"
    },
    {
        "count": "1187",
        "word": "九阳"
    },
    {
        "count": "1112",
        "word": "奥飞"
    },
    {
        "count": "1016",
        "word": "江淮汽车"
    },
    {
        "count": "926",
        "word": "海尔"
    },
    {
        "count": "917",
        "word": "福田"
    },
    {
        "count": "867",
        "word": "北汽"
    },
    {
        "count": "797",
        "word": "中冶"
    },
    {
        "count": "710",
        "word": "葛洲坝"
    },
    {
        "count": "682",
        "word": "国家电网"
    },
    {
        "count": "638",
        "word": "中国建筑"
    },
    {
        "count": "629",
        "word": "新宝电器"
    },
    {
        "count": "562",
        "word": "奥迪"
    },
    {
        "count": "555",
        "word": "歌尔声学"
    },
    {
        "count": "470",
        "word": "北新"
    },
    {
        "count": "462",
        "word": "大北农"
    },
    {
        "count": "419",
        "word": "中联重科"
    },
    {
        "count": "418",
        "word": "欧菲光"
    },
    {
        "count": "409",
        "word": "梅雁吉祥"
    },
    {
        "count": "403",
        "word": "科伦药业"
    },
    {
        "count": "387",
        "word": "中交"
    },
    {
        "count": "373",
        "word": "国电"
    },
    {
        "count": "359",
        "word": "长城汽车"
    },
    {
        "count": "341",
        "word": "大洋电机"
    },
    {
        "count": "330",
        "word": "鑫龙电器"
    }
];
data = [];
for (var i=0;i<json.length;i++) {
    var tmp = {};
    tmp.name = json[i].word;
    tmp.value = json[i].count;
    data.push(tmp);
}

function showChart(result) {
    console.log(result);
    var agent_chart = echarts.init(document.getElementById("company_"));
    var option = {
        title: {
            text: '关键词指数',
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
    agent_chart.setOption(option);
}
showChart(data);