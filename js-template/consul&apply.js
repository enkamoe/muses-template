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
    alert("相談日を選択してください。");
    return;
  }

  let confirmApply = `以下の内容で送信しますか？\n\n`;
  confirmApply += `相談種別：${consultType.parentNode.textContent.trim()}\n`;
  confirmApply += `相談日：${consultDate}\n`;
  confirmApply += `伝えておきたい事：${message ? message : ""}`;

  if (confirm(confirmApply)) {
    document.getElementById("dayday").innerText = consultDate;
    document.getElementById("typetype").innerText =
      consultType.parentNode.textContent.trim();
    document.getElementById("cancel").innerText = "取消";
    document.getElementById("message").innerText = "○○さんの面談です。";

    alert(
      "申込内容を送信しました。\n申込内容の確認は本ページトップ、◆キャリア／就職等相談申込状況で確認できます。"
    );
    return;
  } else {
    return;
  }

  alert(confirmApply);
});

function confirmCancel() {
  if (confirm("本当に面談を取消しますか？") == true) {
    document.getElementById("dayday").innerText = "";
    document.getElementById("typetype").innerText = "";
    document.getElementById("message").innerText =
      "現在の面談予定はありません。";
  }
  return false;
}
