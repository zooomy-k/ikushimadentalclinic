jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 1000) {
    jQuery('#totop').show();
  } else {
    jQuery('#totop').hide();
  }
});

jQuery('#totop').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
