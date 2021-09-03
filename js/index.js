const header = document.getElementById('header')
const navMenu = document.getElementById('navMenu')
const menu__box_fixed = document.getElementById('menu__box_fixed')
var navMenu_click = false
var scroll_position = 0

window.addEventListener('scroll', function (e) {
	scroll_position = window.scrollY
	if (scroll_position > header.scrollHeight - 20) {
		header.classList.add("header_sticky")
	}
	else {
		header.classList.remove("header_sticky")
	}
})

navMenu.addEventListener('click', function () {
	navMenu.classList.toggle('active')
	navMenu_click = !navMenu_click
	if (navMenu_click === true) {
		menu__box_fixed.style.right = '0'
	}
	else {
		menu__box_fixed.style.right = '-100%'
	}
})

function width_window() {
	var wdt = document.documentElement.clientWidth
	if (wdt < 981) {
		navMenu.style.display = 'block'
		menu__box_fixed.classList.add("active")
	}
	else {
		navMenu.style.display = 'none'
		menu__box_fixed.classList.remove("active")
	}
}
width_window()
window.addEventListener('resize', function () {
	width_window()
});
$('.swiper').each(function (index, element) {
	$(element).addClass('slide')
	var slide = element.children
	$.each(slide, function (prop, value) {
		if (value.classList.value === 'swiper-wrapper') {
			$(value).addClass('slide_wrapper')
			var slide_wrapper = value.children
			$.each(slide_wrapper, function (index, element) {
				if (element.classList.value === 'swiper-slide') {
					$(element).addClass('slide_slide')
				}
			})
		}
	})
})

const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	slidesPerView: 1,
	centereSlides: true,
});
