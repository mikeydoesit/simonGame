let order = []; // Keeps track of the order in which the lights flash
let playerOrder = []; // Keeps track of the order in which the player presses the colours
let flash; //The number of flashes that appear
let turn; // Keeps track of the rounds that have taken place or the level you are on
let good; // A boolean value to see whether the player pressed the correct order of colours. yes or no/ true or false
let compTurn; // A boolean value to see whos turn it is.  the computer or the player
let intervalId;
let strict = false; // Keep track of whether the strict button is checked or not
let noise = true;
let on = false; // Keep track of whether the power button is checked or not
let win; // A boolean value to see whether player has won game or not

const turnCounter = document.queryselector('#turn');
const topLeft = document.queryselector('#topLeft');
const topRight = document.queryselector('#topRight');
const bottomLeft = document.queryselector('#bottomLeft');
const bottomRight = document.queryselector('#bottomRight');
const strictButton = document.queryselector('#strict');
const powerButton = document.queryselector('#powerBtn');
const startButton = document.queryselector('#start');
