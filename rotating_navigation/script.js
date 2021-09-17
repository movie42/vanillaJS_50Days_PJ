const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const container = document.querySelector(".all_item_wrapper");

function handleOpen() {
  container.classList.add("show_nav");
}

function handleClose() {
  container.classList.remove("show_nav");
}
openBtn.addEventListener("click", handleOpen);
closeBtn.addEventListener("click", handleClose);
