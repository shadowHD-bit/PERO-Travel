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
    prevArrow: $('.btn_prevv'),
    nextArrow: $('.btn_nextt'),
});
});



let sortPricePlus = document.querySelector('#price_plus_sort')
let priceBtnSort = document.querySelector('.title_price_sort')
let priceSortContent = document.querySelector('.price_sort_content')

priceBtnSort.addEventListener('click', () => {
  if(sortPricePlus.className == 'fas fa-plus'){
    priceSortContent.style.display = 'contents'
    sortPricePlus.classList.remove('fa-plus')
    sortPricePlus.classList.add('fa-minus')
  }
  else{
    priceSortContent.style.display = 'none'
    sortPricePlus.classList.remove('fa-minus')
    sortPricePlus.classList.add('fa-plus')
  }
})

let lowerChange = document.querySelector('#lower')
let upperChange = document.querySelector('#upper')

let lowerValue = lowerChange.value
let upperValuer = upperChange.value

$('#slider').slider({
  values: [lowerValue, upperValuer],
  range: true,
  min: 0,
  max: 10000,
  create: displaySliderValues,
  slide: displaySliderValues
})

let values
lowerChange.addEventListener('input', (e) => {
  values = $( "#slider" ).slider( "values" );
  $( "#slider" ).slider( "values", [ e.target.value, values[1]] )
})
upperChange.addEventListener('input', (e) => {
  values = $( "#slider" ).slider( "values" );
  $( "#slider" ).slider( "values", [ values[0], e.target.value] )
})

function displaySliderValues() {
  $('#lower').val($('#slider').slider("values", 0));
  $('#upper').val($('#slider').slider("values", 1));
}



let sortCountPlus = document.querySelector('#count_plus_sort')
let countBtnSort = document.querySelector('.title_count_sort')
let countSortContent = document.querySelector('.count_sort_content')

countBtnSort.addEventListener('click', () => {
  if(sortCountPlus.className == 'fas fa-plus'){
    countSortContent.style.display = 'contents'
    sortCountPlus.classList.remove('fa-plus')
    sortCountPlus.classList.add('fa-minus')
  }
  else{
    countSortContent.style.display = 'none'
    sortCountPlus.classList.remove('fa-minus')
    sortCountPlus.classList.add('fa-plus')
  }
})