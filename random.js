const hex = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const main = document.querySelector("body");
const btn = document.querySelector(".btn");
const textColor = document.querySelector("span");

function getColor() {
  let newColor = "";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    newColor += hex[random];
  }
  return `#${newColor}`;
}
// console.log(getColor(hex));

btn.addEventListener("click", function () {
  const randomColor = getColor(hex);
  main.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
