/******************************************************
*******************************************************
***********DEPLACEMENT ASTEROÏDE 2*********************
*******************************************************
******************************************************/

$(document).ready(function(){
	
//DECLARATION DES VARIABLES
	
	var vaisseau = $('div[id="vaisseau"]');
	var asteroide2 = $('div[id="asteroide2"]');
	var topAsteroide2; 
	var leftAsteroide2;
	var topVaisseau;
	var leftVaisseau;
	var tableauAsteroide2 = ['url(image/asteroide21.png)','url(image/asteroide22.png)','url(image/asteroide23.png)'];
	var start = null;
	
	//initialisation
	asteroide2.css('left',((Math.random()+0.109) * 462 )+'px');
	asteroide2.css('top','-500px');
	
//DEPLACEMENT DES ASTEROIDE	
	
	deplacementAsteroide2 = function(timestamp){
		var progress;
		if (start === null) start = timestamp;
		progress = timestamp - start;
		if (progress > 10) {
			start = timestamp;
			asteroide2.css('background',tableauAsteroide2[tab2]);
			leftAsteroide2 = asteroide2.position().left;
			topAsteroide2 = asteroide2.position().top;
			topVaisseau = vaisseau.position().top;
			leftVaisseau = vaisseau.position().left;
			topAsteroide2 = pixel2;
			asteroide2.css('top',pixel2+'px');
			pixel2 = pixel2 + 7;
			asteroide2.css('display','');
			if(tab2==3){
				tab2 = 0;
			}
		}
		
		// REINITIALISATION DEPLACEMENT DE LA ASTEROIDE
		
		if(pixel2>610){
			pixel2=-500;
			asteroide2.css('left',((Math.random()+0.109) * 462)+'px');
			tab2++
		}
		
		//COLISION ENTRE VAISSEAU ET ASTEROIDE
		
		if((topAsteroide2>(topVaisseau-50)) && ((leftVaisseau - 50)<leftAsteroide2) && (leftAsteroide2< (leftVaisseau +100))){
			asteroide2.css('display','none');
			pixel2=-500;
			asteroide2.css('left',((Math.random()+0.109)* 462 )+'px');
			tab2++;
			choc++;
			$('#masque').css('left',((leftAsteroide2 - 39) + 'px'));
			$('#masque').css('top',((topAsteroide2-19) + 'px'));
			fonctionExplosion();
			explosion2.play();
			$(tableauVie[vie]).css('opacity','0.2');
			vie++;
			fonctionVibration();
			if(choc==3){
				
				$('#masque').css('left',((leftVaisseau - 14) + 'px'));
				$('#masque').css('top',((topAsteroide2 -4) + 'px'));
				fonctionExplosion();
				vaisseau.css('display','none');
				fonctionGameOver();
				fonctionReset();
				musique.pause();
			}
			
		}
		
		//COLLISION TIR ET ASTEROIDE
		
		if(destruction2 ==1){
			asteroide2.css('display','none');
			pixel2=-500;
			asteroide2.css('left',((Math.random()+0.109) * 412 )+'px');
			tab2++;
			destruction2 =0
			explosion2.play();
		}
		requestAnimationFrame(deplacementAsteroide2);
	};

	
});
