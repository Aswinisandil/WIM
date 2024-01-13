const dropdownButtons = document.querySelectorAll(".dropdown-button");
const dropdownContents = document.querySelectorAll(".dropdown-content");

dropdownButtons.forEach((dropdownButton, index) => {
  dropdownButton.addEventListener("click", () => {
    dropdownContents[index].style.display =
      dropdownContents[index].style.display === "block"
        ? "none"
        : "block";
  });
});

window.addEventListener("click", (event) => {
  dropdownContents.forEach((dropdownContent) => {
    if (!event.target.closest(".dropdown-container")) {
      dropdownContent.style.display = "none";
    }
  });
});

console.log(dropdownContents);