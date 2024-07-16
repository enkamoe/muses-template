"use strict";
var initialText = "ご記入下さい";
var textarea = document.getElementById("myTextArea");
document.addEventListener("DOMContentLoaded", function () {
  textarea = document.getElementById("myTextArea");
  textarea.value = initialText;
});

function clearInitialText() {
  if (textarea.value === initialText) {
    textarea.value = "";
    textarea.style.color = "#000";
  }
}
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
