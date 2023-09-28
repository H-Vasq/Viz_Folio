// Get all project elements
const projectElements = document.querySelectorAll('.project');

// Get modal and modal content elements
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.close');

// Function to open the image modal
function openImageModal(event) {
    const project = event.currentTarget;
    const image = project.querySelector('img');

    // Set the image source in the modal
    modalImage.src = image.src;

    // Show the modal
    modal.style.display = 'block';

    // Hide the "View Project" text
    project.querySelector('.overlay').style.opacity = 0;

    // Add a class to the project element to style it
    project.classList.add('modal-open');
}

// Function to close the image modal
function closeImageModal() {
    // Hide the modal
    modal.style.display = 'none';

    // Show the "View Project" text on hover
    projectElements.forEach((project) => {
        project.querySelector('.overlay').style.opacity = 0;
        // Remove the class to revert to default styling
        project.classList.remove('modal-open');
    });
}

// Add click event listeners to all project elements
projectElements.forEach((project) => {
    project.addEventListener('click', openImageModal);

    // Show the "View Project" text on hover
    project.addEventListener('mouseenter', () => {
        project.querySelector('.overlay').style.opacity = 1;
    });

    // Hide the "View Project" text when not hovering
    project.addEventListener('mouseleave', () => {
        project.querySelector('.overlay').style.opacity = 0;
    });
});

// Close the modal when the close button is clicked
modalClose.addEventListener('click', closeImageModal);
