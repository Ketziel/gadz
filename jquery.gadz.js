(function( $ ){
	$.fn.gadz = function(options) {

		var defaults = {
			startWidth : 0,
			maxWidth : 0
		}
		var options =  $.extend(defaults, options);
		
		var gadzList =  $(this.selector);
		$(window).load(function(){
			if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > options.startWidth && (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < options.maxWidth || options.maxWidth == 0)){
				resizeTiles(gadzList);
			}
		});
		
		$(window).resize(function () {
			var x = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if(x > options.startWidth && (x < options.maxWidth || options.maxWidth == 0)){
				resizeTiles(gadzList);
			} else {
				resetTileSize(gadzList);
			}
		});
		
		function resizeTiles(gadzList){
			var maxHeight = 0;
			gadzList.each(function(){
				$(this).height('');
				maxHeight = Math.max(maxHeight, $(this).height());
			});			
			gadzList.each(function(){
				$(this).height(maxHeight + 'px');
			});
		}
		
		function resetTileSize(gadzList){		
			gadzList.each(function(){
				$(this).height('');
			});		
		}
				
	};
})( jQuery );