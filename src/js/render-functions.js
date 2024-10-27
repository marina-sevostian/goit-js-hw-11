let gallery = document.querySelector('.gallery');

export function renderImages(images) {
  const markup = images
    .map(image => {
      console.log('img', image);
      return `<div class="photo">
   <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="info">
  <p class="">Likes ${image.likes}</p>
  <p class="">Views ${image.views}</p>
  <p class="">Comments ${image.comments}</p>
  <p class="">Downloads ${image.downloads}</p>
  </div>
     </div> `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
