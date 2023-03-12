let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0

let homeContainer = document.getElementById('home-score-container')
let guestContainer = document.getElementById('guest-score-container')

homeContainer.classList.toggle('score-container-highlight')
guestContainer.classList.toggle('score-container-highlight')

function highlightLeader() {
    homeContainer.classList.toggle('score-container-highlight', homeScore > guestScore)
    guestContainer.classList.toggle('score-container-highlight', guestScore > homeScore)
}


/* 

    HOME SCORE FUNCTIONS

*/
function homeAddOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore
    highlightLeader()
}
function homeAddTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore
    highlightLeader()
}
function homeAddThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore
    highlightLeader() 
}


/* 

    GUEST SCORE FUNCTIONS

*/
function guestAddOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore
    highlightLeader()
}
function guestAddTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore
    highlightLeader()
}
function guestAddThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore
    highlightLeader() 
}

/* 

    NEW GAME

*/
function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeContainer.classList.remove('score-container-highlight')
    guestContainer.classList.remove('score-container-highlight')
}