const body = document.querySelector("body");
const searchBody = document.querySelector(".search_widget");
const searchBtn = searchBody.querySelector("button");

function handleSearchBtn() {
  if (!searchBody.classList.contains("on")) {
    searchBody.classList.add("on");
    body.classList.add("on");
  } else {
    searchBody.classList.remove("on");
    body.classList.remove("on");
  }
}

searchBtn.addEventListener("click", handleSearchBtn);
