/******************************************************
*******************************************************
***********DEPLACEMENT COMPETENCE**********************
*******************************************************
******************************************************/

$(document).ready(function(){
//DECLARATION DES VARIABLES
	var vaisseau = $('div[id="vaisseau"]');
	var competence = $('div[id="competence"]');
	var topCompetence; 
	var leftCompetence;
	var topVaisseau;
	var leftVaisseau;
	var start = null;
	var audioCompetence = document.getElementById("audioCompetence");
	var tableauCompetence = ['url(image/html.png)','url(image/css.png)','url(image/javascript.png)','url(image/jquery.png)','url(image/bootstrap.png)','url(image/angular.png)','url(image/mongodb.png)','url(image/nodejs.png)','url(image/ajax.png)','url(image/expressjs.png)','url(image/meteor.png)'];
	var tableauOpaciteCompetence=['#html','#css','#javascript','#jquery','#bootstrap','#angular','#mongodb','#nodejs','#ajax','#expressjs','#meteor'];
//INITIALISATION
	competence.css('left',(Math.random() * 462 )+'px');
	competence.css('top','-500px');
	$('#html,#css,#javascript,#jquery,#bootstrap,#angular,#mongodb,#nodejs,#ajax,#expressjs,#meteor').css('opacity','0.2');
	
	
//DEPLACEMENT DES COMPETENCES	
	deplacementCompetence = function(timestamp){
		var progress;
		if (start === null) start = timestamp;
		progress = timestamp - start;
		if (progress > 10) {
			start = timestamp;
			competence.css('background',tableauCompetence[tabCompetence]);
			leftCompetence = competence.position().left;
			topCompetence = competence.position().top;
			topVaisseau = vaisseau.position().top;
			leftVaisseau = vaisseau.position().left;
			topCompetence = pixelCompetence;
			competence.css('top', pixelCompetence+'px');
			pixelCompetence = pixelCompetence + 6;
			competence.css('display','')
		}
		// REINITIALISATION DEPLACEMENT DE LA COMPMETENCE
		if(pixelCompetence>610){
			pixelCompetence=-1000;
			competence.css('left',(Math.random() * 462)+'px');
		}
		//COLISION ENTRE VAISSEAU ET COMPETENCE
		if((topCompetence>(topVaisseau-50)) && ((leftVaisseau - 50)<leftCompetence) && (leftCompetence< (leftVaisseau +100))){
			competence.css('display','none');
			pixelCompetence=-1000
			competence.css('left',(Math.random() * 462 )+'px')
			tabCompetence++
			audioCompetence.play();
			// Opacité de la barre de competence
			$(tableauOpaciteCompetence[opacite]).css('opacity','1')
			opacite++
			if(tabCompetence==11){
				musique.pause();
				fonctionYouWin();
				tabCompetence = 0;
				fonctionReset();
			}
		}

		requestAnimationFrame(deplacementCompetence);
		
	}

	
});
