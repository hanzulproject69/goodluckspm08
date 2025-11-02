const audio = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');

window.addEventListener('load', () => {
  audio.play().catch(() => {
    muteBtn.textContent = '▶️'; // kalau autoplay disekat
  });
});

muteBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    muteBtn.textContent = '🔊';
  } else {
    audio.pause();
    muteBtn.textContent = '🔇';
  }
});
