
function createData(result) {
    var ans = [];
    for(i=0;i<result.length;i++){
        var data;
        data["value"] = result[i].value;
        data["name"] = result[i].name;
        ans.push(data);
        for(var j=0;j<20;j++){
            console.log("just wait...");
        }
    }
    return ans;
}

function showChart(result) {
    console.log(result);
    // getForeign(result.foreign)
    var myCharts = echarts.init(document.getElementById('area_'));
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
            min: 0,
            max: 10000,
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
}

var testData = [
    {name: "北京", value: Math.round(Math.random() * 1000)},
    {name: "天津", value: Math.round(Math.random() * 1000)},
    {name: '上海', value: Math.round(Math.random() * 1000)},
    {name: '重庆', value: Math.round(Math.random() * 1000)},
    {name: '河北', value: Math.round(Math.random() * 1000)},
    {name: '安徽', value: Math.round(Math.random() * 1000)},
    {name: '新疆', value: Math.round(Math.random() * 1000)},
    {name: '浙江', value: Math.round(Math.random() * 1000)},
    {name: '江西', value: Math.round(Math.random() * 1000)},
    {name: '山西', value: Math.round(Math.random() * 1000)},
    {name: '内蒙古', value: Math.round(Math.random() * 1000)},
    {name: '吉林', value: Math.round(Math.random() * 1000)},
    {name: '福建', value: Math.round(Math.random() * 1000)},
    {name: '广东', value: Math.round(Math.random() * 1000)},
    {name: '西藏', value: Math.round(Math.random() * 1000)},
    {name: '四川', value: Math.round(Math.random() * 1000)},
    {name: '宁夏', value: Math.round(Math.random() * 1000)},
    {name: '香港', value: Math.round(Math.random() * 1000)},
    {name: '澳门', value: Math.round(Math.random() * 1000)}
];
showChart(testData);
