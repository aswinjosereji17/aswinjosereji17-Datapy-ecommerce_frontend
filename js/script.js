document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});



    function animateImage(image) {
      image.classList.add('animate');
      setTimeout(() => image.classList.remove('animate'), 1000); // Remove the class after 1 second to reset the animation
    }
