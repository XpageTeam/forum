import {sameHeights} from "./x-widgets.js"

document.addEventListener("DOMContentLoaded", e => {
	sameHeights($(".s-step__text"))

	$(".a-advantages__row").each(function(){
		sameHeights($(this).find(".a-advantage__text"))
	})


	$(".w-partners").each((i, el) => {
		let $this = $(el);

		$this.find(".partners-slider").slick({
			slidesToShow: 5,
			accessibility: false,
			slidesToScroll: 1,
			appendArrows: $this.find(".w-partners__title-arrows"),
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 3
					}
				},{
					breakpoint: 660,
					settings: {
						slidesToShow: 2
					}
				}
			]
		})
	})


	$(".serts-slider").slick({
		variableWidth: true,
		accessibility: false,
		slidesToScroll: 1,
		swipeToSlide: true
	})

	;(function(){
		let auditListItems = document.querySelectorAll(".s-contain__title");

		if (!auditListItems.length)
			return

		for (var item of auditListItems)
			item.addEventListener("click", function(){
				if (this.classList.contains("js__active"))
					this.classList.remove("js__active")
				else
					this.classList.add("js__active")
			})
	})()
})