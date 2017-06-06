//= plugins.js
$(document).ready(function() {

	// sliders
	$('[data-slick]').each(function () {
        var self = $(this);
        if(self.hasClass('slick-initialized')){
            return;
        }
        var slickConfig = $.parseJSON(self.attr('data-slick'));

				if (self.attr('data-slick-count')) {
					var countBlock = self.attr('data-slick-count');
					self.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $(countBlock).html('<span>' + i + '</span>/' + slick.slideCount);
	    		});
				}

        self.slick(slickConfig);
    });

	// lightbox
	$('.photo-slider__item').magnificPopup({
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
	      $('.photo-slider .slider-arrow').hide();
				$('.photo-slider__wrap').slick('slickPause');
	    },
	    close: function() {
	      $('.photo-slider .slider-arrow').show();
				$('.photo-slider__wrap').slick('slickPlay');
	    }
		}
	});

	$('.call-me').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#m_name',
		closeMarkup : '<button type="button" class="mfp-close"></button>',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#m_name';
				}
			}
		}
	});

	$('.products-button').on('click', 'li', function () {
		var productNum = $(this).attr('data-product');

		$('.products-item, .products-button li').removeClass('_active');

		$(this).addClass('_active');
		$('.products-item[data-product="' + productNum + '"]').addClass('_active');
	});

	$('.order').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');

		$("html, body").animate({ scrollTop: $(target).offset().top }, 500);
	});

	var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	$('#feedback-form').on('submit', function (e) {

		var form = $(this),
				requiredFields = form.find('[required]'),
				email = form.find('#ff_email'),
				phone = form.find('#ff_phone'),
				hasErrors = false;

		form.find('input').removeClass('_error');

		requiredFields.each(function (i, item) {
			if (!$(item).val()) {
				$(item).addClass('_error');
				hasErrors = true;
			}
		});

		if (!email.val().match(emailRegExp)) {
			email.addClass('_error');
			hasErrors = true;
		}

		if (!email.val() && !phone.val()) {
			email.addClass('_error');
			phone.addClass('_error');
			hasErrors = true;
		}

		if (hasErrors) {
			return false;
		}

		form.find('input').removeClass('_error');
		form.submit();
	});


	$('#callback-form, #login-form').on('submit', function (e) {

		var form = $(this),
				requiredFields = form.find('[required]'),
				hasErrors = false;

		form.find('input').removeClass('_error');

		requiredFields.each(function (i, item) {
			if (!$(item).val()) {
				$(item).addClass('_error');
				hasErrors = true;
			}
		});

		if (hasErrors) {
			return false;
		}

		form.find('input').removeClass('_error');
		form.submit();
	});




});
