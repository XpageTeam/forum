import {sameHeights} from "./x-widgets.js"

document.addEventListener("DOMContentLoaded", e => {
	sameHeights($(".m-step__text"))

	let steps = document.querySelectorAll(".m-steps__item");

	if (!steps.length)
		return

	let respPadding = [
		{
			point: "1300px",
			padding: "20px" 
		},
	],
		defaultPadding = "38px";

	for (var pd of respPadding){
		if (!window.matchMedia("screen and (max-width: "+pd.point+")").matches)
			break

		defaultPadding = pd.padding;
	}

	for (let i = 0; i < steps.length; i++){
		steps[i].style.paddingTop = "calc("+i+" * "+defaultPadding+")"
		steps[i].style.paddingRight = "calc("+i+" * 7vh)"

		if (i + 1 == steps.length)
			break

		steps[i].style.width = "calc((100% - 185px) / "+(steps.length - 1)+")"
	}

})