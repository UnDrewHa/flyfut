//= plugins.js
$(document).ready(function() {
		$('.owl-carousel').owlCarousel({
			autoplay: false,
			nav: true,
  		navText: ["",""],
			dots: false,
	    loop: true,
			margin:15,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1020:{
	            items:3
	        }
	    }
		});


	// lightbox
	$('.slider1__item, .customization-slider__item').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true,
			tCounter : '',
			tPrev : 'Предыдущая фотография',
			tNext : 'Следующая фотография'
	  },
		closeMarkup : '<button type="button" class="mfp-close"></button>',
		preload: [2,2],
		callbacks: {
	    open: function() {
	      $('.owl-prev, .owl-next').hide();
	    },
	    close: function() {
	      $('.owl-prev, .owl-next').show();
	    }
		}
	});
});
