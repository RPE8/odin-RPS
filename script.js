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

function onLoad() {
  document.querySelectorAll(".user-selection").forEach((selection) => {
    selection.addEventListener("click", (event) => {
      event.stopPropagation();
      playGame(event.currentTarget.getAttribute("data-key"));
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

function playGame(sUserSelectionId = "SCISSORS") {
  const oResult = playRound(
    getSelectionById(AVAILABLE_SELECTIONS, sUserSelectionId),
    getSelectionById(
      AVAILABLE_SELECTIONS,
      computerPlay(getIdsFromSelections(AVAILABLE_SELECTIONS))
    )
  );
}
