export const NewsSchemaScript = `

// Get necessary elements
const galleryItems = document.querySelectorAll('.photo-wrapper__item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const backdrop = document.querySelector('.backdrop');

// Attach event listeners to grid items
galleryItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    openLightbox(index);
    event.stopPropagation();
  });
});

// Attach event listeners to navigation buttons
prevBtn.addEventListener('click', (event) => {
  showPrevImage();
  event.stopPropagation();
});

nextBtn.addEventListener('click', (event) => {
  showNextImage();
  event.stopPropagation();
});

closeBtn.addEventListener('click', (event) => {
  closeLightbox(event);
  event.stopPropagation();
});

lightbox.addEventListener('click', (event) => {
  closeLightbox(event);
  event.stopPropagation();
});

lightboxImage.addEventListener('click', (event) => {
  event.stopPropagation();
  closeLightbox(event);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox(event);
  } else if (event.key === 'ArrowLeft') {
    showPrevImage();
    event.stopPropagation();
  } else if (event.key === 'ArrowRight') {
    showNextImage();
    event.stopPropagation();
  }
});

let currentImageIndex; // Current index of the image being displayed in the lightbox

const gallery = [
  {
    smallImg: "",
    largeImg: ""
  }
];

function openLightbox(index) {
  // Set the image source in lightbox to the clicked grid item's image source
  const clickedImageSrc = galleryItems[index].querySelector('img').src;
  lightboxImage.src = clickedImageSrc;

  // Update the current image index
  currentImageIndex = index;

  // Display the lightbox
  lightbox.style.display = 'block';
}

function closeLightbox(event) {
  // Hide the lightbox
    if( event.target === closeBtn || event.target !== lightboxImage){
    console.log("close");
    lightbox.style.display = 'none';
    }
}

function showPrevImage() {
  currentImageIndex--;

  // Wrap around to the last image if currently on the first image
  if (currentImageIndex < 0) {
    currentImageIndex = galleryItems.length - 1;
  }

  updateLightboxImage();
}

function showNextImage() {
  currentImageIndex++;

  // Wrap around to the first image if currently on the last image
  if (currentImageIndex >= galleryItems.length) {
    currentImageIndex = 0;
  }

  updateLightboxImage();
}

function updateLightboxImage() {
  const newImageSrc = galleryItems[currentImageIndex].querySelector('img').src;
  lightboxImage.src = newImageSrc;
}

//Share buttons
const facebookUrlPrefix = 'https://www.facebook.com/sharer/sharer.php?u=';
const twitterUrlPrefix = 'https://twitter.com/intent/tweet?url=';
const linkedinUrlPrefix = 'https://www.linkedin.com/shareArticle?mini=true&url=';

const facebookShareItem = document.querySelector('#share-facebook');
const twitterShareItem = document.querySelector('#share-twitter');
const linkedinShareItem = document.querySelector('#share-linkedin');

const setUrls = () => {
  facebookShareItem.href = facebookUrlPrefix + window.location.href;
  twitterShareItem.href = twitterUrlPrefix + window.location.href;
  linkedinShareItem.href = linkedinUrlPrefix + window.location.href;
};

setUrls();
`;
