document.getElementById('startTest').addEventListener('click', function () {
  const progress = document.querySelector('.progress');
  const downloadSpeedElement = document.getElementById('downloadSpeed');
  const uploadSpeedElement = document.getElementById('uploadSpeed');

  // Animasyon başlat
  progress.style.width = '0%';
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);

      // Sonuçları simüle et
      const downloadSpeed = (Math.random() * (100 - 20) + 20).toFixed(2);
      const uploadSpeed = (Math.random() * (50 - 10) + 10).toFixed(2);

      downloadSpeedElement.textContent = downloadSpeed;
      uploadSpeedElement.textContent = uploadSpeed;
    } else {
      width++;
      progress.style.width = width + '%';
    }
  }, 50); // Hızı ayarlayabilirsiniz
});
