// -------------------- Starter Code -------------------- //
// define class of trainlines
class TrainLines {
  constructor(color, stations, connectingLines) {
    this.color = color;
    this.stations = stations;
    this.connectingLines = connectingLines;
  }
}

// declares each of the train lines as an object of the TrainLines class
let blueLine = new TrainLines(
  "blue",
  ["Bowdoin", "Gov't Center", "State", "Aquarium"],
  ["green", "orange"]
);

let redLine = new TrainLines(
  "red",
  [
    "Kendall/MIT",
    "Charles/MGH",
    "Park St",
    "Downtown Crossing",
    "South Station",
    "Broadway",
  ],
  ["orange", "green", "grey"]
);

let orangeLine = new TrainLines(
  "orange",
  [
    "Haymarket",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Tufts Medical Center",
  ],
  ["blue", "green", "red", "grey"]
);

let greenLine = new TrainLines(
  "green",
  [
    "Haymarket",
    "Gov't Center",
    "Park St",
    "Boylston",
    "Arlington",
    "Copley",
    "Prudential",
  ],
  ["red", "blue", "orange", "grey"]
);

let greyLine = new TrainLines(
  "grey",
  ["Boylston", "Chinatown", "South Station"],
  ["orange", "red", "green"]
);

// current state
let currentLine = "grey";

// lookup table for train lines
let lineLookUp = {
  grey: greyLine,
  red: redLine,
  blue: blueLine,
  green: greenLine,
  orange: orangeLine,
};

// function to move between states
function junctionFunction(newLine) {
  // receive the new line
  // IF it is a valid transition
  if (lineLookUp[currentLine].connectingLines.includes(newLine)) {
    //update the current line to new line
    currentLine = newLine;
  }
  // ELSE throw error
  else {
    console.log(`You cannot transition from ${currentLine} to ${newLine}`);
  }
}

console.log(currentLine) // => grey
junctionFunction("orange") // update current line to orange
console.log(currentLine) // => orange
junctionFunction("grey") // update current line to grey
console.log(currentLine) // => grey
junctionFunction("blue") // error 
console.log(currentLine) // => grey

