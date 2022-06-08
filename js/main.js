// change naber styles on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
});

// toggle menu button
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn= document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex';
    openBtn.style.display= 'none';
    closeBtn.style.display= 'inline-block';
});

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    openBtn.style.display= 'inline-block';
    closeBtn.style.display= 'none';
});


// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        //change icon

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus';
        }

    })
});

//swiper js 
var swiper = new Swiper(".testimonials__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        900: {
          slidesPerView: 2,
        },
  }});





