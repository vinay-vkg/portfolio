// menu icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle("navbar-active")
};

// ----------- scroll sections active link------
   
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('.navbar ul li a');

function deactiveNav(){
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle("navbar-active")
}
  
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -150;
      let height = sec.offsetHeight;
      let id =sec.getAttribute('id');
      if(top >offset && top <offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id +']').classList.add('active')
        });
      };
    });
  };



// ========== sticky Navbar==========
window.addEventListener("scroll", function() {
    let element = document.querySelector("#header"); // Replace "myElement" with the ID of the element you want to add the class to
    if (window.scrollY > 100) { // Replace "100" with the number of pixels the user needs to scroll before the class is added
      element.classList.add("sticky"); // Replace "myClass" with the name of the class you want to add
      
    } else {
      element.classList.remove("sticky"); // Remove the class if the user scrolls back up
    }
  });


  // <!-- swiper js  -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // ==========dark light made=====
  let darkModeIcon = document.querySelector('#darkMode-icon');
  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };

  // ==========scroll reveal made=====
  ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
  });


  ScrollReveal().reveal('.home-contact, .heading', { origin: 'top'});
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testmonial-wrapper', { origin: 'bottom'});
  ScrollReveal().reveal('.home-contact h1, .about-img img ,.contact form', { origin: 'left'});
  ScrollReveal().reveal('.home-contact h3, .home-contact p,.about-content', { origin: 'right'});