const color = ["blue", "cyan", "grey", "green"];
const main = document.querySelector("body");
const btn = document.querySelector(".btn");
const textColor = document.querySelector("span");

function getColor() {
  const random = Math.floor(Math.random() * color.length);
  return color[random];
}

btn.addEventListener("click", function () {
  main.style.backgroundColor = getColor(color);
  textColor.textContent = main.style.backgroundColor;
});
