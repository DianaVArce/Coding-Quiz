//Create variables for the queary slectors buttons
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Add an Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives local storage for the allocated scores on script.js
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

//as long as there are scores to get
if (allScores !== null) {
    //populate the high-scores page
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});