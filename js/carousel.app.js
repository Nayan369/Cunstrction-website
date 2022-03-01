

// navbar sticky with javascript

const navbar = document.getElementById('navBer');
const carsole = document.getElementById('carousel-add');
const sticky = navbar.offsetTop;
window.onscroll=function (){

  if(window.pageYOffset >= sticky){
    navbar.classList.add('fixed-top');
    navbar.classList.remove('padi');
    navbar.classList.add('padirm');
    carsole.classList.add('p-top');
  }else{
    navbar.classList.remove('fixed-top');
    navbar.classList.add('padi');
    navbar.classList.remove('padirm');
    carsole.classList.remove('p-top');
  }
}



// smooth scrolling to button javascript

const scrollToBtn = document.getElementById('scrollToBtn');
const rootElement = document.documentElement;

function scrollToTop () {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToBtn.addEventListener("click", scrollToTop);