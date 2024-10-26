import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');
const fetchImagesBtn = document.querySelector('.search-form-btn');
let searchFormEl = document.querySelector('.search-form');

fetchImagesBtn.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = input.value.trim();
  cleanHtml();
  if (inputValue !== '') {
    fetchImages(inputValue)
      .then(foundImages => {
        if (foundImages.length === 0) {
          return iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            color: '#ef4040',
            close: false,
          });
        }
        renderImages(foundImages);
        SimpleLightbox.refresh();
      })
      .catch(error => console.log(error));
  }
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function cleanHtml() {
  gallery.innerHTML = '';
}
//   searchFormEl.reset();
