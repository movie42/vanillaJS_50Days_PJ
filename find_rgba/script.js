const canvas = document.querySelector("canvas");
const rangeController = document.querySelectorAll("form input");
const ctx = canvas.getContext("2d");

let red = 0;
let green = 0;
let blue = 0;

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

  ctx.fillStyle = `rgba(${red},${green},${blue},1)`;
  ctx.fillRect(10, 10, 150, 100);
}

function controller() {
  rangeController.forEach((value) => {
    console.log(value);
    value.addEventListener("change", handleChange);
  });
}

controller();
