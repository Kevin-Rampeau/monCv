$(document).ready(function(){
	// ANIMATION GAMEOVER
	fonctionGameOver = function(){
		tirInit=0;
		if(stopGameOver==0){
		var audioGameOver = document.getElementById("audioGameOver");
		audioGameOver.play();
		$('#gameOver').animate({opacity: 1},2000,function(){
			$('#contenaireRejouer').animate({top:'370px'},1000,function(){
				$('#contenaireRejouer').animate({top:'350px'},200);
			});
		});
		}
	};
	// ANIMATION REJOUER
	$('#rejouer').click(function(){
		click.play();
		musique.load();
		musique.play();
		//Animation game over
		$('#gameOver').animate({top: '175px'},300,function(){
			$('#gameOver').animate({top:'-500px'},800);
		});
		//Animation rejouer
		$('#contenaireRejouer').animate({top: '330px'},300,function(){
			$('#contenaireRejouer').animate({top:'1055px'},800);
		});
		// Reeinitialisation des div gameover et rejouer
		setTimeout(function(){
			$('#gameOver').css('opacity','0').css('top','155px');
			$('#contenaireRejouer').css('top','-500px')
		},2000);
		fonctionReset();
		$('div[id="vaisseau"]').css('display','');
		tirInit=1;
	});
	// SURVOLE BOUTON
	$('#rejouer').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});
	$('#rejouer').mouseleave(function(){
		variableSurvole = 1 
	});
	$('#cv2').mouseover(function(){
		if(variableSurvole == 1){
			survole.play();
			variableSurvole = 0
		}
	});
	$('#cv2').mouseleave(function(){
		variableSurvole = 1 
	});
	
});