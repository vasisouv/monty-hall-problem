$( document ).ready(function() {

    door = $(".door");
    initializeDoors();
    door.click(function () {
        doorCover = $(this).find($(".door-cover"));
        $(doorCover).fadeOut();

    });
    feather.replace();
});

function initializeDoors() {
    var correctDoorIndex = Math.floor(Math.random() * 3);

    console.log(correctDoorIndex);

    doors = $(".door");

    correctDoor = doors[correctDoorIndex];
    wrongDoors = [];
    for (i=0 ; i<=2 ; i++){
        if(i !== correctDoorIndex){
            wrongDoors.push(doors[i]);
        }
    }
    icon = "<i class='door-icon' data-feather='award'></i>";
    $(correctDoor).find(".door-content").html(icon);

    icon = "<i class='door-icon' data-feather='x-circle'></i>";
    wrongDoors.forEach(function (d) {
        $(d).find(".door-content").html(icon);
    });
    console.log(doors[correctDoorIndex]);
}