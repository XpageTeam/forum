import $ from "jquery";
import is from "is_js";

$(_ => {

	if (is.desktop()){

		$(".tabs-tab").click(function(){
			let $this = $(this);
			
			let id = $this.attr("data-id"),
				$parent = $this.closest(".tabs");
			

			// if ($this.hasClass("active"))
			// 	return


			$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");

			$this.addClass("active");
			$parent.find(".tabs-content[data-id='"+id+"']").addClass("active");

			$('html, body').animate({ scrollTop: $(".tabs-content[data-id='"+id+"']").offset().top - $('.head.js__show').innerHeight() - 20}, 500);



		});
	} else {
		$(".services__content-title").click(function(){
			let $this = $(this);
			
			$this.toggleClass('js__active');
			$this.nextAll('.services__content-wr').slideToggle();

		});

	}


});