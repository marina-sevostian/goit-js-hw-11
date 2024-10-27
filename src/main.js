import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let gallery = document.querySelector('.gallery');
const fetchImagesBtn = document.querySelector('.search-form-btn');
let searchFormEl = document.querySelector('.search-form');
let inputForm = document.querySelector('.search-form-input');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = inputForm.value.trim();
  cleanHtml();
  //   loader();
  if (inputValue !== '') {
    fetchImages(inputValue).then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          color: '#ef4040',
          close: false,
        });
      }
      renderImages(images.hits);
      gallerySimpleLightbox.refresh();
    });
    // fadeOut();
    searchFormEl.reset();
  }
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function cleanHtml() {
  gallery.innerHTML = '';
}
// function loader() {
//   document.querySelector('.loader').classList.add('active');
// }
// function fadeOut() {
//   setTimeout(loader, 3000);
// }
// let mask = document.querySelector('.mask');

// window.addEventListener('load', () => {
//   mask.classList.add('hide');
//   setTimeout(() => {
//     mask.remove();
//   }, 600);
// });
