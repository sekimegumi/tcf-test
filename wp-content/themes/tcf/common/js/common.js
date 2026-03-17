/*! lazysizes - v5.1.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility")},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});document.addEventListener("lazybeforeunveil",function(t){var e=t.target.getAttribute("data-bg");e&&(t.target.style.backgroundImage="url("+e+")")});

//is mobile
!function(e){var n=/iPhone/i,t=/iPod/i,r=/iPad/i,a=/\bAndroid(?:.+)Mobile\b/i,p=/Android/i,b=/\bAndroid(?:.+)SD4930UR\b/i,l=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,f=/Windows Phone/i,s=/\bWindows(?:.+)ARM\b/i,u=/BlackBerry/i,c=/BB10/i,h=/Opera Mini/i,v=/\b(CriOS|Chrome)(?:.+)Mobile/i,w=/Mobile(?:.+)Firefox\b/i;function m(e,i){return e.test(i)}function i(e){var i=e||("undefined"!=typeof navigator?navigator.userAgent:""),o=i.split("[FBAN");void 0!==o[1]&&(i=o[0]),void 0!==(o=i.split("Twitter"))[1]&&(i=o[0]);var d={apple:{phone:m(n,i)&&!m(f,i),ipod:m(t,i),tablet:!m(n,i)&&m(r,i)&&!m(f,i),device:(m(n,i)||m(t,i)||m(r,i))&&!m(f,i)},amazon:{phone:m(b,i),tablet:!m(b,i)&&m(l,i),device:m(b,i)||m(l,i)},android:{phone:!m(f,i)&&m(b,i)||!m(f,i)&&m(a,i),tablet:!m(f,i)&&!m(b,i)&&!m(a,i)&&(m(l,i)||m(p,i)),device:!m(f,i)&&(m(b,i)||m(l,i)||m(a,i)||m(p,i))||m(/\bokhttp\b/i,i)},windows:{phone:m(f,i),tablet:m(s,i),device:m(f,i)||m(s,i)},other:{blackberry:m(u,i),blackberry10:m(c,i),opera:m(h,i),firefox:m(w,i),chrome:m(v,i),device:m(u,i)||m(c,i)||m(h,i)||m(w,i)||m(v,i)}};return d.any=d.apple.device||d.android.device||d.windows.device||d.other.device,d.phone=d.apple.phone||d.android.phone||d.windows.phone,d.tablet=d.apple.tablet||d.android.tablet||d.windows.tablet,d}"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=i:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?(module.exports=i(),module.exports.isMobile=i):"function"==typeof define&&define.amd?define([],e.isMobile=i()):e.isMobile=i()}(this);

//jquery-scrollstop
!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var dispatch=$.event.dispatch||$.event.handle,special=$.event.special,uid1="D"+ +new Date,uid2="D"+(+new Date+1);special.scrollstart={setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer?clearTimeout(timer):(evt.type="scrollstart",dispatch.apply(_self,_args)),timer=setTimeout(function(){timer=null},_data.latency)};$(this).bind("scroll",handler).data(uid1,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid1))}},special.scrollstop={latency:250,setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer&&clearTimeout(timer),timer=setTimeout(function(){timer=null,evt.type="scrollstop",dispatch.apply(_self,_args)},_data.latency)};$(this).bind("scroll",handler).data(uid2,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid2))}}});


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if(s=e.extend({},u.defaults,s),"number"==typeof s.expires){var d=s.expires,f=s.expires=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var a=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;m>l;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){a=r(j,c);break}t||void 0===(j=r(j))||(a[g]=j)}return a};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});

//PC SP flg
var spW = 750;
var spFlg = false;
if(window.innerWidth > spW) {
	spFlg = false;
} else {
	spFlg = true;
}
window.onpageshow = function(evt) {
	if (evt.persisted) {
		location.reload();
	}
};

jQuery(document).ready(function($){
	var windowElm = $(window);
	//SP flg
	windowElm.on('resize load orientationchange', function(){
		var winW = window.innerWidth ? window.innerWidth: windowElm.outerWidth();
		if(winW > spW) {
			spFlg = false;
		} else {
			spFlg = true;
		}
	});

	var hash = location.hash;
	if(hash) {
		allLoadElm = $('.lazyload').length-1;
		$('.lazyload').each(function(index) {
			lazySizes.loader.unveil(this);
			if( index == allLoadElm ){
				setTimeout(function(){
					//ヘッダーの高さ取得
					headerH = $('#global-header').height();
					//アンカーリンクの位置取得
					var position = $(hash).offset().top;
					//アンカーリンクの位置まで移動
					$("html, body").scrollTop(position - headerH);
				},300);
			}
		});
	}


	//pagetop
	var pageTop = $('#pagetop');
    windowElm.on('scroll load', function () {
        if (windowElm.scrollTop() > window.innerHeight/2) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });

	//lang link set
	var langLinkBox = $('#hidden-lang-link');
	if(langLinkBox.length) {
		var LangparentBox = langLinkBox.next('.lang-list-inner');
		var jaLinkElm = LangparentBox.find('.hedaer-lang-link-elm-ja a');
		var enLinkElm = LangparentBox.find('.hedaer-lang-link-elm-en a');
		langLinkBox.find('a').each(function(index, element) {
			var thisElm = element;
			if(thisElm.title === 'ja') {
				jaLinkElm.attr('href',thisElm.href);
			} else if(thisElm.title === 'en_US') {
				enLinkElm.attr('href',thisElm.href);
			}
		});
	}


	//mobile access
	if (!isMobile.any) {
		$('.ct-tel-link').css('pointer-events','none');
	} else {
		$('.ct-tel-link').removeClass('color-black td-n');
	}

	//smooth scroll
	$(document).on('click', '.smooth a,.smooth area', function(){
		var speed = 600;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - $('#global-header').height();
		if($(this).hasClass('pagetop-link')) {
			this.blur();
		}
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

	//body固定関数
	var bodyElm = $('body');
	var scrollPosi;
	var bodyFixFlg = false;
	function bodyFix() {
		scrollPosi = windowElm.scrollTop();
		bodyElm.css({
			'position': 'fixed',
			'width': '100%',
			'z-index': '1',
			'top': -scrollPosi
		});
		bodyFixFlg = true;
	}

	//body fixリセット
	function bodyFixReset() {
		bodyElm.css({
			'position': 'relative',
			'width': 'auto',
			'top':'auto'
		});
		$("html, body").scrollTop(scrollPosi);
		bodyFixFlg = false;
	}




	//header fix
	var contents = $('#contents');
	var header = $('#_global-header');
	var globalNavSubBox = $('#contents .global-nav-sub-box');

	var headerPosi;
	var mainCtPosi = '';
	var startPos = 0;
	var upFlg = false;
	var fixAreaFlg = false;
	var topFixAreaFlg = false;
	var setStartScroll = 0;
	var scrollStartFlg = false;
	var timeoutId;
	var setDelay = 250;

	var headerLogoSvg = $('.header-logo-svg');
	var headerLogoAnime01;
	var headerLogoAnime02;


	var scrollstartPosi = 0;
	var showNavPosi = 0;

	windowElm.on("scrollstart", function() {
		scrollstartPosi = windowElm.scrollTop();
		showNavPosi = scrollstartPosi;
	});

	windowElm.on('resize scroll orientationchange', function(){
		if(bodyFixFlg === false) {
			headerPosi = contents.offset().top;
			/*if(globalNavSubBox.length) {
				headerPosi = globalNavSubBox.offset().top + globalNavSubBox.innerHeight();
			}*/

			var fadeTime = 300;
				if($('#scroll-area').length && !isMobile.any) {
					fadeTime = 0;
				if(spFlg) {
					headerPosi = 60;
				} else {
					headerPosi = 80;
				}
			}

			var scrTop = windowElm.scrollTop();

			if(scrTop > headerPosi) {
				header.addClass('fix');
				if(fixAreaFlg === false) {
					header.addClass('no-anime');
					fixAreaFlg = true;
					setTimeout(function() {
						header.removeClass('no-anime');
					}, 10);
				}
			} else {
        		if(header.hasClass('fix')) {
					header.fadeOut(fadeTime,function(){
						header.fadeIn(fadeTime).removeClass('fix show');
					});
				}
				fixAreaFlg = false;
			}

			if (scrTop > startPos) {
				upFlg = true;
				var scrollHeight = $(document).height();
				var scrollPosition = windowElm.height() + scrTop;
				if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
					//最下部に到達した場合も表示
					headerShow();

				} else {
					if(header.hasClass('show')) {
						header.removeClass('show').addClass('up');
					}
					header.addClass('hide');
					headerLogoSvg.removeClass('header-logo-svg-anime-end');
				}
			} else {
				upFlg = false;
				if(upFlg === false && header.hasClass('fix') && scrTop < scrollstartPosi - 20) {
					headerShow();
				}
			}
			startPos = scrTop;
		}
	});
	function headerShow() {
		header.removeClass('hide');
		header.addClass('show').removeClass('up');

		if(!$('.header-logo-svg-anime-end').length) {
			if(headerLogoAnime01) {
				headerLogoAnime01.pause();
				hoverAnimeStart02.pause();
			}
			//reset
			$('.header-logo-svg path').removeAttr('style');
			TweenMax.set('.fix-header-logo-bg', {
				alpha : 0,
			});
			headerLogoAnime01 = TweenMax.to('.header-logo-svg path', 0.5, {
				ease: Power0.easeNone,
				strokeDashoffset : 0,
				delay: 0.25
			});
			hoverAnimeStart02 = TweenMax.to('.fix-header-logo-bg', 0.4, {
				alpha : 1,
				delay: 0.85
			});
			headerLogoSvg.addClass('header-logo-svg-anime-end');
		}
	}
	//header-attention-area
	var headerAttentionArea = $('#header-attention-area');
	if(headerAttentionArea.length) {
		contentsPosi();
		var userAgent = window.navigator.userAgent.toLowerCase();
		if(userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
			WebFont.load({
				custom: {
				  families: ['Noto Sans JP']
				},
				active: function() {
					contentsPosi();
				},
			});
		}
		windowElm.on('load resize orientationchange',function(){
			contentsPosi();
		});
	}
	function contentsPosi() {
		var getH = headerAttentionArea.innerHeight();
		contents.css('padding-top',getH+'px');
	}



	//sp  globalnav
	var globalNav = $('#global-nav');
	var spMenuBtn = $('#sp-menu-btn');
	var menuSvgElm = $('#global-nav .svg-anime-elm');
	var menuSvgAnime;
	spMenuBtn.on('click', function(){
		var thisElm = $(this);
		thisElm.toggleClass('on');
		if(thisElm.hasClass('on')) {
			header.addClass('nav-open');
			//reset
			if(menuSvgAnime) {
				menuSvgAnime.pause();
			}
			menuSvgElm.find('path').removeAttr('style');
			globalNav.fadeIn(250,function() {
				menuSvgAnime = TweenMax.to(menuSvgElm.find('path'), 0.7, {
					alpha : 1,
					strokeDashoffset : 0,
				});
			});
			bodyFix();

		} else {
			header.removeClass('nav-open');
			globalNav.fadeOut(250);
			bodyFixReset();
		}
	});

	windowElm.on('resize orientationchange', function(){
		if(!spFlg) {
			if(spMenuBtn.hasClass('on')) {
				bodyFixReset();
				header.removeClass('nav-open');
				spMenuBtn.removeClass('on');
			}
			if(globalNav.css('display') === 'none') {
				globalNav.removeAttr('style');
			}
		}
	});


	//blank link
	var hostName = location.hostname;
	hostName = hostName.replace('www.', '');
	//add blank
	$('a[href^=http]').not('[href*="'+hostName+'"]').not('[href*="mailto"]').attr({target:"_blank"});


	//wysiwyg iframe
	var iframeElms = $('.wysiwyg iframe');
	if(iframeElms.length) {
		iframeElms.wrap('<div class="iframe-wrap">');
	}
	var videoElms = $('.wysiwyg video');
	if(videoElms.length) {
		videoElms.wrap('<div class="iframe-wrap">');
	}

	//wysiwyg icon
	var setIconWysiwyg = $('.wysiwyg');
	if(setIconWysiwyg.length) {
		setIconText();
	}

	function setIconText() {
		//blank link
		$('.wysiwyg a[href^=http]:not([href*="'+hostName+'"],[href*="mailto"])').each(function() {
			var thisElm = $(this);
			if(!thisElm.find('img').length) {
				thisElm.append('<span class="set-icon-blank"><span class="set-hidden-text">'+setBlankText+'</span></span>');
			}
		});
		//Pdf
		$('.wysiwyg a[href$=pdf]').attr({target:"_blank"}).each(function() {
			var thisElm = $(this);
			if(!thisElm.find('img').length) {
				thisElm.find('.set-icon-blank').remove();
				thisElm.append('<span class="set-icon-pdf"><span class="set-hidden-text">'+setBlankPdfText+'</span></span>');
			}
		});

		//other files
		var otherFiles = $('.wysiwyg a[href$=xls],.wysiwyg a[href$=xlsx],.wysiwyg a[href$=xlsm],.wysiwyg a[href$=doc],.wysiwyg a[href$=docx],.wysiwyg a[href$=pptx],.wysiwyg a[href$=pptm],.wysiwyg a[href$=ppt],.wysiwyg a[href$=jpg],.wysiwyg a[href$=jpeg],.wysiwyg a[href$=png],.wysiwyg a[href$=gif],.wysiwyg a[href$=svg],.wysiwyg a[href$=zip]');
		otherFiles.attr({target:"_blank"}).each(function() {
			var thisElm = $(this);
			if(!thisElm.find('img').length) {
				thisElm.find('.set-icon-blank').remove();
				thisElm.append('<span class="set-icon-blank"><span class="set-hidden-text">'+setBlankText+'</span></span>');
			}
		});
	}

	//wysiwyg toggle
	$('.single-toggle-btn-open').on('click', function(){
		$(this).css({'display':'none'}).next().slideDown(400,function() {
			toggleBusy = 0;
		}).next().css({'display':'block'});
	});
	$('.single-toggle-btn-close').on('click', function(){
		var thisElm = $(this);
		thisElm.prev().slideUp(400,function() {
			thisElm.css({'display':'none'});
			thisElm.prev().prev().css({'display':'block'});
		});
	});

	//set ct-btn icon
	var setIconBox = $('.js-set-icon');
	if(setIconBox.length) {
		//blank link
		$('.js-set-icon a[href^=http]:not([href*="'+hostName+'"],[href*="mailto"])').addClass('type-icon').find('.js-set-icon-text').append('<span class="set-icon-blank"><span class="set-hidden-text">'+setBlankText+'</span></span>');
		//Pdf
		$('.js-set-icon a[href$=pdf]').addClass('type-icon').find('.set-icon-blank').remove();
		$('.js-set-icon a[href$=pdf]').attr({target:"_blank"}).find('.js-set-icon-text').append('<span class="set-icon-pdf"><span class="set-hidden-text">'+setBlankPdfText+'</span></span>');

		//other files
		var otherFiles = $('.js-set-icon a[href$=xls],.js-set-icon a[href$=xlsx],.js-set-icon a[href$=xlsm],.js-set-icon a[href$=doc],.js-set-icon a[href$=docx],.js-set-icon a[href$=pptx],.js-set-icon a[href$=pptm],.js-set-icon a[href$=ppt],.js-set-icon a[href$=jpg],.js-set-icon a[href$=jpeg],.js-set-icon a[href$=png],.js-set-icon a[href$=gif],.js-set-icon a[href$=svg],.js-set-icon a[href$=zip]');
		otherFiles.addClass('type-icon').find('.set-icon-blank').remove();
		otherFiles.attr({target:"_blank"}).find('.js-set-icon-text').append('<span class="set-icon-blank"><span class="set-hidden-text">'+setBlankText+'</span></span>');
	}


	//set hv color
	var setRandColor = ['type-yellow','type-blue-lt','type-red','type-brown','type-purple'];
	var setRandColorActive = ['active-type-yellow','active-type-blue-lt','active-type-red','active-type-brown','active-type-purple'];
	$('.js-set-hv-class').each(function(index, element) {
		var setClass01 = setRandColor[Math.floor(Math.random() * setRandColor.length)];
		var setClass02 = setRandColorActive[Math.floor(Math.random() * setRandColorActive.length)];
		$(this).addClass(setClass01+' '+setClass02);
	});

	//check lang
	var checkLang = $('html[lang="ja"] .js-check-lang');
	if(checkLang.length) {
		checkLang.each(function(index, element) {
			var getText = this.innerHTML;
			if(!checkJa(getText)) {
				this.setAttribute('lang', 'en');
			}
		});
	}
	//全角文字列（数字・アルファベットを含む）と半角カナを含んでいたら「true」
	function checkJa(txt) {
		if (typeof txt !== "string") {
			return false;
		}
		var i = txt.length,
			escapeTxt;
		while(i--) {
			escapeTxt = escape(txt.substring(i, i + 1));
			if (escapeTxt.length >= 6) {
				return true;
			}
		}
		return false;
	}


	//scroll anime
		//アニメーションオフ　親要素に no-svg-anime を追加
		var noSvgAnime = $('.no-svg-anime');
		if(noSvgAnime.length) {
			noSvgAnime.each(function() {
				var thiElm = $(this);
				var svgMain = thiElm.find('.svg-anime-elm');
				var svgBg = thiElm.find('.svg-anime-elm-bg');
				svgMain.css('opacity',1);
				TweenMax.set(svgMain.find('path'), {
					alpha : 1,
					strokeDashoffset : 0,
				});
				svgBg.css({'opacity':1}).removeClass('svg-anime-elm-bg');
				svgMain.removeClass('svg-anime-elm');
			});
		}
	windowElm.on('load resize orientationchange scroll',function(){
		scrollAnime('.animate',200,100);
	});


	//voice scroll sp event
	var voiceModalElm = $('.voice-modal-main');
	if(voiceModalElm.length) {
		windowElm.on('scroll resize',function(){
			voiceScrollAnime();
		});
	}
	function voiceScrollAnime() {
		if(spFlg) {
			var winH = window.innerHeight ? window.innerHeight: $(window).height();
			var delayHeight = Number(winH)*0.5;
			var scrTop = $(window).scrollTop();
			var winH = window.innerHeight ? window.innerHeight: $(window).height();
			$('.voice-modal-main').each(function(){
				var setThis = $(this);
				var elmTop = setThis.offset().top;
				var elmHeight = setThis.innerHeight();
				if (scrTop > elmTop - winH + delayHeight && scrTop < elmTop - delayHeight + elmHeight){
					setThis.addClass('show');
				} else {
					setThis.removeClass('show');
				}
			});
		} else {
			voiceModalElm.removeClass('show');
		}
	}

	//ct btn size
	var ctBtn = $('.ct-btn');
	if(ctBtn.length) {
		var userAgent = window.navigator.userAgent.toLowerCase();
		if(userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
		} else {
			WebFont.load({
				custom: {
				  families: ['Noto Sans JP']
				},
				active: function() {
					ctBtnSizeAdjust();
				},
			});
			windowElm.on('load resize orientationchange',function(){
				ctBtnSizeAdjust();
			});
		}
	}

	function ctBtnSizeAdjust() {
		if(spFlg) {
			ctBtn.removeAttr('style');
		} else {
			ctBtn.each(function() {
				var thisElm = $(this);
				thisElm.removeAttr('style');
				var getH = thisElm.innerHeight();
				var getW = thisElm.innerWidth();
				thisElm.css({
					'height': Math.ceil(getH)+'px',
					'width': Math.ceil(getW)+'px'
				});
			});
		}
	}


	//voice modal
	/*
	var modal = $('.modal');
	var $wrapper = $(".wrapper");
    var elmSelector = "#modal-ct-text-box";
    var currentPageUrl = location.pathname;
    var currentPageUrl = currentPageUrl.split("/");
    var currentPageUrl = currentPageUrl[currentPageUrl.length - 1];

	var state = {"targetPageUrl": currentPageUrl};
	var baseState = state;
	history.replaceState(state, currentPageUrl.split(".")[0], currentPageUrl);

	//モーダル表示判別フラグ
	var modal_show_flg = false;


    $('.wrapper').on('click', '.voice-modal-main', function(){
		var thisElm = $(this);
		var targetPageUrl = thisElm.data('voice');
		var targetWrap = thisElm.parents('.voice-modal-area');
		var pageId = targetPageUrl.split(".")[0];
		state = {"targetPageUrl": targetPageUrl};

        history.pushState(state, pageId, targetPageUrl);

        openModal(targetWrap, targetPageUrl, pageId);
        return false;
    });

    function openModal(targetWrap, targetPageUrl, pageId) {
        targetWrap.find('.modal-ct-text-box').load(targetPageUrl + " " + elmSelector, function(a, b, c) {
          targetWrap.find('.modal-ct-text-box').html($(a).find('#modal-ct-text-box').html())
			targetWrap.find('.modal').fadeIn();
			bodyFix();
			setTimeout(function() {
				setIconText();
				modal_show_flg = true;
			}, 10);
        });
    }


	//モーダルクローズ
    $(window).on('popstate', function(e) {
        var state = e.originalEvent.state;
        if(modal_show_flg === true && state) {
            $('.modal').fadeOut();
        }
    });
	$('.wrapper').on('click', '.modal-btn-close', function(){
		if(modal_show_flg === true) {
			modalClose();
		}
	});
		*/
	/*
	let modal_show_flg = false;

	$(document).on('click', function(e){
		var target = $(e.target);
		if(modal_show_flg === true && !target.parents('.modal-content-box').length) {
			modalClose();
			return false;
		}
		if(modal_show_flg === true && target.hasClass('modal-content-box')) {
			modalClose();
			return false;
		}
	});
	//モーダルクローズ関数
	function modalClose() {
		$('.modal').fadeOut();
		history.go(-1);
		modal_show_flg = false;
		bodyFixReset();
	}
	*/


	//voice button focus
	$('main').on({
			'focusin' : function() {
				$(this).parents('.voice-modal-main').addClass('voice-modal-focus');
			},
			'focusout' : function() {
				$(this).parents('.voice-modal-main').removeClass('voice-modal-focus');
			}
		}, '.voice-open-btn'
	);

	$(".global-nav-list .font-size p").each(function(){
		if ($(this).data("fontsize") != fontsize) {
			$(this).addClass("color-gray06");
		}

		$("a", this).click(function(){
			if ($(this).parents("p").is(".color-gray06")) {
				$(this).parents("p").removeClass("color-gray06");
				$("html").addClass($(this).parents("p").data("fontsize"));
				localStorage.setItem("fontsize", $(this).parents("p").data("fontsize"));

				$(this).parents("p").siblings().each(function(){
					$(this).addClass("color-gray06");
					$("html").removeClass($(this).data("fontsize"));
				});
			}
			$(this).blur();
			return false;
		});
	});


	$("a.zoom").colorbox({
		maxWidth: "85%",
		maxHeight: "85%",
		opacity: 0.8,
		returnFocus: false,
		onComplete: function(){
			$("#cboxClose").addClass("view");
		},
		onLoad: function(){
		},
		onClosed: function(){
			$("#cboxClose").removeClass("view");
		}
	});


});
window.addEventListener('load', function() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if(userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
		var lastIndex = $('.lazyload').length-1;
		$('.lazyload').each(function(index, element) {
			lazySizes.loader.unveil(this);
			if( index === lastIndex ){
				document.createElement('picture');
				var tag = document.createElement('script');
				tag.src = $('#top').data('theme-path')+"common/js/picturefill.min.js";
				document.body.appendChild(tag);
			}
		});
	}
});



//scroll anime function
function scrollAnime(setElm,delayH,SpDelayH) {
	if($(setElm).length) {
		var delayHeight = delayH;
		if(spFlg === true) {
			delayHeight = SpDelayH;
		}
		$(setElm).each(function(){
			var setThis = $(this);
			var setChild = setThis.find('.anime-elm');
			var svgElm = setThis.find('.svg-anime-elm');
			var svgElmBg = setThis.find('.svg-anime-elm-bg');

			var elmTop = setThis.offset().top;
			var elmHeight = setThis.height();
			var scrTop = $(window).scrollTop();
			var winH = window.innerHeight ? window.innerHeight: $(window).height();
			if(!setThis.hasClass('anime-end')) {
				if (scrTop > elmTop - winH + delayHeight && scrTop < elmTop + elmHeight){
					if(setThis.hasClass('anime-elm')) {
						setThis.addClass('set-anime');
						setThis.addClass('anime-end');

					} else if(svgElm.length) {
						svgElm.css('opacity',1);
						TweenMax.to(svgElm.find('path'), 0.7, {
							alpha : 1,
							strokeDashoffset : 0,
							delay: 0.2
						});
						if(svgElmBg.length) {
							TweenMax.to(svgElmBg, 0.6, {
								alpha : 1,
								//delay: 0.82
							});
						}
						setThis.addClass('anime-end');
					} else if(setChild.length) {
						setChild.addClass('set-anime');
						setThis.addClass('anime-end');
					}
				}
			}
		});
	}
}


/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);
