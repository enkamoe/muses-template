"use strict";

document.getElementById("reserveButton").addEventListener("click", function () {
  document.getElementById("message").innerText = "○○さんの参加予定は以下です。";

  alert("予約が完了しました。");

  const table = document.querySelector("table");

  const newRow = table.insertRow();
  newRow.innerHTML = `
      <td>取消</td>
      <td>就活関連</td>
      <td>2024年7月23日(月)16:30~18:00</td>
      <td>KM-○○</td>
  `;
});
