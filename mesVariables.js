//VARIABLES GLOBALES

	var vie = 0;
	var choc = 0;
	var tableauVie =['#vaisseauMini1','#vaisseauMini2','#vaisseauMini3'];
	var destruction2=0;
	var destruction3 =0;
	var destruction1=0;
	var tir=0;
	var tab1 =0;
	var tab2 =0;
	var tab3 =0;
	var pixel1 = -500;
	var pixel2 = -500;
	var pixel3 = -500;
	var tabCompetence =0;
	var opacite = 0;
	var toucheZ =1;
	var tirInit=1;
	var pixelCompetence = -1000;
	var stopGameOver=0;
	var variableSurvole = 1;
	var deplacementAsteroide1;
	var deplacementAsteroide2;
	var deplacementAsteroide3;
	var deplacementCompetence;
	var fonctionExplosion;
	var fonctionVibration;
	var fonctionYouWin
	$(document).ready(function(){
		var click = document.getElementById("click");
		var explosion1 = document.getElementById("explosion1");
		var explosion2 = document.getElementById("explosion2");
		var explosion3 = document.getElementById("explosion3");
		var musique = document.getElementById("musique");
	});