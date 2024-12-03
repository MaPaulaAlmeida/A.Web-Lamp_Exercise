const lamp = document.getElementById("lamp");
const button = document.getElementById("toggleButton");

let isLampOn = false;

button.addEventListener("click", () => {
  isLampOn = !isLampOn;

  if (isLampOn) {
    lamp.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    button.textContent = "OFF";
    document.body.style.backgroundColor = "#ffffff"; 
  } else {
    lamp.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    button.textContent = "ON";
    document.body.style.backgroundColor = "#000000"; 
  }
});
