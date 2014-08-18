(function($){

	$.extend($.easing, {
		easeOutExpo: function(x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});

	$('.left-a').click(function (e) {
		var href = $(this).attr('href'),
			section = $(href).offset().top;
		$('html, body').animate({scrollTop: section}, 750, 'easeOutExpo');
		return false;
	});

})(jQuery);
