let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
    
    // Update the index to the next image
    currentIndex = (currentIndex + 1) % totalImages;
    
    // Add the 'active' class to the new image
    images[currentIndex].classList.add('active');
}

// Auto-change image every 5 seconds
setInterval(changeImage, 5000);