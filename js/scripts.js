$(document).ready(function(){

	$('.hospital-cover > span.showmore-link').on('click',function(){
		if($(this).hasClass('js-status')){
			$('.hospital-table').slideUp('slow');
			$(this).html('show more');
			$('.hospital-cover').css('margin-bottom','10px');
			$(this).removeClass('js-status');
		}
		else{
			$('.hospital-table').slideDown('slow');
			$(this).html('show less');
			$('.hospital-cover').css('margin-bottom','0px');
			$(this).addClass('js-status');	
		}
	});

	$('.general-cover > span.showmore-link').on('click',function(){
		if($(this).hasClass('js-status')){
			$('.general-table').slideUp('slow');
			$(this).html('show more');
			$(this).removeClass('js-status');
		}
		else{
			$('.general-table').slideDown('slow');
			$(this).html('show less');
			$(this).addClass('js-status');	
		}
	});

	$('.hospital-table a.btn-grey').on('click',function(){
		$('.hospital-table a.btn-grey').removeClass('active-btn');
		$(this).addClass('active-btn');
	});

	$('.general-table a.btn-grey').on('click',function(){
		$('.general-table a.btn-grey').removeClass('active-btn');
		$(this).addClass('active-btn');
	});

	$('.table tr.push-in').addClass('hide');
	$('.table tr td .arrow-holder .icon').on('click',function(){
		if($(this).hasClass('rotateArrowdown')){
			$(this).removeClass('rotateArrowdown');
			$(this).addClass('rotateArrowright');
		}
		else{
			$(this).addClass('rotateArrowdown');
			$(this).removeClass('rotateArrowright');
		}
		var _parent = $(this).parents('tr').attr('data-parent');
		$('.'+_parent).toggleClass('hide');
	});


	$('.hospital-cover .arrow-holder .icon').on('click',function(){
		if($(this).hasClass('js-status')){
			$(this).addClass('rotateArrowright');
			$(this).removeClass('rotateArrowdown');
			$('.hospital-table').slideUp();
			$('.hospital-cover').css('margin-bottom','10px');
			$(this).removeClass('js-status');
		}
		else{
			$(this).addClass('rotateArrowdown');
			$(this).removeClass('rotateArrowright');
			$('.hospital-table').slideDown();
			$('.hospital-cover').css('margin-bottom','0px');
			$(this).addClass('js-status');	
		}
	});

	$('.general-cover .arrow-holder .icon').on('click',function(){
		if($(this).hasClass('js-status')){
			$(this).addClass('rotateArrowright');
			$(this).removeClass('rotateArrowdown');
			$('.general-table').slideUp();
			$('.general-cover').css('margin-bottom','10px');
			$(this).removeClass('js-status');
		}
		else{
			$(this).addClass('rotateArrowdown');
			$(this).removeClass('rotateArrowright');
			$('.general-table').slideDown();
			$('.general-cover').css('margin-bottom','0px');
			$(this).addClass('js-status');	
		}
	});
});