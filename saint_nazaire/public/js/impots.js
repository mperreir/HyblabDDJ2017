$( document ).ready(function() {
	
	// hiding next sections
	$('#section1_age').hide();
	$('#section1_residence').hide();
	$('#section2').hide();

	// hide bubbles
	$('#bubble2').hide();
	$('#bubble3').hide();
	$('#bubble4').hide();
	$('#bubble5').hide();
	$('#bubble6').hide();


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
		if (choice != undefined) { scroll( $('#section1_residence') , $('#section2') ); }

	});


	$('#nextBubble').click(function() {
		
		// number of the next bubble
		var next = parseInt($('#currentBubble').val()) + 1;

		// display new bubble
		changeBubble(next);
	});


});



function scroll(from, to) {
	from.addClass("animated slideOutUp");
	from.hide(800);
	to.show();
	to.addClass("animated slideInUp");
}

function changeBubble(no) {
	$('#bubble' + (no - 1)).hide();
	$('#bubble' + no).show();
	$('#currentBubble').val(no);
}
