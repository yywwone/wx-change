;(function($){
	$(".table-a").hide()
	$(".table-b").hide()
	$(".table-c").hide()
	$(".cli").click(function(){
		$(".table-a").slideToggle();
	})
	$(".cll").click(function(){
		$(".table-b").slideToggle();
	})
	
	$(".cld").click(function(){
		$(".table-c").slideToggle();
	})
})(jQuery)
