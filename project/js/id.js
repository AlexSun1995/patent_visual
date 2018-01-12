// 展示分类号饼图
// for get method
// $.ajax({
//     url: "http://echarts.baidu.com/data/asset/data/aqi-beijing.json",
//     type: "GET",
//     dataType: 'jsonp',
//     success: function(result){
//         console.log(result);
//     }
// });

function showPieChart(result) {
    var class_chart = echarts.init(document.getElementById("id_"));
    class_chart.setOption(option = {
        title: {
            text: '主分类号统计',
            subtext: 'main_classify_code',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            bottom: "10%",
            data: ['[A]人类生活必需', '[B]作业、运输', '[C]化学、冶金',
                '[D]纺织、造纸', '[E]固定建筑物',
                '[F]机械工程、照明、加热、武器、爆破', '[G]物理', '[H]电学',
                '[其他]']
        },
        grid: {
            y2: "20%"
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [{
            name: '主分类号统计',
            type: 'pie',
            radius: '55%',
            center: ['60%', '60%'],
            data: [{
                value: result.A,
                name: '[A]人类生活必需'
            }, {
                value: result.B,
                name: '[B]作业、运输'
            }, {
                value: result.C,
                name: '[C]化学、冶金'
            }, {
                value: result.D,
                name: '[D]纺织、造纸'
            }, {
                value: result.E,
                name: '[E]固定建筑物'
            }, {
                value: result.F,
                name: '[F]机械工程、照明、加热、武器、爆破'
            }, {
                value: result.G,
                name: '[G]物理'
            }, {
                value: result.H,
                name: '[H]电学'
            }, {
                value: result.O,
                name: '[其他]'
            }]
        }]
    });
}

result_main = {
    "D": "1251",
    "E": "5777",
    "F": "12442",
    "G": "10789",
    "A": "6388",
    "B": "20243",
    "C": "8201",
    "O": "9640",
    "H": "14923"
};
showPieChart(result_main);