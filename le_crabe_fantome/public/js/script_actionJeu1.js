	'use strict'
	
$("#Reset2").click(function(e){
	$(".BateauG1").fadeOut("slow");
	$(".BateauP1").fadeOut("slow");
	$(".BateauM1").fadeOut("slow");
	$(".BateauM2").fadeOut("slow");
	$(".BateauP2").fadeOut("slow");
	$(".BateauG2").fadeOut("slow");
	
	
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
	
	document.getElementById("Ma").style.transform = 'scale(' + 1 + ')';
	document.getElementById("Ha").style.transform = 'scale(' + 1 + ')';
	document.getElementById("Sa").style.transform = 'scale(' + 1 + ')';
	
	$("#H1C").fadeIn("slow");
	$("#H2C").fadeIn("slow");
	$("#H3C").fadeIn("slow");
	
	$("#H1PC").fadeOut("slow");
	$("#H2PC").fadeOut("slow");
	$("#H3PC").fadeOut("slow");
	
});
	
$("#Bouton2050").click(function(e){
	if(document.getElementById("scenar1").checked){
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeIn("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeIn("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeIn("slow");
		$(".Merlu3").fadeIn("slow");
		$(".Merlu4").fadeIn("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeIn("slow");
		$(".Sole3").fadeIn("slow");
		$(".Sole4").fadeOut("slow");
	
		document.getElementById("Ma").style.transform = 'scale(' + 1.1 + ')';
		document.getElementById("Ha").style.transform = 'scale(' + 0.3 + ')';
		document.getElementById("Sa").style.transform = 'scale(' + 0 + ')';
		
		$("#H1C").fadeOut("slow");
		$("#H2C").fadeOut("slow");
		$("#H3C").fadeIn("slow");
		
		$("#H1PC").fadeIn("slow");
		$("#H2PC").fadeIn("slow");
		$("#H3PC").fadeOut("slow");
		
	}
	if(document.getElementById("scenar2").checked){
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeIn("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeIn("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeIn("slow");
		$(".Merlu3").fadeIn("slow");
		$(".Merlu4").fadeIn("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeIn("slow");
		$(".Sole3").fadeIn("slow");
		$(".Sole4").fadeOut("slow");
		
		document.getElementById("Ma").style.transform = 'scale(' + 1.05 + ')';
		document.getElementById("Ha").style.transform = 'scale(' + 0.95 + ')';
		document.getElementById("Sa").style.transform = 'scale(' + 0 + ')';
		
		$("#H1C").fadeOut("slow");
		$("#H2C").fadeOut("slow");
		$("#H3C").fadeIn("slow");
		
		$("#H1PC").fadeIn("slow");
		$("#H2PC").fadeIn("slow");
		$("#H3PC").fadeOut("slow");
	}
	if(document.getElementById("scenar3").checked){
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeIn("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeIn("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeIn("slow");
		$(".Merlu3").fadeIn("slow");
		$(".Merlu4").fadeOut("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeIn("slow");
		$(".Sole3").fadeIn("slow");
		$(".Sole4").fadeOut("slow");
		
		document.getElementById("Ma").style.transform = 'scale(' + 0.90 + ')';
		document.getElementById("Ha").style.transform = 'scale(' + 0.2 + ')';
		document.getElementById("Sa").style.transform = 'scale(' + 0 + ')';
		
		$("#H1C").fadeOut("slow");
		$("#H2C").fadeOut("slow");
		$("#H3C").fadeOut("slow");
		
		$("#H1PC").fadeIn("slow");
		$("#H2PC").fadeIn("slow");
		$("#H3PC").fadeIn("slow");
		
	}
	if(document.getElementById("scenar4").checked){
		$(".Homard1").fadeIn("slow");
		$(".Homard2").fadeIn("slow");
		$(".Homard3").fadeIn("slow");
		$(".Homard4").fadeIn("slow");
		
		$(".Merlu1").fadeIn("slow");
		$(".Merlu2").fadeIn("slow");
		$(".Merlu3").fadeOut("slow");
		$(".Merlu4").fadeOut("slow");
		
		$(".Sole1").fadeIn("slow");
		$(".Sole2").fadeIn("slow");
		$(".Sole3").fadeIn("slow");
		$(".Sole4").fadeOut("slow");
		
		document.getElementById("Ma").style.transform = 'scale(' + 0.7 + ')';
		document.getElementById("Ha").style.transform = 'scale(' + 0 + ')';
		document.getElementById("Sa").style.transform = 'scale(' + 0 + ')';
		
		$("#H1C").fadeOut("slow");
		$("#H2C").fadeOut("slow");
		$("#H3C").fadeOut("slow");
		
		$("#H1PC").fadeIn("slow");
		$("#H2PC").fadeIn("slow");
		$("#H3PC").fadeIn("slow");
	}
});


$("#scenar1").click(function(e){
	$(".BateauG1").fadeOut("slow");
	$(".BateauP1").fadeOut("slow");
	$(".BateauM1").fadeIn("slow");
	$(".BateauM2").fadeIn("slow");
	$(".BateauP2").fadeOut("slow");
	$(".BateauG2").fadeOut("slow");
	

});

$("#scenar2").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeOut("slow");
	$(".BateauM1").fadeOut("slow");
	$(".BateauM2").fadeOut("slow");
	$(".BateauP2").fadeOut("slow");
	$(".BateauG2").fadeIn("slow");
	
});

$("#scenar3").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeOut("slow");
	$(".BateauM1").fadeIn("slow");
	$(".BateauM2").fadeIn("slow");
	$(".BateauP2").fadeOut("slow");
	$(".BateauG2").fadeIn("slow");
	
});

$("#scenar4").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeIn("slow");
	$(".BateauM1").fadeIn("slow");
	$(".BateauM2").fadeIn("slow");
	$(".BateauP2").fadeIn("slow");
	$(".BateauG2").fadeIn("slow");
	
});


/*
$("#barreJ2").mouseup(function(e){
	if (document.getElementById("barreJ2").value==0){
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeIn("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeIn("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==1){
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeIn("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==2){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==3){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==4){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==5){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeIn("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeOut("slow");
	}
	
	else if (document.getElementById("barreJ2").value==6){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeIn("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeOut("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeOut("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeOut("slow");
	}
});
*/