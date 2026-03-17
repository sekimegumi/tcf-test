jQuery(document).ready(function($){
	var windowElm = $(window);

	var topMainLinkArea = $('#top-main-link-area');
	var topMainLinkCell = $('#top-main-link-cell');
	var topNewsBox = $('#top-news-box');
	var endTime = 2800;
	if(topMainLinkArea.length && topNewsBox.length) {
		topMainLinkAreaPbAdjust();
		var userAgent = window.navigator.userAgent.toLowerCase();
		if(userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
			WebFont.load({
				custom: {
				  families: ['Noto Sans JP']
				},
				active: function() {
					topMainLinkAreaPbAdjust();
					if($('#logo_svg_wrap').length) {
						logo_anime_start();
					}
				},
			});
		} else {
			windowElm.on('load',function(){
				if($('#logo_svg_wrap').length) {
					logo_anime_start();
				}
			});
		}
		windowElm.on('load resize orientationchange',function(){
			topMainLinkAreaPbAdjust();
		});
	}
	function topMainLinkAreaPbAdjust() {
		topMainLinkCell.removeAttr('style');
		if (topNewsBox.text().trim()) {
			if(!spFlg) {
				var getH = topNewsBox.outerHeight(true);
				topMainLinkCell.css({
					'padding-bottom': (Math.ceil(getH) + parseInt(topMainLinkCell.css('padding-bottom')))+'px'
				});
			}
		}
	}


	//tab切り替え
	$('.js-tab-btn').click(function(){
		//セレクタ設定
		var thisElm = $(this);
		var thisTabWrap = thisElm.parents('.js-tab-wrap');
		var thisTabBtn = thisTabWrap.find('.js-tab-btn');
		var thisTabList = thisTabWrap.find('.js-tab-btn-li');
		var thisTabParent = thisElm.parents('.js-tab-btn-li');
		var thisTabContents = thisTabWrap.find('.js-tab-contents');

		//current class
		var currentClass = 'current';

		//js-tab-btn current 切り替え
		thisTabList.removeClass(currentClass);
		thisTabParent.addClass(currentClass);

		//クリックされた tabが何番目か取得
		var thisElmIndex =  thisTabBtn.index(this);

		//js-tab-contents 切り替え
		thisTabContents.removeClass(currentClass);
		thisTabContents.eq(thisElmIndex).css({'opacity':0}).addClass(currentClass);
		setTimeout(function(){
			thisTabContents.eq(thisElmIndex).animate({'opacity':1},300);
			exproleScrollAnime();
		},10);
	});



	//exprole scroll sp event
	var exproleLinkElm = $('.exprole-link-box .list-elm');
	if(exproleLinkElm.length) {
		windowElm.on('scroll resize',function(){
			exproleScrollAnime();
		});
	}
	function exproleScrollAnime() {
		if(spFlg) {
			var winH = window.innerHeight ? window.innerHeight: $(window).height();
			var delayHeight = Number(winH)*0.5;

			exproleLinkElm.each(function(){
				var setThis = $(this);
				var elmTop = setThis.offset().top;
				var elmHeight = setThis.innerHeight();
				var scrTop = $(window).scrollTop();
				var winH = window.innerHeight ? window.innerHeight: $(window).height();
				if (scrTop > elmTop - winH + delayHeight && scrTop < elmTop - winH + delayHeight + elmHeight){
					setThis.addClass('show');
				} else {
					setThis.removeClass('show');
				}
			});
		} else {
			exproleLinkElm.removeClass('show');
		}
	}
});