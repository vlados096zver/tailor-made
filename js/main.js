$(document).ready(function() {

  $(document).on('click', '.footer__link, .main-header__link ', function() {
    let target = $(this).attr('href');
    let pos = target.indexOf('#');
    if (pos !== -1) {
      target = target.substring(pos);
      let coordsScroll = $(target).offset().top
      $('html, body').animate({
        scrollTop: coordsScroll
      }, 800);
      return false;
    }
  })

  $('.preview__btn').on('click', function() {
    $('html,body').animate({
      scrollTop: $('.about').offset().top
    }, 800);
  });

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle(200);
  });

  $('.main-header__link').on('click', function() {
    if ($(window).width() <= 480) {
      $('.line-burger').removeClass('line-active');
      $('.main-header__list').slideUp(200);
    }
  })

  $(window).resize(function() {
    if (window.innerWidth > 480) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  })

})
