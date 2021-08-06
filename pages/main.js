function ConsumirServicio1() {
    $.ajax({
        type: "GET",
        url: "https://httpbin.org/get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#txt1").val(data);
        },
        failure: function (data) {
            alert(data.responseText);
        },
        error: function (data) {
            alert(data.responseText);
        }
    });
}