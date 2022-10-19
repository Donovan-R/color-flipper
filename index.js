const color = ["blue", "cyan", "grey", "green"];
const main = document.querySelector("body");

function getColor() {
  const random = Math.floor(Math.random() * color.length);
  return color[random];
}

// main.style.backgroundColor = getColor(color);
// console.log(getColor(color));

// let curColour = main.style.backgroundColor;
// console.log(curColour);

const btn = document.querySelector(".btn");
const textColor = document.querySelector("span");

btn.addEventListener("click", function () {
  main.style.backgroundColor = getColor(color);
  textColor.textContent = main.style.backgroundColor;
});

// btn.addEventListener("click", function())
