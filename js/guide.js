let guide = document.querySelector(".guide-click");
let guides = document.querySelector(".guide");
let guide2 = document.querySelector(".guide-2")
guide.addEventListener("click", () => guide2.style.display = "none")
guides.addEventListener("click", () => guide2.style.display = "block")