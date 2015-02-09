function getData() {
    _fetch();
    setInterval(_fetch, 15*60*1000);

    function _fetch() {
        var container = $("#container");
        var cloud = new RainyDay({
            image: document.getElementById("backgroundImage")
        });
        $.get("http://api.openweathermap.org/data/2.5/weather?id=5809844", function(data) {
            var htmlStr = "<h1>Nope! =)</h1>";
            for(var r in data.rain) {
                if(Number(data.rain[r]) > 0) {
                    htmlStr = "<h1>Of course...</h1>";
                    cloud.rain([
                        [0, 2, 100], 
                        [3, 3, 1] 
                    ], 200);      // every 500ms
                    break;
                }
            }
            container.html(htmlStr);
        }).fail(function() {
            container.html("<h1>Yeah... something went wrong...</h1>");
        });
    }
}