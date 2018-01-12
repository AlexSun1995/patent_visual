function isEmptyObject(obj) {
    for(var key in obj) {
        return false;
    }
    return true;
}
function submitSearchKey() {
    var search_key = $('#search-form').serialize();
    var result = [];
    // $.get("http://120.78.193.114:9200/patent/2015/_search?" + search_key, function (data) {
    //     console.log(data.length);
    //     var arr = data.hits.hits;
    //     for (var i = 0; i < arr.length; i++) {
    //         var tmp = arr[i]._source;
    //         //console.log(tmp);
    //         result.push(tmp);
    //     }
    //     // no highlight so change to post method...
    //     // show(result);
    // });

    var search_post = {
        "query": {
            "multi_match": {

                "query": document.getElementById("search-text-value").value,
                "type": "most_fields",
                "fields": ["name", "patent_agent", "patent_id", "classify_code", "apply_date", "invent_man"]
            }

        },
        "highlight": {
            "pre_tags": ["<span style='color:red'>"],
            "post_tags": ["</span>"],
            "fields": {
                "name": {}
            }
        }
    };
    $.ajax({
        type: 'POST',
        url: "http://120.78.193.114:9200/patent/2015/_search",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(search_post),
        dataType: 'json',
        success: function (data) {
            console.log("ok, from post");
            console.log(data);
            var arr = data.hits.hits;
            for (var i=0; i < arr.length; i++) {
                var tmp = arr[i]._source;
                var highlight = arr[i].highlight;
                if (!isEmptyObject(highlight)) {
                    console.log(highlight);
                    tmp.name = highlight.name[0];
                }
                //console.log(tmp);
                result.push(tmp);
            }
            show(result);
        },
        error: function (message) {
            alert(message)
        }
    });

    function show(data) {
        console.log(data);
        $("#info").empty();
        $("#info").append('找到' + data.length + '条结果');
        var length = Math.min(30, data.length);
        for (var i = 0; i < length; i++) {
            $("#info").append('<div><div class="panel panel-default"><div class="panel-heading"><h4>' + data[i].name + '</h4></div></div>'
                + '<div class="row"><div class="col-md-4"><p>发明人：' + data[i].invent_man + '</p><p>专利号：' + data[i].patent_id + '</p>'
                + '<p>代理机构：' + data[i].patent_agent + '</p><p>申请日期：' + data[i].apply_date + '</p></div>'
                + '<div class="col-md-8"> 专利分类号：</p><p>' + data[i].classify_code + '</p>'
                + '</div></div><br>');
        }

    }

}