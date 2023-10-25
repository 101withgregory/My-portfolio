/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('skills-active')
        })
        target.classList.add('skills-active')


        tabs.forEach(tab=>{
            tab.classList.remove('skills-active')
        })
        tab.classList.add('skills-active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work-item')

function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener('click',activeWork));
/*===== Work Popup =====*/
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('work-button')){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click',togglePortfolioPopup);


function portfolioItemDetails(portfolioItem){
    document.querySelector('.pp-thumbnail img').src =portfolioItem.querySelector('.work-img').src
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services-modal'),
modalBtns = document.querySelectorAll('.services-button'),
modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click',()=>{
           modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
           })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials-container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.input')

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add('focus')
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ''){
        parent.classList.remove('focus')
    }
}

inputs.forEach(input =>{
    input.addEventListener('focus',focusFunc)
    input.addEventListener('blur',blurFunc)
})
// ============active link =========
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove('active-link'));
    link.classList.add('active-link');
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});


