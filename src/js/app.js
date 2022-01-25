// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import dots from './modules/dots';

// When DOM is ready
$(() => {
    const $body = $('body');
    const $header = $('.header');
    const $btnHamburger = $('.btn-hamburger');
    const $nav = $('.nav');
    const MODAL_OPENED_CLASS_NAME = 'is-modal-opened';
    const BTN_HAMBURGER_ACTIVE_CLASS_NAME = 'is-active';
    const NAVIGATION_ACTIVE_CLASS_NAME = 'is-active';
    const HEADER_SCROLL_CLASS_NAME = 'is-header-fixed';
    const SCROLL_OFFSET = 200;
  
	$btnHamburger.on('click', () => {
		$body.toggleClass(MODAL_OPENED_CLASS_NAME);
		$btnHamburger.toggleClass(BTN_HAMBURGER_ACTIVE_CLASS_NAME);
		$nav.toggleClass(NAVIGATION_ACTIVE_CLASS_NAME);
	});

	$(window).on('scroll', () => {
		const scroll = $(window).scrollTop();
	   
		 if (scroll >= SCROLL_OFFSET) {
		   $header.addClass(HEADER_SCROLL_CLASS_NAME);
		 }
		 else {
		   $header.removeClass(HEADER_SCROLL_CLASS_NAME);
		 }

	const swiper = new Swiper('.mySwiperBanner', '.mySwiper', {
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
    
   const swiper = new Swiper('.mySwiperArrows', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 2000,
    }
  });
});
