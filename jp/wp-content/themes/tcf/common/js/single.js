jQuery(document).ready(function($){
	var windowElm = $(window);

	//slider
	var gallerySetThumb = $('.gallery-set-thumb');
	var gallerySetSlider= $('.gallery-set-slider');

	if(gallerySetThumb.length) {
		gallerySetThumb.each(function() {
			var thisElm = $(this);
			var slideLength = thisElm.find('.slide-elm').length;
			var setShowNum = 9;
			var variableFlg = false;
			if(slideLength < 9) {
				setShowNum = slideLength;
				variableFlg = true;
				thisElm.addClass('type-variable');
			}
			thisElm.slick({
				dots: false,
				arrows: false,
				slidesToShow: setShowNum,
				variableWidth: variableFlg,
				centerMode: true,
				responsive: [
					{
					  breakpoint: 750,
					  settings: {
						slidesToShow: 2,
						variableWidth: false,
					  }
					}
				]
			});
		});

		gallerySetThumb.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$(this).parents('.gallery-set').find('.gallery-set-slider').slick('slickGoTo',nextSlide);
		});

		$('.gallery-set').on('click', '.gallery-set-thumb .slick-slide', function() {
			$(this).parents('.gallery-set').find('.gallery-set-slider').slick('slickGoTo',Number(this.getAttribute('data-slick-index')));
		});

		gallerySetSlider.slick({
			dots: false,
			arrows: true,
			slidesToShow: 1,
			nextArrow:'<button class="slick-next slick-arrow" type="button"><span>次へ</span></button>',
			prevArrow:'<button class="slick-prev slick-arrow" type="button"><span>前へ</span></button>'
		});

		gallerySetSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$(this).parents('.gallery-set').find('.gallery-set-thumb').slick('slickGoTo',nextSlide);
		});

		$('.gallery-set-pager-next').on('click', function() {
			$(this).parents('.gallery-set').find('.gallery-set-slider').slick('slickNext');
		});
		$('.gallery-set-pager-prev').on('click', function() {
			$(this).parents('.gallery-set').find('.gallery-set-slider').slick('slickPrev');
		});
	}


	$('.faq-q-box').on('click', function(){
		$(this).toggleClass('on').next().slideToggle();
	});

	//table scroll attention $.removeCookie('table-show');
	var tableScrollAttention = $('.table-scroll-attention');
	tableScrollAttention.on('click', function(){
		tableScrollAttention.fadeOut();
		$.cookie('table-show', 'true', { expires: 1, path: '/' });
	});
	if($('.post-table-wrap').length) {
		$('.post-table-wrap').on('scroll', function(){
			if(tableScrollAttention.css('display') === 'block') {
				tableScrollAttention.fadeOut();
			}
		});
	}

	var tableShowCookie = $.cookie('table-show');
	if(!tableShowCookie){
		tableScrollAttention.css('display','block');
	}
});
