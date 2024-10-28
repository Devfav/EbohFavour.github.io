/*=============== SHOW MENU ===============*/
// Get the menu, toggle, and close elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show the menu when nav-toggle is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide the menu when nav-close is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
// Get all navigation links
const navLink = document.querySelectorAll('.nav__link');

// Function to remove the mobile menu
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When a nav__link is clicked, remove the 'show-menu' class to close the mobile menu
    navmenu.classList.remove('show-menu');
}

// Add event listener to each nav__link
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
  
    // Add or remove the class based on the scroll position
    window.scrollY >= 50 
      ? header.classList.add('blur-header') 
      : header.classList.remove('blur-header');
  };
  
  // Attach the scrollHeader function to the scroll event
  window.addEventListener('scroll', blurHeader);
  

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
 
const sendEmail = (e) =>{
    e.preventDefault()

    // Send the form data using emailjs
    emailjs.sendForm('service_le35p7g', 'template_ka80tc9', '#contact-form', 'BhNCwbtEMyJcj3478')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            
            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

// Attach the event listener to the form
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher that 350 viewport height, and the show.scroll class to the tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
} 

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    //reset: true // Animations repeat
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .services__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})