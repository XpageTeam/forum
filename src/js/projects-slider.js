import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {
	$(".main-projets").each((i, el) => {
		$(el).find(".projects-slider").slick({
			slidesToShow: 1,
			accessibility: false,
			slidesToScroll: 1,
			appendArrows: $(el).find(".main-projets__title-arrows"),
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	})
})