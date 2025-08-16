// script.js
const dragonSound = document.getElementById('dragonSound');
const fireSound = document.getElementById('fireSound');

// Inicia som do dragão ao carregar
window.addEventListener('load', () => {
  dragonSound.volume = 0.5;
  dragonSound.play();
});

// Efeito ao digitar nos campos
document.querySelectorAll('.animated-input').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.transform = 'scale(1.1) rotate(360deg)';
  });

  input.addEventListener('blur', () => {
    input.style.transform = 'scale(1) rotate(0deg)';
  });

  input.addEventListener('input', () => {
    fireSound.currentTime = 0;
    fireSound.volume = 0.6;
    fireSound.play();
  });
});
