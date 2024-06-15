let homeScore = 0
let guestScore = 0
var sec = 10
var timer;
var leaderScore;

let homeDisplay = document.getElementById("home-el");
let guestDisplay = document.getElementById("guest-el");
let leaderName = document.getElementById("leader-name")

function homeAdd1 () {
  if (sec > 0) {
    homeScore += 1
    homeDisplay.textContent = homeScore
  }
}

function homeAdd2 () {
  if (sec > 0) {
    homeScore += 2
    homeDisplay.textContent = homeScore
  }
}

function homeAdd3 () {
  if (sec > 0) {
    homeScore += 3
    homeDisplay.textContent = homeScore
  }
}

function guestAdd1 () {
  if (sec > 0) {
    guestScore += 1
    guestDisplay.textContent = guestScore
  }
}

function guestAdd2 () {
  if (sec >= 0) {
    guestScore += 2
    guestDisplay.textContent = guestScore
  }
}

function guestAdd3 () {
  if (sec > 0) {
    guestScore += 3
    guestDisplay.textContent = guestScore
  }
}

function playForGameOver () {
	let whistle = new Audio('coach-whistle.mp3');
	whistle.play();
}

function playForPoint () {
  if (sec >= 0) {
  let point = new Audio('pointDing.mp3');
  point.play();
  }
}


function updateLeaderboard () {
  if (sec > 0) {
    document.getElementById('leader-text').textContent = "Leader: "
    leaderName.classList.remove('final-leader-color');
  if (guestScore > homeScore) {
    leaderScore = "Guest"
  }
  else if (guestScore < homeScore) {
    leaderScore = "Home"
  }
  else {
    leaderScore = "Tie"
  }
  leaderName.textContent = leaderScore;
}
else {
document.getElementById('leader-text').textContent = "Final Leader: "
leaderName.classList.add('final-leader-color');
}
}

/* note: found  code for a timer on stackoverflow but had to edit and improvise
a lot to make it work alongside reset button, leaderboard, and add points buttons */

function timerStart(){
  timer = setInterval(function(){
      
      if (sec >= 10) {
        document.getElementById('timerDisplay').innerHTML='0:'+sec;
        sec--
      }
      else if (sec >= 0) {
        document.getElementById('timerDisplay').innerHTML='0:0'+sec;
        sec--
      }
      else {
        clearInterval(timer)
        playForGameOver();
        updateLeaderboard();
      }
  }, 1000)
}

function resetScore () {
  clearInterval(timer)
  console.log("clearInterval running")
  guestScore = 0
  homeScore = 0
  guestDisplay.textContent = guestScore
  homeDisplay.textContent = homeScore


  sec = 10;
  timerStart() // Reset seconds to initial value
}