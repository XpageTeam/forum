document.addEventListener("DOMContentLoaded", e => {
	$(".main-news").each((i, el) => {
		$(el).find(".news-slider").slick({
			slideToScroll: 1,
			slidesToShow: 3,
			appendArrows: $(el).find(".main-news__arrows"),
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