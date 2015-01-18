function getData() {
    var container = $("#container");
    $.get("http://api.openweathermap.org/data/2.5/weather?id=5809844", function(data) {
        var htmlStr = "<h1>No</h1>";
        for(var r in data.rain) {
            if(Number(data.rain[r]) > 0) {
                htmlStr = "<h1>Of course...</h1>";
                break;
            }
        }
        container.html(htmlStr);
    }).fail(function() {
        container.html("<h1>Yeah... something went wrong...</h1>");
    })
}