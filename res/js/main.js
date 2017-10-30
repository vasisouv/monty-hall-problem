$( document ).ready(function() {

    description = $("#description");
    game = $("#game");


    $("#getStarted").click(function () {
        description.hide();
        game.show();

    })
});