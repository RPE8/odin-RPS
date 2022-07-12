const AVAILABLE_SELECTIONS = [
  {
    id: "PAPER",
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
    beats: ["PAPER"],
  },
];

function getSelectionById(aSelections, sId) {
  return aSelections.find((oSelection) => oSelection.id === sId);
}

function computerPlay(aIds) {
  return aIds[Math.floor(Math.random() * aIds.length)];
}


function playGame(oUserSelection, oComputerSelection) {
	if (oUserSelection.beats.includes(oComputerSelection.id)) {
		return `You Won! ${oUserSelection.name} beats ${oComputerSelection.name}`;
	}

	if (oComputerSelection.beats.includes(oUserSelection.id) {
		return `You Lose! ${oComputerSelection.name} beats ${oUserSelection.name}`;
	}

	return "Tie!";
}