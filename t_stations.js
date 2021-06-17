// STATE MACHINES

// State Transition Diagram - map!
//    Current state
let currentStation = "Copley";

//    Allowable transitions
let allowableTransitions = {
  "Hynes Convention Center": ["Copley"],
  Copley: ["Arlington", "Hynes Convention Center", "Prudential"],
  Prudential: ["Copley", "Symphony", "Northeastern"],
  Symphony: ["Prudential", "Northeaster"],
  Northeastern: ["Symphony"],
  Arlington: ["Copley", "Boylston"],
  Boylston: ["Park St", "Arlington", "Downtown Crossing"],
  "Park St": ["Gov't Center", "Downtown Crossing", "Charles/MGH", "Boylston"],
  "Gov't Center": ["Bowdoin", "Haymarket", "State", "Park St"],
  Haymarket: ["Gov't Center"],

  "Kendall/MIT": ["Charles/MGH"],
  "Charles/MGH": ["Park St", "Kendall/MIT"],
  "Downtown Crossing": [
    "Park St",
    "State",
    "South Station",
    "Boylston",
    "Chinatown",
  ],
  "South Station": ["Downtown Crossing", "Broadway", "Courthouse", "Chinatown"],
  Courthouse: ["South Station"],
  Broadway: ["South Station"],

  Bowdoin: ["Gov't Center"],
  State: ["Gov't Center", "Aquarium", "Downtown Crossing", "Haymarket"],
  Aquarium: ["State"],

  Chinatown: ["Tufts Medical Center", "Downtown Crossing", "South Station"],
  "Tufts Medical Center": ["Chinatown", "Back Bay", "Herald St"],
  "Back Bay": ["Tufts Medical Center", "Mass. Ave"],
  "Mass. Ave": ["Back Bay"],

  "Herald St": ["Tufts Medical Center", "East Berkeley St"],
  "East Berkeley St": ["Herald St", "Union Park St"],
  "Union Park St": ["East Berkeley St"],
};

//    Move between states
function transferStations(newStation) {
  // receive the new location
  // IF the transition is valid change it to a new location
  if (allowableTransitions[currentStation].includes(newStation)) {
    // update the current location to new location
    currentStation = newStation;
  }
  // ELSE the transition is not valid, throw an error message
  else {
    console.log(`Sorry, we cannot go to ${newStation} from ${currentStation}`);
  }
}

console.log(currentStation) // => copley
transferStations("Prudential") // 
console.log(currentStation) // => Prudential
transferStations("Haymarket") // Sorry, we cannot....
console.log(currentStation) // => Prudential
