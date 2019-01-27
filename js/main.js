$(function(){

	$('.probootstrap-toggle').on('click', function(){
		// console.log('nice');

		var mainNav = $('.probootstrap-main-nav');

		
			if ( !mainNav.hasClass('active') ) {
				
					mainNav.addClass('active');
	
			} else {
				mainNav.removeClass('active');
			
			}
		
		
		

	});

});