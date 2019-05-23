import is from "is_js"

document.addEventListener("DOMContentLoaded", e => {
	let progressBar,
		slidesCount = document.querySelectorAll(".title-slide");

	if (slidesCount.length <= 1)
		return

	$(".title-slider").on("init", _ => {		

		let crumbsContainer = document.querySelector(".title-block__crumbs");


		progressBar = document.createElement("div");

		progressBar.classList.add("title-slider__progress")

		if (!crumbsContainer)
			return

		progressBar.style.transitionDuration = "4s"

		crumbsContainer.appendChild(progressBar)

		setTimeout(_ => {
			$(".title-slider__progress").addClass("active")
		}, 100)

	})

	if (!is.mobile())
		$(".title-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
		}).on("beforeChange", e => {
			$(".title-slider__progress").removeClass("active")
		}).on("afterChange", e => {
			$(".title-slider__progress").addClass("active")
		})
})