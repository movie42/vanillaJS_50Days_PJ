const app = document.getElementById("app");
const btn = document.createElement("button");
const numbersContainer = document.createElement("div");
numbersContainer.className = "numberWrapper";
btn.innerText = "번호 만들기";
btn.className = "generate";
document.body.appendChild(btn);
app.appendChild(numbersContainer);

for (let i = 1; i < 46; i++) {
  const number = document.createElement("span");
  number.innerText = i;
  number.className = i;
  numbersContainer.appendChild(number);
}

const handleNumber = () => {
  const numberAry = [];
  let i = 0;
  while (i < 6) {
    console.log(numberAry.length);
    const number = Math.floor(Math.random() * (46 - 1)) + 1;
    if (i === 0) {
      numberAry.push(number);
      i++;
    } else {
      const isSame = (number) => {
        for (let j = 0; j < numberAry; j++) {
          if (numberAry[j] === number) {
            return true;
          }
        }
        return false;
      };
      if (!isSame(number)) {
        numberAry.push(number);
        numberAry.sort((a, b) => a - b);
        i++;
      }
    }
  }
  paintNumber(numberAry);
};

const paintNumber = (numbers) => {
  const numberNodes = numbersContainer.childNodes;
  numberNodes.forEach((value) => {
    if (value.classList.contains("on")) {
      value.classList.remove("on");
    }
  });
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numberNodes.length; j++) {
      if (numberNodes[j].classList.contains(String(numbers[i]))) {
        numberNodes[j].classList.add("on");
      }
    }
  }
};

btn.addEventListener("click", handleNumber);
