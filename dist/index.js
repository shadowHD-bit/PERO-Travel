$(document).ready(function () {

let scr_video = {
          1: './video/video2.mp4',
          2: './video/video.mp4',
          3: './video/video3.mp4',
          4: './video/video2.mp4',
          5: './video/video.mp4'
        };

let $slider = $(".slider");
let item = $(".item")
let bg_video = $(".source")
let video = $('#bgplayvideo')
jQuery(document).ready(function($) {
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 500,
      centerMode: true,
      focusOnSelect: true,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      variableWidth: true,
      swipe: false
  });
});
let updateSliderCounter = function (slick, currentIndex, nextSlide) {
    let current = slick.slickCurrentSlide() + 1;
    let next = nextSlide + 1;
        (item[next-1]).innerHTML ='<i class="fas fa-play-circle"></i>'
        $(item[current-1]).html('')
        bg_video.attr('src', scr_video[next])
        video.load()
      };
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    updateSliderCounter(slick, currentSlide, nextSlide);
  });
});




jQuery(document).ready(function($) {
  $('.popular_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    initialSlide: 1,
    arrows:true,
    slideToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    swipe: true,
    dotsClass: 'custom-dots',
    prevArrow: $('.btn_prev'),
    nextArrow: $('.btn_next'),
});
});

jQuery(document).ready(function($) {
  $('.comment_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    initialSlide: 1,
    arrows:true,
    slideToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    swipe: true,
    dotsClass: 'custom-dots',
    prevArrow: $('.btn_prev'),
    nextArrow: $('.btn_next'),
});
});
