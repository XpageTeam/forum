document.addEventListener("DOMContentLoaded", e => {
	$(".tovar-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendArrows: $(".tovar__slider-arrows")
	})

	$(".tovar-slider .slick-cloned .fancybox")
		.removeClass("fancybox")
		.removeAttr("data-fancybox")
})