document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const filterButtons = document.querySelectorAll('.filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('artModal');
  const modalTitle = document.getElementById('artModalTitle');
  const modalImage = document.getElementById('artModalImage');
  const modalDescription = document.getElementById('artModalDescription');

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

        galleryItems.forEach((item) => {
          const itemCategory = item.dataset.category;
          const shouldShow = selectedFilter === 'all' || itemCategory === selectedFilter;
          item.classList.toggle('hidden', !shouldShow);
        });
      });
    });
  }

  document.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!modal) return;

      const title = card.dataset.artwork;
      const image = card.dataset.image;
      const description = card.dataset.description;

      modalTitle.textContent = title;
      modalImage.src = image;
      modalImage.alt = title;
      modalDescription.textContent = description;

      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    });
  });
});
