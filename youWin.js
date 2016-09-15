$(document).ready(function(){ 
// ANIMATION YOU WIN	
	fonctionYouWin = function(){
		var audioYouWin = document.getElementById("audioYouWin");
		audioYouWin.play();
		// Animation you win
		$('#youWin').animate({opacity: 1},2000,function(){
				$('#contenaireRejouer2').animate({top:'370px'},1000,function(){
					$('#contenaireRejouer2').animate({top:'350px'},200);
				
				});
			});
			stopGameOver=1; // Evite game over et youWin en meme temps
		};
// ANIMATION REJOUER
	$('#rejouer2').click(function(){
		//Lancement son
		click.play();
		musique.load(); // Rechargement musique pour qu'elle puisse redemarer a 0
		musique.play();
		stopGameOver=0;
		//Animation you win
		$('#youWin').animate({top:'240px'},300,function(){
			$('#youWin').animate({top:'-500px'},800);
		});
		//Animation rejouer
		$('#contenaireRejouer2').animate({top: '330px'},300,function(){
			$('#contenaireRejouer2').animate({top:'1055px'},800);
		});
		// Reinitialisation des div you win et rejouer
		setTimeout(function(){
			$('#youWin').css('opacity','0').css('top','220px');
			$('#contenaireRejouer2').css('top','-500px')
		},2000);
		fonctionReset();
		$('div[id="vaisseau"]').css('display','');
		tirInit=1;
 });
// SON AU SURVOLE
 $('#rejouer2').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});

$('#rejouer2').mouseleave(function(){
		variableSurvole = 1 
	});
$('#cv3').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});
	$('#cv3').mouseleave(function(){
		variableSurvole = 1 
	});
});