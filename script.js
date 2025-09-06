let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let restart = false;

let music;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const restartfunc = async () => {
  await delay(2000);

  restart = true;
  green.style.backgroundColor = "white";

  redFunc(restart);
};

const yellowfunc = async () => {
  // turning on the yellow button

  await delay(3000);
  music = new Audio("yellowLight.mp3");
  music.play();
  red.style.backgroundColor = "white";
  yellow.style.backgroundColor = "yellow";
  console.log("yelow light , ready to go !");
};

const greenFunc = async () => {
  await delay(2000);

  music = new Audio("green-light-squid-game.mp3");
  music.play();

  red.style.backgroundColor = "white";
  yellow.style.backgroundColor = "white";
  green.style.backgroundColor = "green";
  console.log("Green light , chalo bhago ");

  restartfunc();
};

const redFunc = async (restart) => {
  music = new Audio("red-light.mp3");
  music.play();
  console.log("testing");

  if (restart) {
    green.style.backgroundColor = "white";
    console.log("stop ! its red light again");
  } else {
    console.log("red light please stop ! ");
  }
  red.style.backgroundColor = "red";
  await delay(2000);

  await yellowfunc();

  await greenFunc();
};

let isRunning = false;

document.querySelector("button").addEventListener("click", () => {
  if (isRunning) return; // this code will prevent from double clicking
  isRunning = true;
  document.querySelector(".popup").style.opacity = 0;
  redFunc();
});
