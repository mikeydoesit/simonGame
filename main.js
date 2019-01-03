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

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#topLeft');
const topRight = document.querySelector('#topRight');
const bottomLeft = document.querySelector('#bottomLeft');
const bottomRight = document.querySelector('#bottomRight');
const strictButton = document.querySelector('#strict');
const powerButton = document.querySelector('#powerBtn');
const startButton = document.querySelector('#start');

strictButton.addEventListener('click', (event) => {
  if(strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});


powerButton.addEventListener('click', (event) => {
  if (powerButton.checked == true) {
    on = true;
    turnCounter.innerHTML = '-';
  } else {
    on = false;
    turnCounter.innerHTML = '';
    clearColour();
    clearInterval(intervalId)
  }
});

startButton.addEventListener('click', (event) => {
  if(on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;

  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1)
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800)
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColour();
    on = true;
  }

  if (compTurn) {
    clearColour();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById('clip1');
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = 'lightgreen';
}
function two() {
  if (noise) {
    let audio = document.getElementById('clip2');
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = 'tomato';
}
function three() {
  if (noise) {
    let audio = document.getElementById('clip3');
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = 'yellow';
}
function four() {
  if (noise) {
    let audio = document.getElementById('clip4');
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = 'lightskyblue';
}

function clearColour() {
  topLeft.style.backgroundColor = 'darkgreen';
  topRight.style.backgroundColor = 'darkred';
  bottomLeft.style.backgroundColor = 'goldenrod';
  bottomRight.style.backgroundColor = 'darkblue';
}

topLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColour();
      }, 300)
    }
  }
});
topRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColour();
      }, 300)
    }
  }
});
bottomLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColour();
      }, 300)
    }
  }
});
bottomRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColour();
      }, 300)
    }
  }
});
