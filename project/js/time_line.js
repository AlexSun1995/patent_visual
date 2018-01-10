var testData = {
    "1990": "30464",
    "1991": "36911",
    "1992": "50001",
    "1993": "43664",
    "1994": "58296",
    "1995": "56742",
    "1996": "66141",
    "1997": "77083",
    "1998": "91012",
    "1999": "125992",
    "2000": "132150",
    "2001": "151179",
    "2002": "173156",
    "2003": "220008",
    "2004": "236920",
    "2005": "316971",
    "2006": "373540",
    "2007": "485383",
    "2011": "1123287",
    "2012": "1561940",
    "2013": "1806108",
    "2009": "712741",
    "2008": "561146",
    "2010": "959675",
    "2014": "1842099",
    "2015": "2289346",
    "2016": "798897"
};
function getYdata(result) {
    data = [];
    for(var key in result){
       data.push(parseInt(result[key]));
    }
    console.log(data);
    return data;
}
function showChart(result) {
    var timeChart = echarts.init(document.getElementById("time_"));
    option = {
        title: {
            text: '历年专利申请数量趋势'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['专利申请数量']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005',
                    '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 件'
                }
            }
        ],
        series: [
            {
                name: '专利申请数量',
                type: 'line',
                data: getYdata(result)
            },
            {
                name: '专利申请数量',
                type: 'bar',
                data: getYdata(result)
            }
        ]
    };

    timeChart.setOption(option);
}
showChart(testData);