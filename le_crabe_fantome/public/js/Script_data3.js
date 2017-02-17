	'use strict';

$("#Macération").click(function(e){
	$(".ScientifiqueJ3-1").fadeIn("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeIn("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeOut("slow");

	$("#Macération").css("background-color", "#faf7f5");
	$("#Ultrasons").css("background-color", "#6a9dae");
	$("#Enzymes").css("background-color", "#6a9dae");
	$("#Ultrasons_Enzymes").css("background-color", "#6a9dae");

});

$("#Ultrasons").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeIn("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeIn("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeOut("slow");

	$("#Macération").css("background-color", "#6a9dae");
	$("#Ultrasons").css("background-color", "#faf7f5");
	$("#Enzymes").css("background-color", "#6a9dae");
	$("#Ultrasons_Enzymes").css("background-color", "#6a9dae");
});

$("#Enzymes").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeIn("slow");
	$(".ScientifiqueJ3-4").fadeOut("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeIn("slow");
	$(".DataJ3-4").fadeOut("slow");

	$("#Macération").css("background-color", "#6a9dae");
	$("#Ultrasons").css("background-color", "#6a9dae");
	$("#Enzymes").css("background-color", "#faf7f5");
	$("#Ultrasons_Enzymes").css("background-color", "#6a9dae");
});

$("#Ultrasons_Enzymes").click(function(e){
	$(".ScientifiqueJ3-1").fadeOut("slow");
	$(".ScientifiqueJ3-2").fadeOut("slow");
	$(".ScientifiqueJ3-3").fadeOut("slow");
	$(".ScientifiqueJ3-4").fadeIn("slow");

	$(".DataJ3-1").fadeOut("slow");
	$(".DataJ3-2").fadeOut("slow");
	$(".DataJ3-3").fadeOut("slow");
	$(".DataJ3-4").fadeIn("slow");

	$("#Macération").css("background-color", "#6a9dae");
	$("#Ultrasons").css("background-color", "#6a9dae");
	$("#Enzymes").css("background-color", "#6a9dae");
	$("#Ultrasons_Enzymes").css("background-color", "#faf7f5");
});