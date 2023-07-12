 
/* CODE FOR TOP HEADER */

$(function () {
    $(document).scroll(function () {
        const $nav = $(".top-header");
        const $navLinks = $(".nav-links");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navLinks.toggleClass('color-change', $(this).scrollTop() > $navLinks.height());
    });
});


/* Aside Bar */

const openAside = document.querySelectorAll(".fa-bars-staggered");
const closeAside = document.querySelectorAll(".close-aside");
const aside = document.querySelector('.aside');
const asideLinks = document.querySelectorAll('.aside-links');

function sideNav() {

    for (x = 0; x < openAside.length; x++) {
        openAside[x].addEventListener('click', function () {
           aside.classList.add("show-aside");
        });
    }

    for (c = 0; c < closeAside.length; c++) {
        closeAside[c].addEventListener('click', function () {
           aside.classList.remove("show-aside");
        });
    }

    for (let y = 0; y < asideLinks.length; y++) {
        asideLinks[y].addEventListener('click', function () {
            aside.classList.remove("show-aside");
        });
    }

    
}
sideNav();


/* Higlight Nav Links on Scroll */

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");


// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("li a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("li a[href*=" + sectionId + "]").classList.remove("active");
    }
  });


}









/* CODE FOR ANIMATIONS ON SCROLL */

const scrollElement1 = document.querySelectorAll('.js-scroll1');
const scrollElement2 = document.querySelectorAll('.js-scroll2');
const scrollElement3 = document.querySelectorAll('.js-scroll3');
const scrollElement4 = document.querySelectorAll('.js-scroll4');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop >
    (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement1 = (element) => {
  element.classList.add("scrolled1");
};

const hideScrollElement1 = (element) => {
  element.classList.remove("scrolled1");
};

const displayScrollElement2 = (element) => {
  element.classList.add("scrolled2");
};

const hideScrollElement2 = (element) => {
  element.classList.remove("scrolled2");
};

const displayScrollElement3 = (element) => {
  element.classList.add("scrolled3");
};

const hideScrollElement3 = (element) => {
  element.classList.remove("scrolled3");
};

const displayScrollElement4 = (element) => {
  element.classList.add("scrolled4");
};

const hideScrollElement4 = (element) => {
  element.classList.remove("scrolled4");
};

const handleScrollAnimation1 = () => {

  scrollElement1.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement1(el);
    } else if (elementOutView(el)) {
      hideScrollElement1(el);
    }
  });

  scrollElement2.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement2(el);
    } else if (elementOutView(el)) {
      hideScrollElement2(el);
    }
  });

  scrollElement3.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement3(el);
    } else if (elementOutView(el)) {
      hideScrollElement3(el);
    }
  });

  scrollElement4.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement4(el);
    } else if (elementOutView(el)) {
      hideScrollElement4(el);
    }
  });

};

window.addEventListener('scroll', () => {
  handleScrollAnimation1();
});
