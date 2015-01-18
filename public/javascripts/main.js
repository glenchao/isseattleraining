function getData() {
    _fetch();
    setInterval(_fetch, 15*60*1000);

    function _fetch() {
        var container = $("#container");
        $.get("http://api.openweathermap.org/data/2.5/weather?id=5809844", function(data) {
            var htmlStr = "<h1>Nope! =)</h1>";
            for(var r in data.rain) {
                if(Number(data.rain[r]) > 0) {
                    htmlStr = "<h1>Of course...</h1>";
                    break;
                }
            }
            container.html(htmlStr);
        }).fail(function() {
            container.html("<h1>Yeah... something went wrong...</h1>");
        });
    }
}