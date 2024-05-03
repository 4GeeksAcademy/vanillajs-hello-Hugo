import { generateExcuses } from "./app";

window.onload = () => {
  document.querySelector("#btn").addEventListener("Click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuses();
  });
  console.log("Hello Rigo from the console!");
};
