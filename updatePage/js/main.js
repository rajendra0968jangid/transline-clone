jQuery(function ($) {
  'use strict'; $('.mean-menu').meanmenu({ meanScreenWidth: "991" }); $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); }); $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) { $('.navbar-area').addClass("is-sticky"); }
    else { $('.navbar-area').removeClass("is-sticky"); }
  }); $('.searchbtn').on('click', function () { $('.search-area').toggleClass('active'); }); $('.close-searchbox').on('click', function () { $('.search-area').removeClass('active'); }); $('.odometer').appear(function (e) { var odo = $(".odometer"); odo.each(function () { var countNumber = $(this).attr("data-count"); $(this).html(countNumber); }); }); $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({ disableOn: 100, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); scrollCue.init(); $('.panther-slider').owlCarousel({ loop: true, margin: 20, nav: false, dots: false, autoplay: true, autoplayTimeout: 1000, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 2 }, 570: { items: 2 }, 768: { items: 4 }, 992: { items: 3 }, 1200: { items: 4 } } }); $('.panther-slider-two').owlCarousel({ loop: true, margin: 20, nav: false, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 2 }, 570: { items: 3 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 } } }); $('.experts-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 } } }); $('.portfolio-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }); $('.team-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 } } }); $('.services-three-slider').owlCarousel({ loop: true, margin: 25, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 } } }); $('.testimonials-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-right'></i>", "<i class='bx bx-chevron-left'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 1 }, 768: { items: 2 }, 992: { items: 1 }, 1200: { items: 1 } } }); $('.testimonials-three-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 2 } } }); $('.blog-slider').owlCarousel({ loop: true, margin: 20, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",], responsivee: { 0: { items: 1 }, 570: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 2 } } }); const settings = { fill: '#F76031', background: 'transparent' }
  const sliders = document.querySelectorAll('.range-slider'); Array.prototype.forEach.call(sliders, (slider) => { slider.querySelector('input').addEventListener('input', (event) => { slider.querySelector('span').innerHTML = event.target.value; applyFill(event.target); }); applyFill(slider.querySelector('input')); }); function applyFill(slider) { const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min); const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`; slider.style.background = bg; }
  $(function () { $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); if (scrolled > 100) $('.go-top').addClass('active'); if (scrolled < 100) $('.go-top').removeClass('active'); }); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 100); }); }); function makeTimer() {
    var endTime = new Date("november  30, 2025 17:00:00 PDT"); var endTime = (Date.parse(endTime)) / 1000; var now = new Date(); var now = (Date.parse(now) / 1000); var timeLeft = endTime - now; var days = Math.floor(timeLeft / 86400); var hours = Math.floor((timeLeft - (days * 86400)) / 3600); var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60); var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60))); if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days + "<span>Days</span>"); $("#hours").html(hours + "<span>Hours</span>"); $("#minutes").html(minutes + "<span>Minutes</span>"); $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(
    function () {
      makeTimer();
    }, 300
  );
  jQuery(window).on('load', function () {
    $('.preloader').addClass('preloader-deactivate');
  })
}(jQuery));

const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
})
