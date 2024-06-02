document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.getElementById('playButton');
  var audio = document.getElementById('myAudio');

  playButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playButton.textContent = 'Пауза';
    } else {
      audio.pause();
      playButton.textContent = 'Воспроизвести аудио';
    }
  });
});
