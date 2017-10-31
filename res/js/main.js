$( document ).ready(function() {

    door = $(".door");
    doorCover = $(".door-cover");
    doorContent = $(".door-content");
    repeat = $(".btn-reset");
    simForm = $("#simulationForm");
    resSimulationBtn = $("#resetSimulationBtn");

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
        playGame(this);
    });

    simForm.submit(function( event ) {
        event.preventDefault();
        runSimulation();
    });

    resSimulationBtn.click(function () {
        resetSimulation();
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
function playGame(doorClicked){
    switch(stage) {
        case 1:
            firstChoiceDoor = this;
            do{
                revealedDoorIndex = Math.floor(Math.random() * 2);
                revealedDoor = wrongDoors[revealedDoorIndex];
            }while (revealedDoor === doorClicked);
            wrongDoors.splice(revealedDoorIndex, 1);
            doorCoverObj = $(revealedDoor).find(doorCover);
            $(doorCoverObj).fadeOut();
            info = $("#info");
            info.html("A door that contains nothing is revealed! Click the same door " +
                "to keep your choice or click the other door to switch your selection. ");
            // doorCover = $(this).find($(".door-cover"));
            // $(doorCover).addClass('bg-primary-dark').removeClass('bg-primary');
            stage+=1;
            break;
        case 2:
            if (doorClicked !== revealedDoor){
                $(".door-cover").each(function (i,obj) {
                    $(obj).fadeOut();
                });
                if (doorClicked === correctDoor){
                    $(doorClicked).find($(".door-content")).addClass('bg-success').removeClass('bg-secondary');
                    info.html("You won!");
                    won = true;
                }
                else{
                    $(doorClicked).find(doorContent).addClass('bg-danger').removeClass('bg-secondary');
                    $(correctDoor).find(doorContent).addClass('bg-success').removeClass('bg-secondary');
                    info.html("You lost!");
                }
                if (doorClicked === firstChoiceDoor){
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
}
function runSimulation() {
    simForm.hide();
    progressBarContainer = $(".progress-bar-container");
    progressBar = $("#progressBar");

    // prepare simulation required values
    simTimes = $("#simNumber").val();
    if($('#keepStrat').is(':checked'))
        strategy = "keep";
    else strategy = "switch";
    progressBarContainer.show();


    progressBar.attr( "aria-valuemax", simTimes );
    currentProgress = 0;

    simsWon = 0; simsLost = 0;
    // begin the simulation
    tableRef = document.getElementById('extendedResultsTable').getElementsByTagName('tbody')[0];
    setTimeout(function(){
        for (i=0 ; i<simTimes ; i++){
            simDoors = ["door 1","door 2","door 3"];

            simCorrectDoorIndex = Math.floor(Math.random() * 3);
            simCorrectDoor = simDoors[simCorrectDoorIndex];

            simWrongDoors = [];
            simDoors.forEach(function (d) {
                if (d !== simCorrectDoor){
                    simWrongDoors.push(d);
                }
            });


            simDoorChoiceIndex = Math.floor(Math.random() * 3);
            simDoorChoice = simDoors[simDoorChoiceIndex];


            do {
                simRevealedDoorIndex = Math.floor(Math.random() * 2);
                simRevealedDoor = simWrongDoors[simRevealedDoorIndex];
            }while (simRevealedDoor === simDoorChoice);

            if (strategy === "switch"){
                simDoors.forEach(function (d) {
                    if (d !== simDoorChoice && d!== simRevealedDoor){
                        simFinalChoice = d;
                    }
                })
            }
            else{
                simDoors.forEach(function (d) {
                    if (d === simDoorChoice && d!== simRevealedDoor){
                        simFinalChoice = d;
                    }
                })
            }
            if(simFinalChoice === simCorrectDoor){
                simsWon += 1;
                object = "<tr><th scope='row'>"+(i+1)+"</th><td>"+simDoorChoice+"</td><td>"+simRevealedDoor+"</td><td>"
                +simFinalChoice+"</td><td>"+simCorrectDoor+"</td><td class='text-success'>won</td></tr>";
            }
            else{
                simsLost +=1;
                object = "<tr><th scope='row'>"+(i+1)+"</th><td>"+simDoorChoice+"</td><td>"+simRevealedDoor+"</td><td>"
                    +simFinalChoice+"</td><td>"+simCorrectDoor+"</td><td class='text-danger'>lost</td></tr>"

            }
            if (i<501){
                $("#extendedResultsTable").find("tbody").append(object);
            }
            progressBar.attr( "aria-valuenow", currentProgress );
        }
        finishSimulation();

    }, 500);


}
function finishSimulation(){

    resultsSimsNumber = $("#resultsSimsNumber");
    resultsSimsStrategy = $("#resultsSimsStrategy");
    resultsSimsGamesWon = $("#resultsSimsGamesWon");
    resultsSimsGamesLost = $("#resultsSimsGamesLost");
    resultsSimsWinPercentage = $("#resultsSimsWinPercentage");

    resultsSimsNumber.html(simTimes);
    resultsSimsStrategy.html(strategy);
    resultsSimsGamesWon.html(simsWon);
    resultsSimsGamesLost.html(simsLost);
    resultsSimsWinPercentage.html((100* (simsWon/simTimes)).toFixed(2)+" %");

    progressBarContainer.hide();

    simResults = $(".sim-results");
    simResults.fadeIn();
}
function resetSimulation(){
    $(simForm).fadeIn();
    simResults.hide();

    $("#extendedResultsTable").find("tbody").empty();
}