$(document).ready(function(){
	var bloqueClick = 0;
//LANCEMENT JEU
	$('#commencer').click(function(){
		click.play();
		setTimeout(function(){
		if(bloqueClick==0){		//Bloque le double clique
			requestAnimationFrame(deplacementCompetence);
			requestAnimationFrame(deplacementAsteroide1);
			requestAnimationFrame(deplacementAsteroide2);
			requestAnimationFrame(deplacementAsteroide3);
			bloqueClick = 1;
			//Débloque le double clique
			setTimeout(function(){
				bloqueClick = 0;
			},2000);
		};
		},2000);
		// Animation du contenaire vers le haut
		$('#contenaireCommencer').animate({
			top: '120px'
		},300,function(){
			$('#contenaireCommencer').animate({
				top:'-500px'
			},800);
		});
		
		
	});
//SON AU SURVOLE
	$('#commencer').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});
	$('#commencer').mouseleave(function(){
		variableSurvole = 1 
	});
	
});