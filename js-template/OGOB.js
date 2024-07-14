"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
