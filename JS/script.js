//docuemnt object model

const DOMS = {
    body: document.body,
    backToTopButton: document.getElementById('back-to-top'),
    scrollLinks: document.querySelectorAll('.scroll-link'),
    projectDetails: document.querySelectorAll('.project-details'),
};

// Handler to toggle state of anchor elements
DOMS.scrollLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active-link' class from all links
        DOMS.scrollLinks.forEach(item => {
            item.classList.remove('active-link');
        });
        // Add 'active-link' class to the clicked link except for the 'Download CV' link
        if (this.textContent !== 'Download CV'){
            this.classList.add('active-link');
        }
    });
});

// Code Snippet #1 for script.js
// Implementation for 'Back to Top' button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopButton = document.getElementById("back-to-top");
    if (DOMS.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}



