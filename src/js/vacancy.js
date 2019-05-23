document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		let vacancy = document.querySelectorAll(".vacancy-item__title"),
			toggleTime = 300;

		if (!vacancy.length)
			return

		for (var title of vacancy)
			title.addEventListener("click", function(){
				let textElement = this.nextElementSibling;

				if (this.classList.contains("js__opened")){
					this.classList.remove("js__opened")

					$(textElement).slideUp(toggleTime)
				}else{
					this.classList.add("js__opened")
					$(textElement).slideDown(toggleTime)
				}
			})
	})()
})