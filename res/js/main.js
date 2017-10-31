$( document ).ready(function() {

    door = $(".door");
    doorCover = $(".door-cover");
    doorContent = $(".door-content");
    repeat = $(".btn-repeat");

    keepCounter = 0;
    gamesPlayedKeepCounterObj = $("#gamesPlayedKeep");
    wonKeepCounter = 0;
    gamesWonKeepCounterObj = $("#gamesWonKeep");
    winKeepPercObj = $("#winPercKeep");

    switchCounter = 0;
    gamesPlayedSwitchCounterObj = $("#gamesPlayedSwitch");
    wonSwitchCounter = 0;
    gamesWonSwitchCounterObj = $("#gamesWonSwitch");
    winSwitchPercObj = $("#winPercSwitch");

    initializeDoors();

    door.click(function () {
        switch(stage) {
            case 1:
                firstChoiceDoor = this;
                do{
                    console.log("entered");
                    revealedDoorIndex = Math.floor(Math.random() * 2);
                    revealedDoor = wrongDoors[revealedDoorIndex];
                }while (revealedDoor === this);
                wrongDoors.splice(revealedDoorIndex, 1);
                doorCoverObj = $(revealedDoor).find(doorCover);
                $(doorCoverObj).fadeOut();
                info = $("#info");
                info.html("A door that contains nothing is revealed! Click the same door " +
                    "to keep your choice or click the other door to change. ");
                // doorCover = $(this).find($(".door-cover"));
                // $(doorCover).addClass('bg-primary-dark').removeClass('bg-primary');
                stage+=1;
                break;
            case 2:

                if (this !== revealedDoor){
                    $(".door-cover").each(function (i,obj) {
                        $(obj).fadeOut();
                    });
                    if (this === correctDoor){
                        $(this).find($(".door-content")).addClass('bg-success').removeClass('bg-secondary');
                        info.html("You won the game!");
                        won = true;
                    }
                    else{
                        $(this).find(doorContent).addClass('bg-danger').removeClass('bg-secondary');
                        $(correctDoor).find(doorContent).addClass('bg-success').removeClass('bg-secondary');
                        info.html("You lost the game!");

                    }
                    if (this === firstChoiceDoor){
                        console.log("door selected = same as the first");
                        keepCounter+=1;
                        $(gamesPlayedKeepCounterObj).html(keepCounter);
                        if (won){
                            wonKeepCounter +=1;
                            $(gamesWonKeepCounterObj).html(wonKeepCounter);
                        }
                        $(winKeepPercObj).html((100*(wonKeepCounter/keepCounter)).toFixed(2)+" %");
                    }else{
                        switchCounter+=1;
                        $(gamesPlayedSwitchCounterObj).html(switchCounter);
                        if (won){
                            wonSwitchCounter +=1;
                            $(gamesWonSwitchCounterObj).html(wonSwitchCounter);
                        }
                        $(winSwitchPercObj).html((100*(wonSwitchCounter/switchCounter)).toFixed(2)+" %");
                    }
                    stage+=1;
                    repeat.css("visibility","visible");
                    break;
                }
                else{
                    break;
                }
            case 3:
        }
    });
    repeat.click(function () {
       initializeDoors();
    });
    feather.replace();
});

function initializeDoors() {
    stage = 1;
    won = false;
    $(repeat).css("visibility","hidden");
    doors = $(".door");
    doors.each(function (i,obj) {
        $(obj).find(doorCover).show();
        $(obj).find(doorContent).removeClass("bg-danger bg-success").addClass("bg-secondary");
    });
    correctDoorIndex = Math.floor(Math.random() * 3);

    correctDoor = doors[correctDoorIndex];
    wrongDoors = [];
    for (i=0 ; i<=2 ; i++){
        if(i !== correctDoorIndex){
            wrongDoors.push(doors[i]);
        }
    }
    icon = "<i class='door-icon' data-feather='award'></i>";
    $(correctDoor).find(".door-content").html(icon);

    icon = "<i class='door-icon ' data-feather='x-circle'></i>";
    wrongDoors.forEach(function (d) {
        $(d).find(".door-content").html(icon);
    });
    feather.replace();
}