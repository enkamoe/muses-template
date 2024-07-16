"use strict";

document.getElementById("spi").addEventListener("click", function () {
  document.getElementById("details").innerText =
    "\n「就活にほぼ必須！SPI講座」\n【開催日時】\n2024年7月23日(月)16:30~18:00\n【開催場所】\nKM-○○\n【対象学年】\n3・4年生（定員：120名）\n【内容】\n就職活動にほぼ必須とされるSPIを教えます。勉強するにあたって参考書は必要ですが、本講義ではプリントを配布するので筆記用具だけご持参ください。講義内でおすすめの参考書を知ることができます。\n本講座は定員で先着順となりますので希望される方は下記の予約ボタンよりお申込みください。\n\n";

  const reserveButton = document.createElement("button");
  reserveButton.id = "reserveButton";
  reserveButton.textContent = "予約する";

  reserveButton.addEventListener("click", function () {
    // 予約が完了したことを知らせるアラート
    alert("予約が完了しました。");
    // 参加予定のメッセージを表示
    document.getElementById("message").innerText =
      "○○さんの参加予定は以下です。";

    document.getElementById("td1").innerText = "取消";
    document.getElementById("td2").innerText = "就活関連";
    document.getElementById("td4").innerText = "2024年7月23日(月)16:30~18:00";
    document.getElementById("td5").innerText = "KM-○○";
    document.getElementById("td3").innerText = "就活にほぼ必須！SPI講座";
    document.getElementById("td6").innerText = "2024年7月19日(金)";
  });

  document.getElementById("details").appendChild(reserveButton);
});
