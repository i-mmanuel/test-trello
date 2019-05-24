function dragStartHandler(event) {
    event.dataTransfer.setData("text/html", event.target.id);
};

function allowDrop(event) {
    event.preventDefault();
};

function dropHandler(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/html");
    event.target.closest("ul").append(document.getElementById(data));
};


$(function() {
    $("div#rename-board form").on("submit", function(event) {
        event.preventDefault();
        var current_title = $("#menu-bar h1").html();
    });

    $("a#board-title").on("click", function(event) {
        var current_title = $("#menu-bar h1").html();
        $("#rename-board-input").attr("value", current_title)
        $("div#rename-board").toggle();
    });

    $("img#rename-board-close-button").on("click", function() {
        $("div#rename-board").toggle();
    }); 

    $("a#boards-button").on("click", function(event) {
        event.preventDefault();
        $("div#boards-dropdown").slideToggle("slow");
    });
})