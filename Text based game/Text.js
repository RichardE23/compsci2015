var startButton = document.getElementById("startButton");
var startTxt = document.getElementById("startTxt");
var firstSet = document.getElementById("firstSet");
var windowChoice = document.getElementById("window");
var ropeChoice = document.getElementById("rope");
var ropeSet = document.getElementById("ropeSet");
var windowSet = document.getElementById("windowSet");


startButton.addEventListener("click", function(){
    startTxt.style.display = "none";
    firstSet.style.display = "block";
})
windowChoice.addEventListener("click", function() {
    firstSet.style.display = "none";
    windowSet.style.display = "block";
})
ropeChoice.addEventListener("click", function() {
    firstSet.style.display = "none";
    ropeSet.style.display = "block";
})

// addEventListener("click", choiceOne);

// function choiceOne(){
   
// }
