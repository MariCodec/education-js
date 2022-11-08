const date = document.querySelector(".date");
const dayMonthYear = document.querySelector(".dayMonthYear");
const dateTime = document.querySelector(".dateTime");

let d2 = new Date();

setInterval(() => {
  let d1 = new Date();
  dateTime.innerHTML = d1.toLocaleTimeString();
}, 1000);

dayMonthYear.innerHTML += d2.toLocaleDateString();
//

//

// Timer
const hourElem = document.querySelector(".hourCount");
const minuteElem = document.querySelector(".minuteCount");
const secondElem = document.querySelector(".secondCount");
const miliSecondElem = document.querySelector(".miliSecondCount");
const tymeOutData = document.querySelector(".blockWithDataTimer");

// button for timer
const buttonStart = document.querySelector(".start");
const buttonLoop = document.querySelector(".loop");
const buttonStop = document.querySelector(".stop");
const buttonReset = document.querySelector(".reset");
//
let interval;
let hour = 00;
let minute = 00;
let second = 00;
let milisecond = 00;
buttonStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
//
buttonLoop.addEventListener("click", () => {
  let timeOut = document.createElement("div");
  timeOut.innerHTML =
    hourElem.textContent +
    ":" +
    minuteElem.textContent +
    ":" +
    secondElem.textContent +
    ":" +
    miliSecondElem.textContent;
  tymeOutData.prepend(timeOut);
});
//
buttonStop.addEventListener("click", () => {
  clearInterval(interval);
});
buttonReset.addEventListener("click", () => {
  clearInterval(interval);
  hour = 00;
  minute = 00;
  second = 00;
  milisecond = 00;
  miliSecondElem.innerText = "00";
  secondElem.innerText = "00";
  minuteElem.innerText = "00";
  hourElem.innerText = "00";
  tymeOutData.innerText = "";
});
function startTimer(params) {
  milisecond++;
  if (milisecond < 9) {
    miliSecondElem.innerText = "0" + milisecond;
  }
  if (milisecond > 9) {
    miliSecondElem.innerText = milisecond;
  }
  if (milisecond > 99) {
    second++;
    secondElem.innerText = "0" + second;
    milisecond = 0;
    miliSecondElem.innerText = "0" + milisecond;
  }

  // second
  if (second < 9) {
    secondElem.innerText = "0" + second;
  }
  if (second > 9) {
    secondElem.innerText = second;
  }
  if (second > 60) {
    minute++;
    minuteElem.innerText = "0" + minute;
    second = 0;
    secondElem.innerText = "0" + second;
  }
  // minute
  if (minute < 9) {
    minuteElem.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElem.innerText = minute;
  }
  if (minute > 60) {
    hour++;
    hourElem.innerText = "0" + minute;
    minute = 0;
    minuteElem.innerText = "0" + minute;
  }
  //
  if (hour < 9) {
    hourElem.innerText = "0" + hour;
  }
  if (hour > 9) {
    hourElem.innerText = hour;
  }
  if (hour > 60) {
    hourElem.innerText = hour;
  }
}
// BLOCK LAST
const minutes = document.querySelector(".minutes");
const buttonPlus = document.querySelector(".left");
const buttonMinus = document.querySelector(".right");
const blockCounter = document.querySelector(".blockCounter");

buttonPlus.addEventListener("click", () => {
  minutes.innerText++;
  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }
});
buttonMinus.addEventListener("click", () => {
  minutes.innerText--;
  if (minutes.innerText < 10) {
    minutes.innerText = "0" + minutes.innerText;
  }
});

//
const startButtonCount = document.querySelector(".startCount");
const stopButtonCount = document.querySelector(".stopCount");
const resetButtonCount = document.querySelector(".resetCount");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

resetButtonCount.addEventListener("click", () => {
  clearInterval(interval);
  secondCount = 60;
  minutes.innerText = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
});
let minuteCount = 0;
let secondCount = 60;
startButtonCount.addEventListener("click", () => {
  min.innerHTML = minutes.innerText;

  minuteCount = minutes.innerHTML;

  stopButtonCount.addEventListener("click", () => {
    clearInterval(newInterval);
  });
  const newInterval = setInterval(() => {
    if (secondCount > 0) {
      secondCount--;
      sec.innerHTML = secondCount;
    }
    if (secondCount < 10) {
      secondCount--;
      sec.innerHTML = "0" + secondCount;
    }
    if (secondCount == 0) {
      secondCount = 59;
      minuteCount--;
      min.innerHTML = minuteCount;
    }
    if (minuteCount == 0) {
      clearInterval(newInterval);
    }
  }, 1000);
});
