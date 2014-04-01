(function( $ ){
	$.fn.gadz = function(options) {

		var defaults = {
			
		}
		var options =  $.extend(defaults, options);
		
		
		var gadzList =  $(this.selector);
		$(window).load(function(){resizeTiles(gadzList);});
	
		
		function resizeTiles(gadzList){
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