import { fetchPicture } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
