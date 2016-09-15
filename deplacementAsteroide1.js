/******************************************************
*******************************************************
***********DEPLACEMENT ASTEROÏDE 1*********************
*******************************************************
******************************************************/

$(document).ready(function(){
	
//DECLARATION DES VARIABLES EST FONCTION
	
	var vaisseau = $('div[id="vaisseau"]');
	var asteroide1 = $('div[id="asteroide1"]');
	var topAsteroide1; 
	var leftAsteroide1;
	var topVaisseau;
	var leftVaisseau;
	var tableauAsteroide1 = ['url(image/feu.png)','B','C'];
	var start = null;
	
	//initialisation
	asteroide1.css('left',((Math.random() +0.102) * 492 )+'px');
	asteroide1.css('top','-500px');
	
//DEPLACEMENT DES ASTEROIDE	
	
	deplacementAsteroide1 = function(timestamp){
		var progress;
		if (start === null) start = timestamp;
		progress = timestamp - start;
		if (progress > 10) {
			start = timestamp;
			asteroide1.css('background',tableauAsteroide1[tab1]);
			leftAsteroide1 = asteroide1.position().left;
			topAsteroide1 = asteroide1.position().top;
			topVaisseau = vaisseau.position().top;
			leftVaisseau = vaisseau.position().left;
			topAsteroide1 = pixel1;
			asteroide1.css('top',pixel1+'px');
			pixel1 = pixel1 + 8;
			asteroide1.css('display','');
			if(tab1==3){
				tab1 = 0;
				
			}
		}
		
		// REINITIALISATION DEPLACEMENT DES ASTEROIDE 
		
		if(pixel1>610){
			pixel1=-500;
			asteroide1.css('left',((Math.random() +0.102) * 492)+'px');
			tab1++
		}
		
		//COLISION ENTRE VAISSEAU ET ASTEROIDE 
		
		if((topAsteroide1>(topVaisseau-20)) && ((leftVaisseau - 20)<leftAsteroide1) && (leftAsteroide1< (leftVaisseau +100))){
			asteroide1.css('display','none');
			pixel1=-500;
			asteroide1.css('left',((Math.random() +0.102) * 492 )+'px');
			tab1++;
			choc++;
			$('#masque').css('left',((leftAsteroide1 - 54) + 'px'));
			$('#masque').css('top',((topAsteroide1 -54) + 'px'));
			fonctionExplosion();
			explosion1.play();
			$(tableauVie[vie]).css('opacity','0.2');
			vie++;
			fonctionVibration();
			
			if(choc==3){
				
				$('#masque').css('left',((leftVaisseau - 14) + 'px'));
				$('#masque').css('top',((topAsteroide1 -4) + 'px'));
				fonctionExplosion();
				vaisseau.css('display','none');
				fonctionGameOver();
				fonctionReset();
				musique.pause();
			}
			
		}
		
		//COLLISION TIR ET ASTEROIDE
		
		if(destruction1 ==1){
			asteroide1.css('display','none');
			pixel1=-500;
			asteroide1.css('left',((Math.random() +0.102) * 412 )+'px');
			tab1++;
			destruction1 =0
			explosion1.play();
		}
		requestAnimationFrame(deplacementAsteroide1);
	};
	
	
});
