const imageContainer = document.querySelector(".img_container");
const imageContainers = document.querySelectorAll(
  ".img_container div"
);

function handleImageCard(e) {
  const target = e.target;
  const imgBox = target.parentNode;
  if (imgBox.className != "on") {
    for (let i = 0; i < imageContainers.length; i++) {
      if (imageContainers[i].classList.contains("on")) {
        imageContainers[i].classList.remove("on");
      }
      imgBox.classList.add("on");
    }
  }
}

if (imageContainer) {
  imageContainer.addEventListener("click", handleImageCard);
}
