var animation_step_slide3=0;
var poucentage_apparition_ville1="-75%";
var scrollTimer, lastScrollFireTime = 0;

window.onload = function() {

	page = document.getElementById("slide3");

	if (page.addEventListener) {
		page.addEventListener("mousewheel", MouseWheelHandler, false);
		page.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	else page.attachEvent("onmousewheel", MouseWheelHandler);
};
	
	function MouseWheelHandler(e) { 	

	var minScrollTime = 200;
    var now = new Date().getTime();

function processSlide3Scroll() {

			var e = window.event || e; // old IE support
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

			console.log(animation_step_slide3);

			switch(animation_step_slide3)
			{
				case 0:
				if (delta==-1) {
					anim_step1_forward();
					animation_step_slide3++;
				}
				else {
					$.fn.fullpage.setAllowScrolling(true);
				}
				break;

				case 1:
				if (delta==-1) {
					anim_step2_forward();
					animation_step_slide3++;
				}
				else {
	    			anim_step2_backward();
					animation_step_slide3--;
				}
				break;

				case 2: 
				if (delta==-1) {
					$.fn.fullpage.setAllowScrolling(true);
	    			//animation_step_slide3++;
				}
				else {
					
					anim_step3_backward();
					animation_step_slide3--;
				}
				break;

				case 3: 
				if (delta==-1) {
					
				}
				else {
					animation_step_slide3--;
				}
				break;
			}	
			return false;
	}


	 if (!scrollTimer) {
        if (now - lastScrollFireTime > (3 * minScrollTime)) {
            processSlide3Scroll();   // fire immediately on first scroll
            lastScrollFireTime = now;
        }
        scrollTimer = setTimeout(function() {
            scrollTimer = null;
            lastScrollFireTime = new Date().getTime();
            processSlide3Scroll();
        }, minScrollTime);
    }

}



function anim_step1_forward () {
    $("#text_slide3_app").removeClass('rezoom');
	$("#text_slide3_app").addClass('dezoom');

	$("#revenu_median").removeClass('disparition');
    $("#revenu_median").addClass('apparition');

	$("#ville1_slide3").removeClass('de_apparition');
	$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom=poucentage_apparition_ville1;$("#ville1_slide3").removeClass('apparition');});
    $("#ville1_slide3").addClass('apparition');
};

function anim_step2_forward () {
    $("#text_slide3_disp").removeClass('de_disparition');
	$("#text_slide3_disp").addClass('disparition');

	$("#ville1_slide3").removeClass('de_disparition');
	$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="100%";document.querySelector("#ville1_slide3").style.opacity="0";$("#ville1_slide3").removeClass('disparition'); });
    $("#ville1_slide3").addClass('disparition');

    $("#ville2_slide3").removeClass('de_apparition');
    $("#ville2_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville2_slide3").style.left="-2%";$("#ville2_slide3").removeClass('apparition');});
    $("#ville2_slide3").addClass('apparition');

    $("#donut").removeClass('disparition');
    $("#donut").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#donut").style.right="-5%";$("#donut").removeClass('apparition');});
    $("#donut").addClass('apparition');
};


function anim_step2_backward () {
    $("#text_slide3_app").removeClass('dezoom');
	$("#text_slide3_app").addClass('rezoom');

	$("#revenu_median").removeClass('apparition');
    $("#revenu_median").addClass('disparition');

    $("#ville1_slide3").removeClass('apparition');
    $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="-180%";$("#ville1_slide3").removeClass('de_apparition');});
    $("#ville1_slide3").addClass('de_apparition');
};

function anim_step3_backward () {
	$("#text_slide3_disp").removeClass('disparition');
	$("#text_slide3_disp").addClass('de_disparition');

	document.querySelector("#ville1_slide3").style.opacity="1";
	$("#ville1_slide3").removeClass('disparition');
	$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom=poucentage_apparition_ville1;$("#ville1_slide3").removeClass('de_disparition');});
    $("#ville1_slide3").addClass('de_disparition');

    $("#ville2_slide3").removeClass('apparition');
    $("#ville2_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville2_slide3").style.left="-38%";$("#ville2_slide3").removeClass('de_apparition');});
    $("#ville2_slide3").addClass('de_apparition');

    $("#donut").removeClass('apparition');
    $("#donut").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#donut").style.right="-150%";$("#donut").removeClass('disparition');});
    $("#donut").addClass('disparition');
}

function reset_anim_slide3() {
	$("#text_slide3_app").removeClass('dezoom');
	$("#text_slide3_app").removeClass('rezoom');

	$("#revenu_median").removeClass('disparition');
	$("#revenu_median").removeClass('apparition');

	$("#text_slide3_disp").removeClass('de_disparition');
	$("#text_slide3_disp").removeClass('disparition');

	$("#ville1_slide3").removeClass('apparition');
	$("#ville1_slide3").removeClass('de_apparition');

	$("#ville1_slide3").removeClass('disparition');
	$("#ville1_slide3").removeClass('de_disparition');

	$("#ville2_slide3").removeClass('apparition');
	$("#ville2_slide3").removeClass('de_apparition');

	$("#donut").removeClass('apparition');
	$("#donut").removeClass('disparition');

	document.querySelector("#ville1_slide3").style.bottom="-180%";
	document.querySelector("#ville1_slide3").style.opacity="1";
	document.querySelector("#ville2_slide3").style.left="-38%";
	animation_step_slide3=0;
}