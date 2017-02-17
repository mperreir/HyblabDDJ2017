	'use strict';
	

	$("#barreJ4-1").mouseup(function(e){
		//document.getElementById("Budget").value=200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		var echelle =200000-document.getElementById("barreJ4-2").value*80000+document.getElementById("barreJ4-1").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("bourse").style.transform = 'scale(' + echelle/200000 + ')';
		if(document.getElementById("barreJ4-1").value==1){
			$(".Maison1").fadeOut("slow");
			$(".Maison2").fadeIn("slow");
			$(".Maison3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-1").value==2){
			$(".Maison1").fadeIn("slow");
			$(".Maison2").fadeIn("slow");
			$(".Maison3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-1").value==3){
			$(".Maison1").fadeIn("slow");
			$(".Maison2").fadeIn("slow");
			$(".Maison3").fadeIn("slow");
		}
		
	});
	
	$("#ResetV").click(function(e){
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

		document.getElementById("barreJ4-1").value=2;
		document.getElementById("barreJ4-2").value=2;

		var echelle =200000-document.getElementById("barreJ4-2").value*80000+document.getElementById("barreJ4-1").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("bourse").style.transform = 'scale(' + echelle/200000 + ')';
	});

	$("#barreJ4-2").mouseup(function(e){
		//document.getElementById("Budget").value=200000-document.getElementById("barreJ4-1").value*80000+document.getElementById("barreJ4-2").value*50000;
		var echelle =200000-document.getElementById("barreJ4-2").value*80000+document.getElementById("barreJ4-1").value*50000;
		if(echelle<0){
			echelle=0;
		}
		document.getElementById("bourse").style.transform = 'scale(' + echelle/200000 + ')';
		if(document.getElementById("barreJ4-2").value==1){
			$(".Digue1").fadeIn("slow");
			$(".Digue2").fadeOut("slow");
			$(".Digue3").fadeOut("slow");
		}
		else if(document.getElementById("barreJ4-2").value==2){
			$(".Digue1").fadeOut("slow");
			$(".Digue2").fadeOut("slow");
			$(".Digue3").fadeIn("slow");
		}
		else if(document.getElementById("barreJ4-2").value==3){
			$(".Digue1").fadeOut("slow");
			$(".Digue2").fadeIn("slow");
			$(".Digue3").fadeOut("slow");
		}
	});
	
	$("#vague").click(function(e){
		var rand = Math.floor((Math.random() * 10) + 1);
		if(rand<3){
			if(document.getElementById("barreJ4-2").value==1){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeIn("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue1").fadeIn("slow");

			}
			else if(document.getElementById("barreJ4-2").value==2){
				$(".Mer2").fadeIn("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue3").fadeIn("slow");
			
			}
			else if(document.getElementById("barreJ4-2").value==3){
				$(".Mer2").fadeIn("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue2").fadeIn("slow");
			}
		}
		if(rand>=3 && rand<=6){
			if(document.getElementById("barreJ4-2").value==1){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeIn("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue1").fadeIn("slow");

			}
			else if(document.getElementById("barreJ4-2").value==2){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeIn("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue3").fadeIn("slow");
			
			}
			else if(document.getElementById("barreJ4-2").value==3){
				$(".Mer2").fadeIn("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue2").fadeIn("slow");
			}
		}
		if(rand>=7){
			if(document.getElementById("barreJ4-2").value==1){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeIn("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue1").fadeIn("slow");

			}
			else if(document.getElementById("barreJ4-2").value==2){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeIn("slow");
				$(".Mer4").fadeOut("slow");
				$(".Digue3").fadeIn("slow");
			
			}
			else if(document.getElementById("barreJ4-2").value==3){
				$(".Mer2").fadeOut("slow");
				$(".Mer1").fadeOut("slow");
				$(".Mer3").fadeOut("slow");
				$(".Mer4").fadeIn("slow");
				$(".Digue2").fadeIn("slow");
			}
		}
	});

	