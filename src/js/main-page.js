// import $ from "jquery"
import fpSettings from "./main-page-settings.js"
import is from "is_js"
import fullpage from "./fullpage.js"

if (document.querySelector("body").classList.contains("main"))
	require("../css/fullpage.css")

document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		let fTextBtn = document.querySelectorAll(".toggle-btn");

		if (!fTextBtn.length)
			return

		for (var btn of fTextBtn)
			btn.addEventListener("click", function(){
				let textBlock = this.closest(".footer-text");

				if (this.classList.contains("active")){
					this.classList.remove("active")

					textBlock.classList.remove("js__opened")
				}else{
					this.classList.add("active")

					textBlock.classList.add("js__opened")
				}
			})
	})()

	
	if (!document.body.classList.contains("main"))
		return

	let anchors = [],
		anchItems = document.querySelectorAll("[data-anchor]"),
		isFirstLaunch = true;

	if (!anchItems.length)
		return

	for (var anch of anchItems)
		anchors.push(anch.getAttribute("data-anchor"))


	if (!is.mobile())
		window.fullpage = new fullpage(".content", {
			licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
			//Навигация
			menu: '.navigation',
			lockAnchors: false,
			anchors: anchors,
			navigation: true,
			navigationPosition: 'right',
			// navigationTooltips: ['firstSlide', 'secondSlide'],
			showActiveTooltip: false,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',

			//Скроллинг
			css3: true,
			scrollingSpeed: fpSettings.fullpageSpeed,
			autoScrolling: true,
			fitToSection: true,
			fitToSectionDelay: 1000,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			continuousHorizontal: false,
			scrollHorizontally: false,
			interlockedSlides: false,
			dragAndMove: false,
			offsetSections: false,
			resetSliders: false,
			fadingEffect: false,
			// normalScrollElements: '#element1, .element2',
			scrollOverflow: false,
			scrollOverflowReset: false,
			scrollOverflowOptions: null,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,

			//Доступ
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//Дизайн
			controlArrows: true,
			verticalCentered: true,
			// sectionsColor : ['#ccc', '#fff'],
			paddingTop: $(".head").outerHeight() + "px",
			paddingBottom: '0',
			fixedElements: '#navigation',
			responsiveWidth: 300,
			responsiveHeight: 0,
			responsiveSlides: false,
			parallax: false,
			parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

			//Настроить селекторы
			sectionSelector: '.main-screen',
			slideSelector: '.slidesdfsdfdsf',

			lazyLoading: true,

			//события
			onLeave: function(origin, destination, direction){
				setTextColor(destination)
				
				if (destination.isLast && !isFirstLaunch){
					setTimeout(e => {
						document.addEventListener("wheel", toFooterEvent, {
							once: true
						})					
					}, fpSettings.fullpageSpeed)

					setTimeout(e => {
						document.addEventListener("touchstart", function(e){
							window.touchMoveStartY = e.touches[0].screenY
						}, {
							once: true,
							passive: true
						})

						document.addEventListener("touchmove", toFooterEvent, {
							once: true,
							passive: true
						})
					}, fpSettings.fullpageSpeed)
				}
			},
			afterLoad: function(origin, destination, direction){
				setTextColor(destination)
				document.body.classList.remove("loading")
				document.body.classList.add("loaded")

				if (destination.isLast && isFirstLaunch){
					setTimeout(e => {
						document.addEventListener("wheel", toFooterEvent, {
							once: true
						})					
					}, fpSettings.fullpageSpeed)

					setTimeout(e => {
						document.addEventListener("touchstart", function(e){
							window.touchMoveStartY = e.touches[0].screenY
						}, {
							once: true,
							passive: true
						})

						document.addEventListener("touchmove", toFooterEvent, {
							once: true,
							passive: true
						})
					}, fpSettings.fullpageSpeed)

					;(function(){
						let fpBtn = document.querySelector(".fp-scroll");

						if (!fpBtn)
							return

						fpBtn.addEventListener("click", toFooterEvent, {
							once: true
						})
					})()
				}

				isFirstLaunch = false
			},
			afterRender: function(){},
			afterResize: function(width, height){},
			afterResponsive: function(isResponsive){},
			afterSlideLoad: function(section, origin, destination, direction){},
			onSlideLeave: function(section, origin, destination, direction){
				
			}
		})
	else{
		document.body.classList.remove("loading")
		document.body.classList.add("loaded")
	}


	;(function(){
		let fpBtn = document.querySelector(".fp-scroll");

		if (!fpBtn)
			return

		fpBtn.addEventListener("click", function() {
			window.fullpage.moveSectionDown()

			if (window.fullpage.getActiveSection().isLast)
				this.addEventListener("click", toFooterEvent, {
					once: true
				})	
		})
	})()

	


})

const footer = document.querySelector("footer");

const setTextColor = targetSection => {
	if (is.mobile() || window.matchMedia(fpSettings.mobileMedia).matches)
		return

	let section = document.querySelector("[data-anchor='"+targetSection.anchor+"']"),
		sections = document.querySelectorAll("[data-text-color]");

	// console.log(section, targetSection)

	if (section.hasAttribute("data-text-color")){
		document.body.classList.add(section.getAttribute("data-text-color"))

		toggleLogo("white")
	}else{
		toggleLogo("color")
		for (var sec of sections)
			document.body.classList.remove(sec.getAttribute("data-text-color"))
	}
},
toggleLogo = targetLogo => {
	if (is.mobile() || window.matchMedia(fpSettings.mobileMedia).matches)
		return

	let target = document.querySelector(".logo__"+targetLogo);

	if (!target)
		return

	document.querySelector(".logo .active").classList.remove("active")

	target.classList.add("active")
},
toFooterEvent = e => {
	// if (window.matchMedia("screen and (max-width: 1000px)").matches)
	if (is.mobile())
		return

	let delta;

	switch (e.type){
		case "wheel":
			delta = Math.max(-1, Math.min(1,
				(e.wheelDelta || -e.deltaY || -e.detail)))
		break

		case "touchmove":
			if (e.touches[0].screenY - window.touchMoveStartY > -fpSettings.touchMoveLength)
				return

			delta = -1;

		break
	}

	if (delta > 0)
		return

	window.isFooterActive = true;

	let activeSection = window.fullpage.getActiveSection().item;

	document.body.classList.add("js__scroll-to-footer")

	let notColorSection = document.querySelector(".main-screen:not([data-text-color])");

	setTextColor({anchor: notColorSection.getAttribute("data-anchor")})

	document.addEventListener("wheel", fromFooterEvent, {
		once: true
	})

	document.addEventListener("touchstart", function(e){
		window.touchMoveStartY = e.touches[0].screenY
	}, {
		once: true,
		passive: true
	})

	document.addEventListener("touchmove", fromFooterEvent, {
		once: true,
		passive: true
	})

	window.fullpage.setAllowScrolling(false)
},
fromFooterEvent = e => {
	// if (window.matchMedia("screen and (max-width: 1000px)").matches)
	if (is.mobile())
		return

	let delta;

	switch (e.type){
		case "wheel":
			delta = Math.max(-1, Math.min(1,
				(e.wheelDelta || -e.deltaY || -e.detail)))
		break

		case "touchmove":
			delta = e.touches[0].screenY - window.touchMoveStartY < fpSettings.touchMoveLength ? -1 : 1

		break
	}

	if (delta < 0 || footer.scrollTop){
		document.addEventListener("wheel", fromFooterEvent, {
			once: true
		})

		document.addEventListener("touchstart", function(e){
			window.touchMoveStartY = e.touches[0].screenY
		}, {
			once: true,
			passive: true
		})

		document.addEventListener("touchmove", fromFooterEvent, {
			once: true,
			passive: true
		})
		return
	}

	window.isFooterActive = false;

	let activeSection = window.fullpage.getActiveSection().item;

	document.body.classList.remove("js__scroll-to-footer")
	setTextColor({anchor: activeSection.getAttribute("data-anchor")})

	setTimeout(e => {
		window.fullpage.setAllowScrolling(true)

		document.addEventListener("wheel", toFooterEvent, {
			once: true
		})

		document.addEventListener("touchstart", function(e){
			window.touchMoveStartY = e.touches[0].screenY
		}, {
			once: true,
			passive: true
		})

		document.addEventListener("touchmove", toFooterEvent, {
			once: true,
			passive: true
		})
	}, fpSettings.fullpageSpeed)
}