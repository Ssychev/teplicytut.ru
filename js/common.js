$(function() {
	$(window).scroll(function(){
		var o=$("#header").outerHeight();
		var e=$('#main').height();
		var s=$("#footer").outerHeight();	
		var height = $(this).scrollTop();
		$(this).scrollTop()>o?$("#top").fadeIn():$("#top").fadeOut();
		if ($(this).scrollTop()>e) {$("#top").css({bottom:s})} else {$("#top").css({bottom:"50px"})}
	})
	
    $(".product").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        } else {
            $(".product").removeClass("active")
            $(this).addClass("active")
        }      
    });

	$(".decor").animated("zoomIn", "zoomOut");

	$(".navigation").mPageScroll2id();

	$('.popup').magnificPopup({
        type: 'inline',
        mainClass: 'white_popup'
    });

	$('.parallax').parallax();

	$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    navText: ["<img src='../img/nav_left.svg'>","<img src='../img/nav_right.svg'>"]
	});
	$('.reviews_items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='../img/nav_left.svg'>","<img src='../img/nav_right.svg'>"],
   	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true,
        },
        768:{
            items:2,
            nav:false,
            dots: true,
        },
        1000:{
            items:3,
            nav:true,
            loop:false,
        }
    }
	});

if ($(".white_popup").is(":visible") == true) {
	var dotHeight = $('.owl-dot').width();
	$('.owl-dot').css({'height' : dotHeight})
}

$( window ).resize(function() {
	var dotHeight = $('.owl-dot').width();
	$('.owl-dot').css({'height' : dotHeight})
});
});
