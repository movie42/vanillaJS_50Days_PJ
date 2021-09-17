const buttonWrapper = document.querySelector(".button_container");
const stepWrapper = document.querySelector(".step_wrapper");
const stepProgressSigns = stepWrapper.querySelectorAll("div");
const stepProgressLines = stepWrapper.querySelectorAll("span");

function handleStep(e) {
  if (e.target.classList.contains("prevBtn")) {
    for (let i = stepProgressSigns.length - 1; i > 0; i--) {
      e.target.nextElementSibling.classList.remove("none_activate");
      if (i === 1) {
        e.target.classList.add("none_activate");
      }
      if (stepProgressSigns[i].classList.contains("on")) {
        stepProgressSigns[i].classList.remove("on");
        stepProgressLines[i - 1].classList.remove("on");
        break;
      }
    }
  } else {
    for (let i = 0; i < stepProgressSigns.length; i++) {
      console.log(
        e.target.previousElementSibling.classList.remove("none_activate"),
      );
      if (i === stepProgressSigns.length - 1) {
        e.target.classList.add("none_activate");
      }
      if (!stepProgressSigns[i].classList.contains("on")) {
        stepProgressSigns[i].classList.add("on");
        stepProgressLines[i - 1].classList.add("on");
        break;
      }
    }
  }
}

buttonWrapper.addEventListener("click", handleStep);
