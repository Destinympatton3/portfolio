const imageWrapper = document.getElementById('imageWrapper');
const hoverComment = document.getElementById('hoverComment');

let timer = null;

imageWrapper.addEventListener('mouseenter', () => {
  hoverComment.classList.add('visible');

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    hoverComment.classList.remove('visible');
  }, 30000); // 30 seconds
});