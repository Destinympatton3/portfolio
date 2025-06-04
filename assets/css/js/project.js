const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedType = button.getAttribute('data-type');

    // Toggle active button style
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide cards based on type
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