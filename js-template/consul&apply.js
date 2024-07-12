"use strict";

function confirmCancel() {
  if (confirm("本当に取消をしますか？") == true) {
    document.getElementById("message").innerText =
      "現在の面談予定はありません。";
  }
  return false;
}
