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

function editHTML(element, parent_element) {
    var current_text = $(element).html();
    $(element).remove();
    $(parent_element).append('<input type"text" id="rename-input" value=' + current_text + '/>');
    $('input#rename-input').focusout(function() {
        $(parent_element).append('<h1>' + $('input#rename-input').val() + '</h1>');
        $('#rename-input').remove();
    });
}

$(function() {
    $("div#rename-board form").on("submit", function(event) {
        event.preventDefault();
        var current_title = $("#menu-bar h1").html();
    });

    $("a#board-title h1").on("click", function(event) {
        editHTML('#menu-bar h1', 'a#board-title');
        // $('#board-title').append()
        // $("#rename-board-input").attr("value", current_title)
        // $("div#rename-board").toggle();
    });

    $("img#rename-board-close-button").on("click", function() {
        $("div#rename-board").toggle();
    }); 

    $("a#boards-button").on("click", function(event) {
        event.preventDefault();
        $("div#boards-dropdown").slideToggle("slow");
    });
})