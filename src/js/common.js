import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel"
import Swiper from "swiper/dist/js/swiper.js";

import "./tabs.js"
import "./forms.js"


window.$ = $;
window.jQuery = $;

require("./countTo.js");
require("./jquery.fancybox.js")
require("./jquery.menu-aim.js")

require("swiper/dist/css/swiper.min.css")
require("slick-carousel/slick/slick.css")
if (!is.touchDevice())
	require("selectize/dist/css/selectize.css")
require("../css/jquery.fancybox.css")


let scrollTimeout;

document.addEventListener("DOMContentLoaded", e => {

	let $bestOfferSlider = $(".best-offer-slider").on('init', slick => {
		}).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			// appendArrows: $('.testemonials-cont .testemonials-slider__arrow'),
			// fade: true,
			// arrows: false,
			// lazyLoad: 'progressive',
			autoplay: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
					}
				}
			]
	});

	$('.best-offer .slider-nav__link input[type="radio"]').on('change', function(){
		let value = $(this).val();

		$bestOfferSlider.slick('slickUnfilter');


		$bestOfferSlider.slick('slickFilter', function(id, slide){
			let $slide = $(slide);
			return +$slide.find("[data-id]").data("id") == value;
			filtered = false;
		})
	})


	$('.slider-nav .reset-filter').click(function(){
		$('.slider-nav input').prop('checked', false);
		$bestOfferSlider.slick('slickUnfilter');
	})
	



	


	
	$('.faq__item-top').click(function() {
		let $this = $(this);

		$this.closest('.faq__item').toggleClass('js__open');
		$this.next('.faq__item-bot').slideToggle();
	})


	$('.h-menu__item').click(function(){
		let $this = $(this);
		$('.h-menu__item').removeClass('active');
		$this.addClass('active');
	})


	if($('body').hasClass('js__scroll')){
		$("body").on('click', '[href*="#"]', function(e){
			e.preventDefault();
			$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - $('.head.js__show').innerHeight() }, 1000);
		});

	} else {
		$("body").on('click', '[href*="#"]', function(e){
			e.preventDefault();
			$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
		});
	}




	if ($(".security-stat__num").length){
		$(".security-stat__num").countTo();
	}

	// setTimeout(function(){
		$('.banner-logo').addClass('js__animated')

	// }, 2300)



	$(window).on('scroll', function(){
		if ($(".security-stat__num").length)
			if ($(".security-stat__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".security-stat__num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}
		
	})
	
	$(".fancybox").fancybox({
		animationEffect: false,
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		keyboard: false,
		modal: false,
		beforeClose(instance, slide){

		}
	})

	




	let $reviewsTestemonialsSlider = $(".reviews-cont .testemonials__list").on('init', slick => {

		}).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			appendArrows: $('.reviews-cont .testemonials-slider__arrow'),
			// fade: true,
			// arrows: false,
			// lazyLoad: 'progressive',
			autoplay: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
					}
				}
			]
	});

	$('.testemonials-nav__link input[type="radio"]').on('change', function(){
		let value = $(this).val();

		$testemonialsSlider.slick('slickUnfilter');
		$testemonialsSlider.slick('slickFilter', function(id, slide){
			let $slide = $(slide);
			return +$slide.find("[data-id]").data("id") == value;
			filtered = false;
		})
		console.log(11);

	})



	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})



	var menuClone = $('.h-menu').clone();
	var contactsClone = $('.head__contacts').clone();
	var socClone = $('footer .soc').clone();

	$('.mobile-menu').append(contactsClone);
	$('.mobile-menu').append(menuClone);
	$('.mobile-menu').append(socClone);


	if($(window).width() < 1200){
		$('.h-menu__link').click(function(e){
			e.preventDefault();

			$('body').removeClass('js__menu--open');
		})
	}



	

	if (!is.touchDevice()){
		window.selectizeOpen = false;

		$("select:not(.not-selectize)").selectize({
			onDropdownOpen(){
				window.selectizeOpen = true;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(false)
			},
			onDropdownClose(){
				window.selectizeOpen = false;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(true)
			}
		})
	}

	

	$("body").on("click", e => {
		let $target = $(e.target),
			$burger = $(".head__burger"),
			$menu = $(".head__menu");

		if (window.matchMedia("screen and (max-width: 1300px)").matches)
			if (!$burger.has($target).length
				&& !$burger.is($target)
				&& !$menu.has($target).length
				&& !$menu.is($target))
			{
				document.querySelector(".burger").classList.remove("active")

				document.querySelector(".head__menu").classList.remove("js__opened")

				window.mainMenuOpened = false;
			}
	})
})

// $(window).on("load scroll resize", e => {




// 	if ($(window).scrollTop() >= 800){
// 		$(".head").addClass("js__scrolled");
// 		$("body").addClass("js__scroll");
// 		setTimeout(e => {
// 			$(".head").addClass("js__show")
// 		}, 500);
// 	}else{
// 		$(".head").removeClass("js__scrolled").removeClass("js__show");
// 		$("body").removeClass("js__scroll");
// 	}

// });




// $(window).on("load scroll touchmove", function(){
// 	if ($(window).scrollTop() > 800){
// 		$(".scroll-top").fadeIn(300);
// 	}else{
// 		$(".scroll-top").fadeOut(300);
// 	};

// 	if($(window).width() > 660) {



// 		if($(window).scrollTop()>400){
// 			$('.head').addClass('js__fixed');
// 		}else {
// 			$('.head').removeClass('js__fixed');
// 		}
// 	}


// });