const imageWrapper = document.getElementById('imageWrapper');
      const hoverComment = document.getElementById('hoverComment');
  
      let timer;
  
      imageWrapper.addEventListener('mouseenter', () => {
        hoverComment.classList.add('visible');
        clearTimeout(timer);
        timer = setTimeout(() => {
          hoverComment.classList.remove('visible');
        }, 30000);
      });
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedType = button.getAttribute('data-type');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      const cardType = card.classList.contains(selectedType);
      if (selectedType === 'all' || cardType) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

