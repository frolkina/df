$(function () {
  $(".burger, .burger-pos, .overlay, .header__menu a").on("click", function () {
    $(".header__inner").toggleClass("header__inner-hover");
    $(".header__menu").toggleClass("header__menu--open");
    $(".overlay").toggleClass("overlay--show");
  });
  // $(".burger, .burger-pos, .overlay, .header__menu a").on("click", function (e) {
    // e.preventDefault();
    // if ($(".burger").hasClass("burger-pos")) {
    //   $(".burger").removeClass("burger-pos");
    // } else {
    //   $(".burger").addClass("burger-pos");
    // }

  // });

  $(".about__slider").slick({
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    appendDots: $('.about__slider-dots'),
    slidesToShow: 1,
    // autoplay: true,
  });

  $(".portfolio__slider").slick({
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    appendDots: $('.portfolio__slider-dots'),
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
  });
  $(".header__menu a, .header__content a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault()
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 900)
    
  });

  // Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

var makeStickyThreshold = 130;
var reappearThreshold = 150;
var navbarHeight = $('.header__inner').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header__inner').removeClass('header-down').addClass('header-up');
        $('.header__inner').removeClass('header-fixed');
        $(".header__menu").removeClass("header__menu--open");
        $(".burger").removeClass("burger--active");
        $(".overlay").removeClass("overlay--show");
      } else {
        // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.header__inner').removeClass('header-up').addClass('header-down');
        $('.header__inner').removeClass('header-up').addClass('header-down');
        // $(".header__inner").addClass("header-fixed");
      };
      if ($(window).height() < $('.header').height()) { 
        // $('.header__inner').removeClass('header-fixed');
      }
    }
    if (st > lastScrollTop) {
      console.log("Scrolled down.");
  
      if (st > 100) {
        $('header').addClass('header--hidden');
      }
    } else {
      console.log("Scrolled up.");
      if (st > 500) {
        $('.header__inner').addClass('header-fixed')
          // .removeClass('header--hidden');
      }
  
      if (st < 100) {
        // $('.header__inner').removeClass('header--hidden');
      }
  
      if (st < 3) {
        $('.header__inner').removeClass('header-fixed');
      }
    }
    lastScrollTop = st;
  };

  
  



});
