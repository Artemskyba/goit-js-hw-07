import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createCardItems(galleryItems));

function createCardItems(cardsGallery) {
  return cardsGallery.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image "src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`).join('');
};

galleryEl.addEventListener("click", onCardClick);

function onCardClick(event) {
  event.preventDefault()
  if (event.target === event.currentTarget) {
    return;
  };

  const targetImgOriginalSize = event.target.dataset.source;
  const targetImgDescription = event.target.alt

  const instance = basicLightbox.create(`
    <div class="modal">
      <img class="gallery__image "src="${targetImgOriginalSize}" alt="${targetImgDescription}"/>
    </div>`, {
    onShow: () => {
      document.addEventListener("keydown", onEscape);
    },

    onClose: () => {
      document.removeEventListener("keydown", onEscape);
    },
  });

  instance.show()

  function onEscape(event) {
    if (event.keyCode === 27) {
      instance.close();
    }
  }
};
