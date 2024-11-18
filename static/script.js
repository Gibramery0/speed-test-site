function startSpeedTest() {
  // Loading state göster
  document.getElementById("loading").style.display = "block";
  document.getElementById("result").style.display = "none";

  fetch('/run-speedtest')
      .then(response => response.json())
      .then(data => {
          // Hız testi sonuçlarını göster
          document.getElementById("downloadSpeed").innerText = data.download_speed;
          document.getElementById("uploadSpeed").innerText = data.upload_speed;
          document.getElementById("ping").innerText = data.ping;

          // Yükleniyor ekranını gizle, sonuçları göster
          document.getElementById("loading").style.display = "none";
          document.getElementById("result").style.display = "block";
      })
      .catch(err => {
          // Hata durumu
          document.getElementById("loading").style.display = "none";
          document.getElementById("result").style.display = "block";
          document.getElementById("result").innerHTML = `<p style="color: red;">Bir hata oluştu: ${err}</p>`;
      });
}
