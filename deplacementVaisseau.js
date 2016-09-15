/******************************************************
*******************************************************
***********DEPLACEMENT VAISSEAU************************
*******************************************************
******************************************************/


window.addEventListener('load',function(){
	
	vaisseau = window.document.getElementById('vaisseau');
	vaisseau.style.bottom = '0px';
	vaisseau.style.left = '206px';
	
	var animation = false;
	var arretGauche = 0;
	var arretHaut;
	var arretDroite = 0;
	var arretBas;
	var coinGauche= 0;
	var coinDroite= 0;
	var start = null;
	
	
	//CONTROLE DES TOUCHE
	window.onkeydown = function(event){
		var code = event.keyCode;
		switch(code){
			//GAUCHE
			case 37:
			
				coinDroite=0;
				if ((animation == false)&&(coinGauche==0)){
					function deplacementGauche(timestamp){
						var progress;
						if (start === null) start = timestamp;
						progress = timestamp - start;
						if (progress > 10) {
							start = timestamp;
							if(parseFloat(vaisseau.style.left)>=10){
								var pixel = parseFloat(vaisseau.style.left);
								vaisseau.style.left = (pixel-10) + 'px';
							}
						}
						//COLISION ENTRE LE VAISSEAU ET LA LIMITE GAUCHE
						if(parseFloat(vaisseau.style.left)<10){
							
							coinGauche = 10;
						}
						arretGauche = requestAnimationFrame(deplacementGauche);
					};
					requestAnimationFrame(deplacementGauche);
					animation = true;
					cancelAnimationFrame(arretDroite);
				}
			
			break;
		
			// DROITE
			case 39:
				
				coinGauche= 0;
				if ((animation == false)&&(coinDroite==0)){
					function deplacementDroite(timestamp){
						var progress;
						if (start === null) start = timestamp;
						progress = timestamp - start;
						if (progress > 10) {
							start = timestamp;
							if(parseFloat(vaisseau.style.left)<=400){
								var pixel = parseFloat(vaisseau.style.left);
								vaisseau.style.left = (pixel+10) + 'px';
							}
						}
						//COLISION ENTRE LE VAISSEAU ET LA LIMITE DROITE
						if(parseFloat(vaisseau.style.left)>400){
							clearInterval(arretDroite)
							coinDroite = 1;
							
						}
						arretDroite = requestAnimationFrame(deplacementDroite);
					};
					requestAnimationFrame(deplacementDroite);
					animation = true;
					cancelAnimationFrame(arretGauche);
				}
			
			break;
			// tir
			case 90:
				
				
				if((toucheZ == 1)&&(tirInit == 1)){
				if(tir == 0){clr1 = setTimeout(fonctionTir1,0);}
				if(tir == 1){clr2 = setTimeout(fonctionTir2,0);}
				if(tir == 2){clr3 = setTimeout(fonctionTir3,0);}
				}
				toucheZ =0
			
			break;
			
		};
	};

	window.onkeyup = function(event){
		var code = event.keyCode;
		switch(code){
			// GAUCHE
			case 37:
				cancelAnimationFrame(arretGauche);
				animation = false;
			break;

			// DROITE
			case 39:
				cancelAnimationFrame(arretDroite);
				animation = false;
			break;
			// DROITE
			case 90:
				toucheZ = 1;	
			break;
			
		}
	}
		
});	
