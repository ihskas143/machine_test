
// Get elements
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeBtn');

// Show the overlay when menu is clicked
menu.onclick = function () {
    menuOverlay.style.width = '40%'; // Fullscreen overlay
};

// Close the overlay when the close button is clicked
closeBtn.onclick = function () {
    menuOverlay.style.width = '0'; // Hide overlay
};

// Optionally, close the overlay when clicking anywhere outside the content
window.onclick = function (event) {
    if (event.target == menuOverlay) {
        menuOverlay.style.width = '0';
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const tooltipCard = document.getElementById('tooltipCard');
    const tooltipContent = document.getElementById('tooltipContent');
    const locationPointers = document.querySelectorAll('.location-pointer');

    locationPointers.forEach(pointer => {
        // Show tooltip on mouseover
        pointer.addEventListener('mouseover', function (event) {
            const location = pointer.getAttribute('data-location');
            tooltipContent.innerHTML = createCustomTooltip(location);

            // Position the tooltip near the pointer
            tooltipCard.style.display = 'block';
            tooltipCard.style.top = (event.pageY - 50) + 'px'; // Adjust positioning
            tooltipCard.style.left = (event.pageX + 15) + 'px';
        });

        // Hide tooltip when the mouse leaves the pointer
        pointer.addEventListener('mouseout', function () {
            tooltipCard.style.display = 'none';
        });

        // Move tooltip with mouse
        pointer.addEventListener('mousemove', function (event) {
            tooltipCard.style.top = (event.pageY - 50) + 'px'; // Adjust positioning
            tooltipCard.style.left = (event.pageX + 15) + 'px';
        });
    });

    // Function to generate the tooltip content dynamically
    function createCustomTooltip(location) {
        return `
            <div>
                <h4>SHM Shipcare</h4>
                <p>Location: ${location}</p>
                <p class="view-map">View Map</p>
            </div>
        `;
    }
});


// Slider functionality for banner
let currentIndex = 0;
const slides = document.querySelectorAll('.video-banner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

showSlide(currentIndex);
