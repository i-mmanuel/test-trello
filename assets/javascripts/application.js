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

// Checking for empty imputs

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function editHTML(element, parent_element) {
    var current_text = $(element).html(),
        new_text;

    $(element).remove();
    $(parent_element).prepend('<input type="text" id="rename-input" onClick="this.select();" value=' + current_text + '/>');
    $(parent_element).removeClass('hover-highlight');
    
    console.log('I see you!');

    $('input#rename-input').focusout(function(event) {
        // new_text = $('#rename-input').val();
        // $(parent_element).append('<h1>' + new_text + '</h1>');
        $('input#rename-input').remove();
        // $('title').html(new_text + ' | Trello');
    });

    $('input#rename-input').keypress(function(event) {
        if (event.which == 13) {
            var new_text = $('input#rename-input').val();
            $(parent_element).append('<h1>' + $('input#rename-input').val() + '</h1>');
            $('#rename-input').remove();
            $('title').html(new_text + ' | Trello');
        };
    });
};

$(function() {
    $("div#rename-board form").on("submit", function(event) {
        event.preventDefault();
        var current_title = $("#menu-bar h1").html();
    });

    $('a#board-title').on('click', function(event) {
        event.preventDefault();
    })

    $("a#board-title h1").on("click", function(event) {
        event.preventDefault();
        editHTML('h1.board-name', 'a#board-title');
    });

    $("a#boards-button").on("click", function(event) {
        event.preventDefault();
        $("div#boards-dropdown").slideToggle("slow");
    });
})