jQuery(document).ready(function($){
	var busy = 0;
	var setRandColor = ['type-yellow','type-blue-lt','type-red','type-brown','type-purple'];
	var setRandColorActive = ['active-type-yellow','active-type-blue-lt','active-type-red','active-type-brown','active-type-purple'];
	
	
	$('.ajax-post-load-btn').on('click', function(e){
		e.preventDefault();
		loadPost($(this));
	});
	
	
	function loadPost(target) {
		//処理の重複対策
		if (busy === 1) {
			 return false;
		}
		// 次のイベント制御
		busy = 1;
		var thisParenst = target.parents('.ajax-post-load-area');
		var targetShowList =thisParenst.find('.ajax-post-list');
		var archive_info = thisParenst.find('.ajax-loading-info');
		var all_poost_num = archive_info.data('allposts');
		
		target.fadeOut(300);
		
		$.ajax({
			type: 'POST',
			url: ajaxurl,
			data: {
				'action' : 'my_ajax_topics_get_posts',
				'show_post_ids': archive_info.data('ids'),
				'show_list_length': targetShowList.find('li').length
			},
			success: function( response ){
				jsonData = JSON.parse( response );
				
				$.each( jsonData, function( i, val ){
					var items = $(val['post_html']);
					
					var setClass01 = setRandColor[Math.floor(Math.random() * setRandColor.length)];
					var setClass02 = setRandColorActive[Math.floor(Math.random() * setRandColorActive.length)];
					items.css('opacity',0).find('a').addClass(setClass01+' '+setClass02);
					
					targetShowList.append(items);
				});
				
				targetShowList.addClass('post-loaded');
				targetShowList.find('li').animate({'opacity':1},400);
				
				
				if(targetShowList.find('li').length != all_poost_num) {
					target.fadeIn();
				}
				
				busy = 0;
			}
			
		});
		return false;
	}
});