var $win = $(window);
$win.on('load resize', function() {
  var windowWidth = window.innerWidth;
// 
// コンテンツのフェードイン
// 
    jQuery(function(){
      jQuery(window).scroll(function (){
          jQuery('.fadein').each(function(){
              var elemPos = jQuery(this).offset().top;
              var scroll = jQuery(window).scrollTop();
              var windowHeight = jQuery(window).height();
              if (scroll > elemPos - windowHeight + 200){
                  jQuery(this).addClass('scrollin');
              }
          });
      });
      jQuery(window).scroll();
    });
//
// スクロールに応じてヘッダーのbgc透明度を変更
//

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('header').addClass('header__opacity');
        if( $(window).width()<599 ){
          $('.header__title').addClass('opacity');
        } 
      } 
      else {
        $('header').removeClass('header__opacity');
        if( $(window).width()<599 ){
          $('.header__title').removeClass('opacity');
        }            
      }      
    });
  $(function(){
//
// ハンバーガーメニュー
//
  $('.btn_trigger').on('click',function(){
    $('.btn_trigger').toggleClass('btn_close');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').toggleClass('open');
      $('.overlay').toggleClass('open');
    } else {
      $(this).addClass('active');
      $('nav').toggleClass('open');
      $('.overlay').toggleClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.btn_trigger').removeClass('btn_close');
      $('nav').removeClass('open');      
    }
  });
  if( $(window).width()<375 ){
    $('.header__item>a').on('click',function(){
      $('.btn_trigger').removeClass('btn_close');
      $('body').removeClass('noscroll');
      });
    };
  });


  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
});
