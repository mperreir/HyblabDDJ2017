	'use strict';

window.onload = function init (){
	
	
		$("#H1C").fadeIn("slow");
		$("#H2C").fadeIn("slow");
		$("#H3C").fadeIn("slow");
		
		$("#H1PC").fadeOut("slow");
		$("#H2PC").fadeOut("slow");
		$("#H3PC").fadeOut("slow");
		/*
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauM2").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		*/
		
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeOut("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeOut("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeOut("slow");
		$(".Merlu3").fadeIn("slow");
		$(".Merlu4").fadeOut("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeOut("slow");
		$(".Sole3").fadeOut("slow");
		$(".Sole4").fadeIn("slow");
/*
		$(".Touriste1").fadeOut("slow");
		$(".Touriste2").fadeOut("slow");
		$(".Touriste3").fadeOut("slow");
		$(".Touriste4").fadeOut("slow");
*/
		$(".Agriculteur").fadeOut("slow");
		$(".PORC").fadeOut("slow");
		//caca
		$(".Bouse1").fadeOut("slow");
		$(".Bouse2").fadeOut("slow");
		$(".Bouse3").fadeOut("slow");
		$(".Bouse4").fadeOut("slow");

		$(".Scientifique").fadeOut("slow");
		//Scientifique victoire
		$(".Scientifique-réussite").fadeOut("slow");

		$(".LogoScientifique1").fadeOut("slow");
		$(".LogoScientifique2").fadeOut("slow");
		$(".LogoScientifique3").fadeOut("slow");
		$(".LogoScientifique4").fadeOut("slow");
		$(".LogoScientifique5").fadeOut("slow");

		$(".Monstre4").fadeIn("slow");
		$(".Monstre3").fadeOut("slow");
		$(".Monstre2").fadeOut("slow");
		$(".Monstre1").fadeOut("slow");

		$(".Sceau").fadeOut("slow");

		$(".Maison1").fadeIn("slow");
		$(".Maison2").fadeIn("slow");
		$(".Maison3").fadeOut("slow");

		$(".Digue1").fadeOut("slow");
		$(".Digue2").fadeOut("slow");
		$(".Digue3").fadeIn("slow");

		$(".Mer2").fadeIn("slow");
		$(".Mer1").fadeOut("slow");
		$(".Mer3").fadeOut("slow");
		$(".Mer4").fadeOut("slow");


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
		
		var echelle =200000-document.getElementById("barreJ4-2").value*80000+document.getElementById("barreJ4-1").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("bourse").style.transform = 'scale(' + echelle/200000 + ')';
	}