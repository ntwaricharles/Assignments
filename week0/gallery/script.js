document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "./images/bowling.jpg",
      thumb: "./images/bowling.jpg",
      title: "Bowling",
      description: "This is the description for Bowling."
    },
    {
      src: "./images/car.jpg",
      thumb: "./images/car.jpg",
      title: "Car",
      description: "This is the description for Car."
    },
    {
      src: "./images/home.jpg",
      thumb: "./images/home.jpg",
      title: "Home",
      description: "This is the description of Home."
    },
    {
      src: "./images/cyclist.jpg",
      thumb: "./images/cyclist.jpg",
      title: "Cyclist",
      description: "This is the description for Cyclist."
    },
    {
      src: "./images/creative.jpg",
      thumb: "./images/creative.jpg",
      title: "Creative",
      description: "This is the description for Creative."
    },
    {
      src: "./images/sky.jpg",
      thumb: "./images/sky.jpg",
      title: "Sky",
      description: "This is the description of sky."
    },
     {
      src: "./images/developer.jpg",
      thumb: "./images/developer.jpg",
      title: "developer",
      description: "This is the description for developer."
    },
    {
      src: "./images/Lanterns.jpg",
      thumb: "./images/Lanterns.jpg",
      title: "Lanterns",
      description: "This is the description for Lanterns."
    },
    {
      src: "./images/bulbs.jpg",
      thumb: "./images/bulbs.jpg",
      title: "bulbs",
      description: "This is the description for bulbs."
    },
    {
      src: "./images/laptop.jpg",
      thumb: "./images/laptop.jpg",
      title: "laptop",
      description: "This is the description for laptop."
    },
  ];

  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lbImage");
  const lbTitle = document.getElementById("lbTitle");
  const lbDescription = document.getElementById("lbDescription");
  const lbClose = document.getElementById("lbClose");
  const lbNext = document.getElementById("lbNext");
  const lbPrev = document.getElementById("lbPrev");

  // Create and append thumbnails
  images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img.thumb;
    thumb.alt = img.title;
    thumb.title = img.title;
    thumb.addEventListener("click", () => showLightbox(index));
    gallery.appendChild(thumb);
  });

  function showLightbox(index) {
    lbImage.src = images[index].src;
    lbTitle.textContent = images[index].title;
    lbDescription.textContent = images[index].description;
    lightbox.style.display = "flex";
    currentImageIndex = index;
    function updateNavButtons() {
    lbPrev.style.display = currentImageIndex === 0 ? "none" : "block";
    lbNext.style.display = currentImageIndex === images.length - 1 ? "none" : "block";  
  }
  updateNavButtons()
  }
  
  function hideLightbox() {
    lightbox.style.display = "none";
  }
  
  function nextImage() {
    // console.log(`currentImageIndex in nextImage is ${currentImageIndex}`);
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    showLightbox(currentImageIndex);
  }
  
  function prevImage() {
    // console.log(`currentImageIndex in previous image is ${currentImageIndex}`);
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = images.length - 1;  
    }
    showLightbox(currentImageIndex);
  }

  lbClose.addEventListener("click", hideLightbox);
  lbNext.addEventListener("click", nextImage);
  lbPrev.addEventListener("click", prevImage);

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      hideLightbox();
    }
  });

  let currentImageIndex = 0;
  showLightbox(currentImageIndex);
});
