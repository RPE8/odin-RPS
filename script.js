const AVAILABLE_SELECTIONS = [
  {
    id: "PAPPER",
    name: "Papper",
    beats: ["ROCK"],
  },
  {
    id: "ROCK",
    name: "Rock",
    beats: ["SCISSORS"],
  },
  {
    id: "SCISSORS",
    name: "Scissors",
    beats: ["PAPPER"],
  },
];

let iPlayerScore = 0;
let iComputerScore = 0;

function onLoad() {
  document.querySelectorAll(".user-selection").forEach((selection) => {
    selection.addEventListener("click", (event) => {
      event.stopPropagation();

      document.querySelectorAll(".selection").forEach((element) => {
        element.classList.remove("selection");
      });

      const userSelection = event.currentTarget;
      const sComputerPlay = computerPlay(
        getIdsFromSelections(AVAILABLE_SELECTIONS)
      );
      userSelection.classList.add("selection");
      document
        .querySelector(`#computer-list [data-key='${sComputerPlay}']`)
        .classList.add("selection");
      playGame(userSelection.getAttribute("data-key"), sComputerPlay);
    });
  });
}

window.addEventListener("load", onLoad);

function getSelectionById(aSelections, sId) {
  return aSelections.find((oSelection) => oSelection.id === sId);
}

function computerPlay(aIds) {
  return aIds[Math.floor(Math.random() * aIds.length)];
}

function getIdsFromSelections(aSelection) {
  return aSelection.map((oSelection) => oSelection.id);
}

function playRound(oUserSelection, oComputerSelection) {
  if (oUserSelection.beats.includes(oComputerSelection.id)) {
    return {
      playerWon: true,
      message: `You Won! ${oUserSelection.name} beats ${oComputerSelection.name}`,
    };
  }

  if (oComputerSelection.beats.includes(oUserSelection.id)) {
    return {
      playerWon: false,
      message: `You Lose! ${oComputerSelection.name} beats ${oUserSelection.name}`,
    };
  }

  return {
    tie: true,
    message: "Tie!",
  };
}

function playGame(
  sUserSelectionId = "SCISSORS",
  sComputerSelection = "SCISSORS"
) {
  const oResult = playRound(
    getSelectionById(AVAILABLE_SELECTIONS, sUserSelectionId),
    getSelectionById(AVAILABLE_SELECTIONS, sComputerSelection)
  );

  if (oResult.playerWon) {
    addToPlayerScore();
  } else if (oResult.tie) {
  } else {
    addToComputerScore();
  }

  if (iPlayerScore === 5) {
    alert("Player won!");
  }

  if (iComputerScore === 5) {
    alert("Computer won!");
  }

  return this;
}

function addScore(element, iComputerScore) {
  element.textContent = Number(iComputerScore);
}

function addToPlayerScore() {
  iPlayerScore++;
  const element = document.getElementById("player-score");
  addScore(element, iPlayerScore);
}

function addToComputerScore() {
  iComputerScore++;
  const element = document.getElementById("computer-score");
  addScore(element, iComputerScore);
}
