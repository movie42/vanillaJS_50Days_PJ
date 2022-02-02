const rangeController = document.querySelectorAll("form input");

let red = 0;
let green = 0;
let blue = 0;

function handleCanvas(r, g, b) {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const stageWidth = document.body.clientWidth;
  const stageHeight = document.body.clientHeight;

  canvas.width = stageWidth;
  canvas.height = stageHeight;

  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
  ctx.fillRect(0, stageWidth, stageHeight, stageWidth);
}

function handleChange(e) {
  if (e.target.id === "red") {
    red = e.target.value;
    e.target.nextElementSibling.innerText = red;
  } else if (e.target.id === "green") {
    green = e.target.value;
    e.target.nextElementSibling.innerText = green;
  } else if (e.target.id === "blue") {
    blue = e.target.value;
    e.target.nextElementSibling.innerText = blue;
  }
}

function controller() {
  rangeController.forEach((value) => {
    console.log(value);
    value.addEventListener("change", handleChange);
  });
}

window.addEventListener("resize", handleCanvas);
controller();
