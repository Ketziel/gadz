(function( $ ){
	$.fn.gadz = function(options) {

		var defaults = {
			
		}
		var options =  $.extend(defaults, options);
		
		/*return this.each(function() {
			var gadzList = $(this);
			$(window).load(function(){resizeTiles(gadzList);});
			if (options.maxWidth > 0){
				$(window).resize(function () { 
					 resizeTiles(gadzList);
				});
			} 
		});*/
		
		
		var gadzList =  $(this.selector);
		$(window).load(function(){resizeTiles(gadzList);});
				$(window).resize(function () {
					 resizeTiles(gadzList);
				});
	
		
		function resizeTiles(gadzList){
		
			gadzList.each(function(){
				$(this).height('');
			});
			var maxHeight = 0;
			gadzList.each(function(){
				maxHeight = Math.max(maxHeight, $(this).height());
			});			
		
		
			gadzList.each(function(){
				$(this).height(maxHeight + 'px');
			});
		}
		
		


					
	};
})( jQuery );