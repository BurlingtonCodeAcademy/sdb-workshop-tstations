// -------------------- Starter Code -------------------- //
//const that set up the interface with the terminal, allowing a user to interact with your program
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

//function establishing an ask function to await user input
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}