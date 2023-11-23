(function ($) {

  /* --------------------------------------------------
    メニュー開閉
  -------------------------------------------------- */
  const body = $('body');
  const header = $('.header');
  const BtnOpen = $('.js-tgl-menu');
  const classname = 'is__open';
  BtnOpen.on('tap click', function () {
    if (body.hasClass(classname)) {
      body.removeClass(classname);
      header.removeClass(classname);
    } else {
      body.addClass(classname);
      header.addClass(classname);
    }
  });
  $(window).on('resize', function () {
    if (window.matchMedia( "(min-width: 768px)" ).matches) {
      if (body.hasClass(classname)) {
        body.removeClass(classname);
        header.removeClass(classname);
      }
    }
  });

  /* --------------------------------------------------
    サブメニュー開閉
  -------------------------------------------------- */
  const submenu = '.menu--child';
  const subBtnOpen = $('.js_tgl_open-close');
  const classname2 = 'is__open';
  subBtnOpen.on('tap click', function () {
    $(this).next(submenu).slideToggle('fast');
    $(this).toggleClass(classname2);
  });

  /* --------------------------------------------------
    スクロールで処理
  -------------------------------------------------- */
  const $headNav = $('.header');
  const $scrollY = $('.main').offset().top; // scroll量
  const $aadclass = 'is__fixed'; // add css class
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > $scrollY && $headNav.hasClass($aadclass) == false) {
      //headerの高さ分上に設定
			$headNav.css({'top': '-160px'});
			$headNav.addClass($aadclass);
			$headNav.animate({'top': 0}, 800);
		}
		else if($(this).scrollTop() < $scrollY && $headNav.hasClass($aadclass) == true){
      $headNav.removeClass($aadclass);
		}
  });

  /* --------------------------------------------------
    anchor link
  -------------------------------------------------- */
  const $anchor = 'a[href^="#"]';
  const $_header = $('.header');

  $($anchor).on('tap click', function() {
    const speed = 200; // ミリ秒
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const headerHeight = $_header.height();
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  $(window).on('load', function() {
    const headerHeight = $_header.height();
      if(document.URL.match("#")) {
      const str = location.href ;
      const cut_str = "#";
      const index = str.indexOf(cut_str);
      const href = str.slice(index);
      const target = href;
      const position = $(target).offset().top - headerHeight;
      $("html, body").stop().animate({scrollTop:position}, 200, 'swing');
      return false;
    }
  });

})(jQuery);