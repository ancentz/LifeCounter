// Write your Javascript code.
var numberOfPlayers;

function generatePlayerLifeView() {

    document.getElementById("startButton").style.display = "unset";

    var playerNamesContainer = document.getElementById("playerNamesContainer");
    var playerHealthContainer = document.getElementById("playerHealthContainer");

    hideElements("players");
    hideElements("health");
    hideElements("okButton");

    numberOfPlayers = document.getElementById("players").value;

    for (var j = 2; j > 0; j--) {
        for (var i = 0; i < document.getElementById("players").value; i++) {
            var newElement = document.createElement("input");
            if (j === 2) {
                newElement.setAttribute("id", j + "" + i);
                newElement.setAttribute("class", "form-control");
                playerNamesContainer.append(document.createElement("p"));
                playerNamesContainer.append(newElement);
            }
            else {
                newElement.setAttribute("id", i);
                newElement.setAttribute("class", "form-control");
                newElement.value = document.getElementById("health").value;
                newElement.addEventListener('keypress', function (e) {
                    if (e.keyCode === 13) {
                        console.log(e.target.value, e.target.id);
                        calcuateLifeTotal(e.target.value, e.target.id);
                    }
                });
                newElement.addEventListener("dblclick", function (e) {
                    console.log(e.target.value, e.target.id);
                    increaseLifeByOne(e.target.value, e.target.id);
                });
                $(newElement).contextmenu(makeDoubleRightClickHandler(function (e) {
                    //console.log("double right click");
                    document.getElementById(e.target.id).value = e.target.value - 1;
                }));
                playerHealthContainer.append(document.createElement("p"));
                playerHealthContainer.append(newElement);
            }
        }
    }
}

function calcuateLifeTotal(test, id) {
    var res = test.split("-");
    var res2 = test.split("+");

    if (res.length > 1) {
        console.log(res);
        document.getElementById(id).value = res[0] - res[1];
    }

    if (res2.length > 1) {
        console.log(res2);

        document.getElementById(id).value = parseInt(res2[0]) + parseInt(res2[1]);
    }
}

function hideElements(id) {
    document.getElementById(id).style.display = "none";
}

function startPlayer() {
    var number = 2 + "" + getRandomInt(numberOfPlayers);
    var startingPlayer = document.getElementById(number);
    startingPlayer.setAttribute("class", "form-control is-valid");
    hideElements("startButton");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function increaseLifeByOne(test, id) {
    document.getElementById(id).value = parseInt(test) + parseInt(1);
}

function makeDoubleRightClickHandler(handler) {
    var timeout = 0, clicked = false;
    return function (e) {

        e.preventDefault();

        if (clicked) {
            clearTimeout(timeout);
            clicked = false;
            return handler.apply(this, arguments);
        }
        else {
            clicked = true;
            timeout = setTimeout(function () {
                clicked = false;
            }, 300);
        }
    };
}