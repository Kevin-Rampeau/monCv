window.addEventListener('load',function(){
	//DECLARTATION DES VARIABLES
	var variationOpacite = 1
	var arg =0;
	var arretScroll;
	var start=null;
	var top = $(window).scrollTop();
	var hauteur = $(window).height();
	var clickFleche = 1;
	$('h1').css('opacity',variationOpacite);
	//INITIALISATION FOND ET TITRE
	if(top <500 ){
		top = $(window).scrollTop();
		$('h1').css('opacity',1)
		$('#fleche').css('opacity',1);
		$('deuxiemeFond').css('opacity',0);
	}
	if(top >500 ){
		top = $(window).scrollTop();
		$('h1').css('opacity',0)
		$('#fleche').css('opacity',0);
		$('#deuxiemeFond').css('opacity',1);
	}
	//ANIMATION FLECHE
	$('#fleche').animate({top:'500px'},1500,function(){
		$('#fleche').animate({top:'400px'},400,function(){	
			$('#fleche').animate({top:'500px'},300,function(){
				$('#fleche').animate({top:'415px'},350,function(){
					$('#fleche').animate({top:'500px'},330,function(){
						$('#fleche').animate({top:'450px'},200,function(){
							$('#fleche').animate({top:'500px'},200,function(){
								$('#fleche').animate({top:'470px'},150,function(){
									$('#fleche').animate({top:'500px'},150,function(){
										$('#fleche').animate({top:'490px'},100,function(){
											$('#fleche').animate({top:'500px'},100,function(){
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
	//MODIFICATION DU FOND D4ECRAN EN FONCTION DU SCROLL
	setInterval(function(){
			top = $(window).scrollTop();
			$('h3').css('opacity',0);
			if(top <300){
				$('h1').css('opacity',1);
				$('#fleche').css('opacity',1);
				$('#deuxiemeFond').css('opacity',0);
				$('h3').css('opacity',0);
			}
			if(top >300){
				$('h1').css('opacity',0.9);
				$('#fleche').css('opacity',0.9);
				$('deuxiemeFond').css('opacity',0.1);
				
			}
			if(top >340){
				$('h1').css('opacity',0.8);
				$('#fleche').css('opacity',0.8);
				$('#deuxiemeFond').css('opacity',0.2);
				
			}
			if(top >380 ){
				$('h1').css('opacity',0.7);
				$('#fleche').css('opacity',0.7);
				$('#deuxiemeFond').css('opacity',0.3);
				
			}
			if(top >420 ){
				$('h1').css('opacity',0.6);
				$('#fleche').css('opacity',0.6);
				$('#deuxiemeFond').css('opacity',0.4);
				
			}
			if(top >460){
				$('h1').css('opacity',0.5);
				$('#fleche').css('opacity',0.5);
				$('#deuxiemeFond').css('opacity',0.5);
				$('h3').css('opacity',0.1);
				
			}
			if(top >500){
				$('h1').css('opacity',0.4);
				$('#fleche').css('opacity',0.4);
				$('#deuxiemeFond').css('opacity',0.6);
				$('h3').css('opacity',0.3);
			}
			if(top >540){
				$('h1').css('opacity',0.3);
				$('#fleche').css('opacity',0.3);
				$('#deuxiemeFond').css('opacity',0.7);
				$('h3').css('opacity',0.5);
			}
			if(top >580){
				$('h1').css('opacity',0.2);
				$('#fleche').css('opacity',0.2);
				$('#deuxiemeFond').css('opacity',0.8);
				$('h3').css('opacity',0.7);
			}
			if(top >620){
				$('h1').css('opacity',0.1);
				$('#fleche').css('opacity',0.1);
				$('#deuxiemeFond').css('opacity',0.9);
				$('h3').css('opacity',0.9);
			}
			if(top >700){
				$('h1').css('opacity',0);
				$('#fleche').css('opacity',0);
				$('#deuxiemeFond').css('opacity',1);
				$('h3').css('opacity',1);
			}
				
		},1);
		
	
	
	// CHANGEMENT DU SCROLL AU CLIQUE SUR LA FLECHE
	$('#fleche2,li:nth-child(2)').click(function(){
		if(clickFleche == 1){
			clickFleche=0;
			arretScroll = setInterval(function(){
				arg = arg +10;
				$(window).scrollTop(arg)
				if(arg>1000){
					clearInterval(arretScroll);
					arg = 0;
				}
			},10);
			setTimeout(function(){clickFleche=1},3000);
		}
		
	});
	//ANIMATION FLECHE AU SURVOLE
	$('#fleche2').mouseover(function(){
		$('#fleche').animate({top:'520px'},100,function(){
			$('#fleche').animate({top:'500px'},300)
		});
	});
}, false);