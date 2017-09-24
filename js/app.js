 // mobile menu opener

$menu = $('.burger-container');
$nav = $('nav');
$body = $('body');

$menu.on('click', function(){
  $nav.toggleClass('mobile-menu');
})


// Back to top button

	$('.button-to-top').click(function(e){

		if (hash != ""){

			e.preventDefault();

			var hash = this.hash;

			$("body").animate({
				scrollTop: 0
			}, 600);
		}
	});

$(document).ready(function(){
	$(window).scroll(function(){
		if( $(window).scrollTop() > 200 ){
			$('.button-to-top').addClass('flex');
		} else {
			$('.button-to-top').removeClass('flex');
		}

	})
})


$window = $(window);
$header = $('header');
$header_height = $('.header-upper').innerHeight();

$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > $header_height) { // if body is scrolled down by height of header-top
        $('.header-lower').addClass('sticky');
        $('.header-lower').addClass('sticky-bg', 200);

        // to get rid of jerk
        $('body').css('padding-top' , $header_height);


    } else {
        $('body').css('padding-top' , '0');
        $('.header-lower').removeClass('sticky sticky-bg');
    }
 });