"use strict";

// global variables
var BUBBLE_ANIM_IN = "animated zoomIn";
var BUBBLE_ANIM_OUT = "animated zoomOut";
var BUBBLE_TIME_IN = 1200;
var BUBBLE_TIME_OUT = 800;



$( document ).ready(function() {
	
	// hiding sections
	$('#section1_intro').hide();
	$('#section1_age').hide();
	$('#section1_residence').hide();
	$('#section2').hide();

	// hide bubbles
	$('#bubble1').hide();
	$('#bubble2').hide();
	$('#bubble3').hide();
	$('#bubble4').hide();
	$('#bubble5').hide();
	$('#bubble6').hide();
	$('#bubble7').hide();
	$('#bubble8').hide();
	$('#bubble9').hide();
	$('#bubble10').hide();
	$('#bubble11').hide();
	$('#bubble12').hide();
	$('#bubble13').hide();
	$('#bubble14').hide();
	$('#bubble15').hide();
	$('#bubble16').hide();



	// select either male or female image
	$('#male').click( function() { 
		$('.section1_gender_img').attr("src", "svg/male.svg");
		$('#character').attr("src", "svg/male.svg");
		$('#select_female').css("background-color", "");
		$('#select_male').css("background-color", "yellow");
	});
	$('#female').click( function() {
		$('.section1_gender_img').attr("src", "svg/female.svg");
		$('#character').attr("src", "svg/female.svg");
		$('#select_male').css("background-color", "");
		$('#select_female').css("background-color", "yellow");
	});




	// slow scroll to selected section
	$('#toSection1_age').click(function() { 
		scroll( $('#section1_intro') , $('#section1_age') );  
	});



	$('#toSection1_intro').click(function() {

		// getting src image attribute
		var src = $('.section1_gender_img').attr('src');

		// if src si not defined we do not continue
		if (src != undefined) { 
			scroll( $('#section1_gender') , $('#section1_intro') ); 
		}
	});



	$('#toSection1_age').click(function() {

		// getting src image attribute
		var src = $('.section1_gender_img').attr('src');

		// if src si not defined we do not continue
		if (src != undefined) { 
			scroll( $('#section1_gender') , $('#section1_age') ); 
		}
	});


	$('#toSection1_residence').click(function() {

		// getting age input
		var age = $('#age').val();

		// if age is not typed we do not continue
		if (age != "" && parseInt(age) > 0 && parseInt(age) < 110) { scroll( $('#section1_age') , $('#section1_residence') ); }
	});


	$('#toSection2').click(function() {

		// getting radio button choice (yes/no)
		var choice = $('input[name=residence]:checked').val();

		// if the user didn't select yes nor no we do not continue
		if (choice != undefined) { 
			scroll( $('#section1_residence') , $('#section2') ); 
			$('#bubble1').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
		}

	});


	$('#nextBubble').click(function() {
		
		// number of the next bubble
		var currentBubble = parseInt($('#currentBubble').val());

		// display new bubble
		changeBubbleTo(currentBubble);
	});


});



function scroll(from, to) {
	from.addClass("animated slideOutRight");
	from.hide(1002);
	to.show(400);
	to.addClass("animated slideInUp");
}

function changeBubbleTo(no) {

	// hidding and showing the bubbles 
	switch(no) {

	case 3:
		$('#bubble3').removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
		$('#bubble4, #bubble5').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
		$('#currentBubble').val(5);
		break;

	case 5:
		$('#bubble4, #bubble5').removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
		$('#bubble6, #bubble7').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
		$('#currentBubble').val(7);
		break;

	case 7:
		// cost of the user taxes
		var taxesCost = $('#taxesCost').val();

		// if no answer or illegal answer nothing happend
		if (taxesCost != "" && parseInt(taxesCost) > 0) { 
			$('#bubble6, #bubble7').removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
			$('#bubble8').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
			$('#currentBubble').val(8);    	
		}

		break;


	case 13:
		$('#bubble13').removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
		$('#bubble14, #bubble15').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
		$('#currentBubble').val(15);
		break;

	case 15:
		// getting radio button choice (yes/no)
		var choice = $('input[name=projectsPart]:checked').val();

		// if the user didn't select yes nor no we do not continue
		if (choice != undefined) { 
			$('#bubble14, #bubble15').removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
			$('#bubble16').show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
			$('#currentBubble').val(16);
		}
		
		break;

	default:
		var oldBubble = $('#bubble' + no);
		var newBubble = $('#bubble' + (no + 1));
		oldBubble.removeClass(BUBBLE_ANIM_IN).addClass(BUBBLE_ANIM_OUT).hide(BUBBLE_TIME_OUT);
		newBubble.show(BUBBLE_TIME_IN).addClass(BUBBLE_ANIM_IN);
		$('#currentBubble').val(no+1);
	}
}