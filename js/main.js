'use strict';


// --------- TABS----------------------------
$('button.tab').click(function () {
	$('.tab_wrapper').hide().eq($(this).index()).fadeIn()
	$('.tab').removeClass('active_tab');
	$(this).addClass('active_tab');
})

// ------------accordion-----------

$(document).ready(function () {
  $('.faq_title').click(function () {
    $(this).next('.faq-info').slideToggle();
  })
});


// ==============SCROLL===================
// -------------page scroll---------------

$('.page-scroll').click(function () {
  let scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName),
    scrollTop = scrollElem.offset().top;
  
  $('html, body').animate({
    scrollTop: scrollTop
  }, 1500);
});

// ----------------show arrow----------

let scrollArrow = document.querySelector('.arrow__up');

window.onscroll = () => {
  if (window.scrollY > 400) {
    scrollArrow.classList.remove('show_arrow');
  } else if (window.scrollY < 400) {
    scrollArrow.classList.add('show_arrow');
  }
// ----------------arrow scroll----------
  scrollArrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

};

// -----------------burger---------------

$('.burger__menu').click(function () {
  $('.burger__menu,.header__nav').toggleClass('active');
});
// ----------search open--------------
$('.src-open').click(function () {
  $('.search').toggleClass('active');
});
//--------------login open------------
$('.log-open').click(function () {
  $('.login').toggleClass('active');
});


// ?================================================
// =============SLIDERS===========
// -------------product slider--------------

$('.product__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [{
         breakpoint: 900,
     settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});

// -------------opinion slider---------------------

$('.opinion_slider').slick({
 infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: false,
    responsive: [{
         breakpoint: 770,
      settings: {
        arrows: false,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
// ========================================================

// ------------------check footer email-----------------
const emailCheck = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let inputCheck = document.querySelector('input.footer__mail');
let checkBtn = document.querySelector('button.email__btn');


function validateEmail(value) {
  return emailCheck.test(value);
 
}
checkBtn.addEventListener ('click',function () {
  if (validateEmail(inputCheck.value)) inputCheck.style.boxShadow = '1px 1px 5px 5px green';
  else inputCheck.style.boxShadow = '1px 1px 5px 5px red';
})
// inputCheck.addEventListener('input', updateInput);