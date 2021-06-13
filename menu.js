document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("navLinks");
  const cardContainer = document.querySelector(".card-container");

  toggleButton.addEventListener("click", () => {
    cardContainer.style.transform = "translateX(0%)";
  });

  document.querySelector(".main-bar").addEventListener("click", () => {
    if (cardContainer.style.transform === "translateX(0%)") {
      cardContainer.style.transform = "translateX(-100%)";
    }
  });
});
