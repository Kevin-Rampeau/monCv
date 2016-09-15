$(document).ready(function(){
	//LANCEMENT DU JEU
	$('#jouer').click (function(){
		click.play();
		musique.play();
		//ANIMATION RETOU CONTENAIRE JOUER
		$('#contenaireJouer').animate({
			top: '220px'
		},300,function(){
			$('#contenaireJouer').animate({
				top:'-500px'
			},800);
		});
		 setTimeout(fonctionCommencer,1000);
		
		 $('#avantJeu').animate({opacity:0},2000);
	});
	
	var fonctionCommencer = function(){
		
		$('#contenaireCommencer').animate({
			top: '120px'
		},800,function(){
			$('#contenaireCommencer').animate({
			top: '100px'
			},300);
		});
		
	};
	// SURVOLE BOUTON JOUER ET CV
	$('#jouer').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
		
	});
	$('#jouer').mouseleave(function(){
		variableSurvole = 1 
	});
	$('#cv').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});
	$('#cv').mouseleave(function(){
		variableSurvole = 1 
	});
});