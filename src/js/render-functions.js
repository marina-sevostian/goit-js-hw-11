export function renderImages(images) {
  const markup = images
    .map(image => {
      return `
  <li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <p class="">Likes ${image.likes}</p>
  <p class="">Views ${image.views}</p>
  <p class="">Comments ${image.comments}</p>
  <p class="">Downloads ${image.downloads}</p>
</li>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
