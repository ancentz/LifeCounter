// Write your Javascript code.
var numberOfPlayers;

function createHealthInput(id) {
    var healthInput = document.createElement("input");
    healthInput.setAttribute("id", "health" + id);
    healthInput.setAttribute("class", "form-control");
    healthInput.value = document.getElementById("health").value;
    healthInput.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            calcuateLifeTotal(e.target.value, e.target.id);
        }
    });
    return healthInput;
}

function createPlayerInput(id) {
    var playerInput = document.createElement("input");
    playerInput.setAttribute("id", "player" + id);
    playerInput.setAttribute("class", "form-control");
    return playerInput;
}

function generatePlayerLifeView() {

    document.getElementById("startButton").style.display = "unset";

    var playerNamesContainer = document.getElementById("playerNamesContainer");
    var playerHealthContainer = document.getElementById("playerHealthContainer");

    hideElements("players");
    hideElements("health");
    hideElements("okButton");

    numberOfPlayers = document.getElementById("players").value;



    for (var i = 0; i < numberOfPlayers; i++) {
        playerNamesContainer.append(document.createElement("p"));
        playerNamesContainer.append(createPlayerInput(i));
        playerHealthContainer.append(document.createElement("p"));
        playerHealthContainer.append(createHealthInput(i));
    }

}

function calcuateLifeTotal(test, id) {
    var res = test.split("-");
    var res2 = test.split("+");
    var res3 = test.split("/");

    if (res.length > 1) {
        console.log(res);
        document.getElementById(id).value = res[0] - res[1];
    }

    if (res2.length > 1) {
        console.log(res2);
        document.getElementById(id).value = parseInt(res2[0]) + parseInt(res2[1]);
    }

    if (res3.length > 1) {
        console.log(res3);
        if (res3[0] % 2 === 1) {
            document.getElementById(id).value = (parseInt(res3[0]) + 1) / parseInt(res3[1]);
        } else {
            document.getElementById(id).value = parseInt(res3[0]) / parseInt(res3[1]);
        }
    }
}

function hideElements(id) {
    document.getElementById(id).style.display = "none";
}

function startPlayer() {
    var number = "player" + getRandomInt(numberOfPlayers);
    var startingPlayer = document.getElementById(number);
    startingPlayer.setAttribute("class", "form-control is-valid");
    hideElements("startButton");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
