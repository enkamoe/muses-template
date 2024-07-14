"use strict";

document.getElementById("confirmButton").addEventListener("click", function () {
  const consultType = document.querySelector('input[name="consult"]:checked');
  const consultDate = document.getElementById("consultdate").value;
  const message = document.querySelector("textarea").value;

  if (!consultType) {
    alert("相談種別を選択してください。");
    return;
  }

  if (!consultDate) {
    alert("相談日程を選択してください。");
    return;
  }

  let confirmApply = `相談種別：${consultType.parentNode.textContent.trim()}\n`;
  confirmApply += `相談日程：${consultDate}\n`;
  confirmApply += `伝えておきたい事：${message ? message : "特になし"}`;

  alert(confirmApply);
});

function confirmCancel() {
  if (confirm("本当に面談を取消ししますか？") == true) {
    document.getElementById("message").innerText =
      "現在の面談予定はありません。";
  }
  return false;
}
