$(function () {
	
	//子・孫　要素はhide()で隠しておく
	$("#gnav li ul").hide();
	
	//それぞれ（親～孫まで）のli要素をホバーしたらどうするか
	$("#gnav li").hover(function () {
		
		//ホバーした直下ul要素のアニメーションが動いていないなら、動作をしてあげる
		
		$(">ul:not(:animated)", this).slideDown("fast");
		
		
	},function () {
		
		//ホバーが外れたら、動いていた要素を引っ込めます。
		$(">ul", this).slideUp("fast");
	});
 
});
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
	
