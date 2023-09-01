import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

function createGalleryItems(gallery) {
  return gallery.map(({ preview, original, description }) => 
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`).join('')
};

const gallery = new SimpleLightbox('.gallery a.gallery__link', {
  captionSelector: '.gallery__image',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});