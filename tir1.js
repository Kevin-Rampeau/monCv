/******************************************************
*******************************************************
************************TIR 1**************************
*******************************************************
******************************************************/


window.addEventListener('load',function(){
//DECLARATION VARIABLE
	var leftTir1;
	var topTir1;
	var leftAsteroide1;
	var topAsteroide1;
	var leftAsteroide2;
	var topAsteroide2;
	var topAsteroide3;
	var leftAsteroide3;
	var start = null;
	var arret1 = 0;
	var laser1 = document.getElementById("laser1");
	
	//TIR 1
	fonctionTir1 = function(){
		laser1.play();
		tir++;
		var pixel = 0;
		var leftVaisseau = $('div[id="vaisseau"]').position().left;
		var tir1 = $('div[id="tir1"]');
		var asteroide1=$('div[id="asteroide1"]')
		var asteroide2=$('div[id="asteroide2"]')
		var asteroide3=$('div[id="asteroide3"]')
		
		//MISE EN FORME DE LA DIV DE TIR
		tir1.css('width','20px');
		tir1.css('height','20px');
		tir1.css('position','absolute');
		tir1.css('background','url("image/tir.png")');
		 
		//POSITION TIR
		tir1.css('left',leftVaisseau+40); //position leftVaisseau = position tir
		tir1.css('top',pixel);
		
		//DEPLACEMENT TIR
		function deplacement(timestamp){
			
			var progress;
			if (start === null){
				start = timestamp
			};
			progress = timestamp - start;
			if (progress > 5) {
				start = timestamp;
				topTir1 = tir1.position().top;
				leftTir1 = tir1.position().left;
				topAsteroide1 = asteroide1.position().top;
				leftAsteroide1 = asteroide1.position().left;
				topAsteroide2 = asteroide2.position().top;
				leftAsteroide2 = asteroide2.position().left;
				topAsteroide3 = asteroide3.position().top;
				leftAsteroide3 = asteroide3.position().left;
				pixel= pixel-20;
				tir1.css('top',pixel);
			}
			//COLISION
			if(((0-topTir1)>(480-topAsteroide1))&&(leftTir1 > leftAsteroide1-20)&&(leftTir1<(leftAsteroide1+20))){
				
				tir1.css('display','none');
				destruction1=1;
				tir = 0;
				//EXPLOSION
				$('#masque').css('left',((leftAsteroide1 - 54) + 'px'));
				$('#masque').css('top',((topAsteroide1 -54) + 'px'));
				fonctionVibration();
				fonctionExplosion();
			}
			if(((0-topTir1)>(450-topAsteroide2))&&(leftTir1 > leftAsteroide2-20)&&(leftTir1<(leftAsteroide2+55))){
				tir1.css('display','none');
				destruction2=1;
				tir = 0;
				//EXPLOSION
				$('#masque').css('left',((leftAsteroide2 - 39) + 'px'));
				$('#masque').css('top',((topAsteroide2 -19) + 'px'));
				fonctionVibration();
				fonctionExplosion();
			}
			
			if(((0-topTir1)>(400-topAsteroide3))&&(leftTir1 > leftAsteroide3-20)&&(leftTir1<(leftAsteroide3+110))){
				tir1.css('display','none');
				destruction3=1;
				tir = 0;
				//EXPLOSION
				$('#masque').css('left',((leftAsteroide3 - 14) + 'px'));
				$('#masque').css('top',((topAsteroide3 -4) + 'px'));
				fonctionVibration();
				fonctionExplosion();
			}
			
			if(pixel<-500){
				tir1.css('display','none');
				
				tir = 0;
			};
			arret1 = requestAnimationFrame(deplacement);
		};
		clearTimeout(clr1);
		requestAnimationFrame(deplacement);
		tir1.css('display','');
		cancelAnimationFrame(arret1);
	}	
});
	