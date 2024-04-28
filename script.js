// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerOffset = 70; // Adjust this value based on your header height
    const elementPosition = targetElement.offsetTop - headerOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


const letters = document.querySelectorAll('.letter');
const totalLetters = letters.length;

function animateName() {
  letters.forEach((letter, index) => {
    const randomDelay = Math.floor(Math.random() * totalLetters);
    letter.style.setProperty('--delay', randomDelay);
    letter.style.animation = 'none';
    setTimeout(() => {
      letter.style.animation = 'letterAnimation 0.5s ease-in-out forwards';
    }, randomDelay * 300); // Delay in milliseconds
  });
}

setInterval(animateName, 4000); // Call animateName every 2 seconds