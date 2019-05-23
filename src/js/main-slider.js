document.addEventListener("DOMContentLoaded", e => {
	$(".screen-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 660,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	})
})