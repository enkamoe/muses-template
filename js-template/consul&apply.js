"use strict";

function confirmCancel() {
  if (confirm("本当に面談を取消ししますか？") == true) {
    document.getElementById("message").innerText =
      "現在の面談予定はありません。";
  }
  return false;
}

document.getElementById('confirmButton').addEventListener('click', function( {
  const 
}))