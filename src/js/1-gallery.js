const { preview } = require("vite");

const createImages = images.map(({preview, original, description})image => {
    return `<li class= "item-gallery-item">
    <a class="gallery-link" href="${original}">
    <img
    class="gallery-image"
    src="${preview}" 
    alt="${description}"/>
    </a>
  </li>`;
}).join("");

containerImg.innerHTML = createImages;

const localStorageImg = localStorage.getItem("createImages", JSON.stringify("createImages"));
console.log(localStorageImg);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});



