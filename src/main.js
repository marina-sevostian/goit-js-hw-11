import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

// import './js/pixabay-api';
// import './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let gallery = document.querySelector('.gallery');
const fetchImagesBtn = document.querySelector('.search-form-btn');
let searchFormEl = document.querySelector('.search-form');
let inputForm = document.querySelector('.search-form-input');

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = inputForm.value.trim();
  cleanHtml();
  if (inputValue !== '') {
    fetchImages(inputValue)
      .then(images => {
        if (!images.hits) {
          return iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            color: '#ef4040',
            close: false,
          });
        }
        renderImages(images);
        SimpleLightbox.refresh();
        // gallery.refresh();
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
// JSON.parse(foundImages);

// let gallery = $('.gallery a').simpleLightbox();

// gallery.refresh();
