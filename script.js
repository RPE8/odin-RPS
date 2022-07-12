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

function getSelectionById(aSelections, sId) {
  return aSelections.find((oSelection) => oSelection.id === sId);
}

function computerPlay(aIds) {
  return aIds[Math.floor(Math.random() * aIds.length)];
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
