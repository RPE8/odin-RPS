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
  return aSelection.find((oSelection) => oSelection.id === sId);
}

function computerPlay(aIds) {
  return aIds[Math.floor(Math.random() * aIds.length)];
}
