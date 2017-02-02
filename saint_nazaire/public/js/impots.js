$( document ).ready(function() {
	
	// hiding next sections
	$('#section1_age').hide();
	$('#section1_residence').hide();
	$('#second').hide();
	$('#second').hide();
	$('#third').hide();



	$('#male').click( function() {
		$('.section1_gender_img').attr("src", "img/male.jpg");
	});

	$('#female').click( function() {
		$('.section1_gender_img').attr("src", "img/female.jpg");
	});



	// slow scroll to selected section
	$('#toSection1_age').click(function() {

		// getting src image attribute
		var src = $('.section1_gender_img').attr('src');

		// if src si not defined we do not continue
		if (src != undefined) { scroll($('#section1_gender'),$('#section1_age')); }
		

	});

	$('#toSection1_residence').click(function() {

		// getting age input
		var age = $('#age').val();

		// if age is not typed we do not continue
		if (age != "" && parseInt(age) > 0) {

			$('#section1_age').addClass("animated slideOutUp");
			$('#section1_age').hide(800);
			$('#section1_residence').show();
			$('#section1_residence').addClass("animated slideInUp");
		}


	});

	$('#toSection2').click(function() {

		// getting radio button choice (yes/no)
		var choice = $('input[name=residence]:checked').val();

		// if the user didn't select yes nor no we do not continue
		if (choice != undefined) {
			$('#second').show();
			$('html,body').animate({ scrollTop: $("#second").offset().top}, 'slow');
		}

	});


	$('#toSection3').click(function() {
		$('#third').show();
		$('html,body').animate({ scrollTop: $("#third").offset().top}, 'slow');
	});


});



function scroll(from, to) {
	from.addClass("animated slideOutUp");
	from.hide(800);
	to.show();
	to.addClass("animated slideInUp");
}