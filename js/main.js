var turnOn = document.getElementById("turnOn");
var turnOff = document.getElementById("turnOff");
var lampLight = document.getElementById("lampLight");
var powerBtn = document.getElementById("powerBtn");

function turnOnBtn() {
  document.body.style.backgroundColor = "yellow";
  lampLight.src = "imgs/on.png";
  powerBtn.innerHTML = "On";
}

function turnOffBtn() {
  document.body.style.backgroundColor = "gray";
  lampLight.src = "imgs/off.png";
  powerBtn.innerHTML = "OFF";
}

// function powerBtn() {
//   document.getElementById("powerBtn").innerHTML = "ON";
// }
