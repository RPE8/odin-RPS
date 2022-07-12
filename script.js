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

function computerPlay(aIds) {
  return aIds[Math.floor(Math.random() * aIds.length)];
}
