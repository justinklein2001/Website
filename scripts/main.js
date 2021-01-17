$(document).ready(function(){

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function() {
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  $('.about').masonry({
    //options
    itemSelector: '.about-item',
    columnWidth: 120,
    fitWidth: true,
    gutter: 0

  });

  //SLICK SLIDER
  $('.slider').slick({
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 3,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow:'<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  //SMOOTH SCROLL
  $('.menu li a[href^="#"]').on('click', function(e){
      e.preventDefault();

      var target = $(this.hash);

      if (target.length) {
          $('html, body').stop().animate({
              scrollTop: target.offset().top -60
          }, 1000);
      }

  });

  $('.btn-main a[href^="#"]').on('click', function(e){
    e.preventDefault();
  
    var target = $(this.hash);
  
    if (target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top -60
        }, 1000);
    }
  
  });

  $('.logo a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var target = $(this.hash);

    if (target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top -60
        }, 1000);
    }

  });



  //RESPONSIVE MENU START

  var body = $('body');
  var menuTrigger = $('.js-menu-trigger');
  var mainOverlay = $('.js-main-overlay');

  menuTrigger.on('click', function(){
    body.addClass('menu-is-active');
  });

  mainOverlay.on('click', function(){
    body.removeClass('menu-is-active');
  });
  $('.menu li a').on('click', function(){
    $('body').removeClass("menu-is-active");
  });


  //RESPONSIVE HEIGHT
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);



});
