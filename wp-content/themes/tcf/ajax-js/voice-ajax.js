jQuery(document).ready(function($){

	var busy = 0;
	var display_num = 12;
	var page_index = 0;
	var total_page = $('.ajax-post-load-btn').attr('data-total-voice');
	var $voiceList = $('.voice-list');
	var $load_button = $('.ajax-post-load-btn');
	var param_page = 0;
	var param_invoice = "";

	//$(window).on('load resize scroll orientationchange', function()
	window.onpageshow = function(evt) {
		// override common
		//if (evt.persisted) {
		//	location.reload();
		//}
	};

	window.addEventListener(
	  "popstate",
	  function(event) {
	    if(event.state.res != null) {
	    	var data = event.state.res;
	    	console.log(data)
	    	$voiceList.html( data );
	    	$('.grid-item').show();

				$load_button.show();
				page_index =  ( $('.voice-list > *').length / display_num ) ;
				var params = [];
				params['page'] = param_page = page_index -1;
				history.pushState( null, null, setParameter( params )  );
	    }
	  }
	);
	$(window).on('load', function(){
		loadPost();
		setLoadButton();
	});
	var userAgent = window.navigator.userAgent.toLowerCase();
	if(userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)) {
		WebFont.load({
			custom: {
			  families: ['Noto Sans JP']
			},
			active: function() {
				$('.voice-modal-area .lazyload').each(function() {
					lazySizes.loader.unveil(this);
				});
			},
		});
	} else {
		$(window).on('load', function(){
			$('.voice-modal-area .lazyload').each(function() {
				lazySizes.loader.unveil(this);
			});
		});
	}

	function setLoadButton(){
		$('.ajax-post-load-btn').on( 'click', function(){
			loadPost();
		});
	}

	function loadPost( page ) {

		//処理の重複対策
		if (busy === 1) {
			 return false;
		}

		busy = 1;


		var already_exists = $( '.grid-item').length;
		var is_getall = false;
		var params = [];

		param_page = getParameter().page;
		param_invoice = getParameter().invoice;

		if( param_page > total_page / display_num ){
			param_page = 0;
		}
		if( already_exists <  display_num * param_page ){
			is_getall = true;
		}

		//page_index = param_page;

		if( param_page > page_index ){
			page_index = param_page;
		}
		//console.log(  'is_getall' + is_getall);
		//console.log(  'already_exists' + already_exists);
		//console.log(  'display_num * page_index' + display_num * page_index);

		$.ajax({
			type: 'POST',
			url: ajaxurl,
			data: {
				'action' : 'my_ajax_voice_get_posts',
				'offset' : page_index,
				'invoice' : param_invoice,
				'is_getall': is_getall
			},
			success: function( res ){
				jsonData = JSON.parse( res );
				var $items = '';
				$.each( jsonData, function( i, val ){
					$items = $( val['post_html'] );
					//if( !is_getall ){
						$items.hide().delay( i * 100 ).slideDown();
					//}
					$voiceList.append( $items );
				});

				params['page'] = page_index;
				if( param_invoice ){
					params['invoice'] = param_invoice;
				}
				history.pushState( {res: $('.voice-list').html() }, null,  setParameter( params ) );
				page_index++;
				busy = 0;
				if( total_page <= display_num * page_index ){
					$load_button.hide();
				}
			}
		});
	}

	function setParameter( paramsArray ) {
		var resurl = location.href.replace(/\?.*$/,"");
		for ( key in paramsArray ) {
			resurl += (resurl.indexOf('?') == -1) ? '?':'&';
			resurl += key + '=' + paramsArray[key];
		}
		return resurl;
	}

  function getParameter(){
  	var paramsArray = [];
  	var url = location.href;
  	parameters = url.split("#");
  	if( parameters.length > 1 ) {
  		url = parameters[0];
  	}
  	parameters = url.split("?");
  	if( parameters.length > 1 ) {
  		var params   = parameters[1].split("&");
  		for ( i = 0; i < params.length; i++ ) {
  			var paramItem = params[i].split("=");
  			paramsArray[paramItem[0]] = paramItem[1];
  		}
  	}
  	return paramsArray;
  };

});