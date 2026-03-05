let score = JSON.parse(localStorage.getItem("Score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

/* arrow function version - personal pref but prefer normal function
const autoplay = () => {
  if (!isAutoPlaying) {
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      PlayGame(playerMove)
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
*/

function autoplay() {
  if (!isAutoPlaying) {
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      PlayGame(playerMove)
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  PlayGame("Rock")
})

document.querySelector(".js-paper-button").addEventListener("click", () => {
  PlayGame("Paper")
})

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  PlayGame("Scissors")
})

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    PlayGame("Rock")
  } else if (event.key === "p") {
    PlayGame("Paper")
  } else if (event.key === "s") {
    PlayGame("Scissors")
  }
})

function PlayGame(playerMove) {
  
  ComputerMove = pickComputerMove()

  let MatchResult = "";

  if (playerMove === "Rock") {
    if (ComputerMove === "Rock") {
      result = "Tie.";
    } else if (ComputerMove === "Paper") {
      result = "You Lose.";
    } else if (ComputerMove === "Scissors") {
      result = "You Win!";
    }
  } else if (playerMove === "Paper") {
    if (ComputerMove === "Rock") {
      result = "You Win!";
    } else if (ComputerMove === "Paper") {
      result = "Tie.";
    } else if (ComputerMove === "Scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "Scissors") {
    if (ComputerMove === "Rock") {
      result = "You Lose.";
    } else if (ComputerMove === "Paper") {
      result = "You Win!";
    } else if (ComputerMove === "Scissors") {
      result = "Tie.";
    }
  }

  if (result === "You Win!") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("Score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-moves").innerHTML = `You Picked:
<img class="move-icon" src="Images/${playerMove}-emoji.png" />
<img class="move-icon" src="Images/${ComputerMove}-emoji.png" />
:Computer Picked`;
}

function pickComputerMove() {
  const RandomNumber = Math.random();

  let ComputerMove = "";

  
  if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
    ComputerMove = "Rock";
  } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
    ComputerMove = "Paper";
  } else if (RandomNumber >= 2 / 3 && RandomNumber <= 1) {
    ComputerMove = "Scissors";
  }  
  
  return ComputerMove;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}