/******************************************************
*******************************************************
***********DEPLACEMENT ASTEROÏDE 3*********************
*******************************************************
******************************************************/

$(document).ready(function(){
	
//DECLARATION DES VARIABLES
	
	var vaisseau = $('div[id="vaisseau"]');
	var asteroide3 = $('div[id="asteroide3"]');
	var topAsteroide3; 
	var leftAsteroide3;
	var topVaisseau;
	var leftVaisseau;
	var tableauAsteroide3 = ['url(image/asteroide31.png)','url(image/asteroide32.png)','url(image/asteroide33.png)'];
	var start = null;
	
	//initialisation
	asteroide3.css('left',((Math.random() +0.122) * 412 )+'px');
	asteroide3.css('top','-500px');
	
	
//DEPLACEMENT DES ASTEROIDE	
	
	deplacementAsteroide3 = function(timestamp){
		var progress;
		if (start === null) start = timestamp;
		progress = timestamp - start;
		if (progress > 10) {
			start = timestamp;
			start = timestamp;
			asteroide3.css('background',tableauAsteroide3[tab3]);
			leftAsteroide3 = asteroide3.position().left;
			topAsteroide3 = asteroide3.position().top;
			topVaisseau = vaisseau.position().top;
			leftVaisseau = vaisseau.position().left;
			topAsteroide3 = pixel3;
			asteroide3.css('top',pixel3+'px');
			pixel3 = pixel3 + 6;
			asteroide3.css('display','');
			if(tab3==3){
				tab3 = 0;
			}
		}
		
		// REINITIALISATION DEPLACEMENT DE LA ASTEROIDE
		
		if(pixel3>650){
			pixel3=-500;
			asteroide3.css('left',((Math.random() + 0.122) * 412 )+'px');
			tab3++
		}
		
		//COLISION ENTRE VAISSEAU ET ASTEROIDE
		
		if((topAsteroide3>(topVaisseau-100))&&(topAsteroide3<(topVaisseau+90)) && ((leftVaisseau - 100)<leftAsteroide3) && (leftAsteroide3< (leftVaisseau +100))){
			asteroide3.css('display','none');
			pixel3=-500;
			asteroide3.css('left',((Math.random() + 0.122) * 412 )+'px');
			tab3++;
			choc++;
			$('#masque').css('left',((leftAsteroide3 - 14) + 'px'));
			$('#masque').css('top',((topAsteroide3-4) + 'px'));
			fonctionExplosion();
			explosion3.play();
			$(tableauVie[vie]).css('opacity','0.2');
			vie++;
			fonctionVibration();
			if(choc==3){
				
				$('#masque').css('left',(leftVaisseau  + 'px'));
				$('#masque').css('top',(topVaisseau  + 'px'));
				fonctionExplosion();
				vaisseau.css('display','none');
				fonctionGameOver();
				fonctionReset();
				musique.pause();
			}
		}
		
		//COLLISION TIR ET ASTEROIDE
		
		if(destruction3 ==1){
			asteroide3.css('display','none');
			pixel3=-500;
			asteroide3.css('left',((Math.random() + 0.122) * 412 )+'px');
			tab3++;
			destruction3 =0
			explosion3.play();
		}
		requestAnimationFrame(deplacementAsteroide3 );
	};

	
});
