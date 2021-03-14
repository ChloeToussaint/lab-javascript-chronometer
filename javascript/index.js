const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  const str = chronometer.splitClick ();
  const minSec = str.split(":");
  printMinutes(minSec [0]);
  printSeconds(minSec [1]);
}

// "01:23".split(":") => ["01", "23"]
// "01".split("") => ["0", "1"]

function printMinutes(str) {
  // maj de minDec et minUni a l'aide de la chaine retournee par chronometer.splitClick() "08:57"
  const min = str.split ("");
  minUni.innerHTML = min [1];
  minDec.innerHTML = min [0];
}

function printSeconds(str) {
  // maj de secDec et secUni a l'aide de la chaine retournee par chronometer.splitClick() "08:57"
  const sec = str.split ("");
  secUni.innerHTML = sec [1];
  secDec.innerHTML = sec [0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn ();
    setResetBtn ();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    printTime();
  }

});
