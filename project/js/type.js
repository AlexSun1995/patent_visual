
var dict = {
    "invention": "37865",
    "appearance": "9306",
    "functional": "38403"
};

function showChart(result) {
    var type_chart = echarts.init(document.getElementById("type_"));
    type_chart.setOption(option = {
        title : {
            text : '专利申请分类统计',
            subtext : 'main_classify_code',
            x : 'center'
        },
        tooltip : {
            trigger : 'item',
            formatter : "{a} <br/>{b} : {c} ({d}%)"
        },
        legend : {
            orient : 'vertical',
            x : 'left',
            bottom: "10%",
            data : [ '[A]发明专利', '[B]外观专利', '[C]新型实用专利']
        },
        grid:{
            y2:"20%"
        },
        toolbox : {
            show : true,
            feature : {
                mark : {
                    show : true
                },
                dataView : {
                    show : true,
                    readOnly : false
                },
                magicType : {
                    show : true,
                    type : [ 'pie', 'funnel' ],
                    option : {
                        funnel : {
                            x : '25%',
                            width : '50%',
                            funnelAlign : 'left',
                            max : 1548
                        }
                    }
                },
                restore : {
                    show : true
                },
                saveAsImage : {
                    show : true
                }
            }
        },
        calculable : true,
        series: [{
            name : '专利申请分类统计',
            type : 'pie',
            radius : '55%',
            center : [ '60%', '60%' ],
            data : [ {
                value : result.invention,
                name : '[A]发明专利'
            }, {
                value : result.appearance,
                name : '[B]外观专利'
            }, {
                value : result.functional,
                name : '[C]新型实用专利'
            }]
        }]
    });
}
showChart(dict);