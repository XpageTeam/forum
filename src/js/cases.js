import {sameHeights} from "./x-widgets.js"

document.addEventListener("DOMContentLoaded", e => {
	sameHeights($(".case-list__item-features"))
	
	sameHeights($(".case-list__item-img"))

	$(".another-cases").each((i, el) => {
		let $this = $(el),
			slider;

		$(".another-cases").find(".case-slider").on("init", e => {
			sameHeights($(".case-slide__title"))
		})

		slider = $(".another-cases").find(".case-slider").slick({
			slidesToShow: 3,
			accessibility: false,
			slidesToScroll: 1,
			appendArrows: $this.find(".another-cases__title-arrows"),
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
						slidesToShow: 1,
						arrows: false,
						dots: true
					}
				}
			]
		})
	})
})