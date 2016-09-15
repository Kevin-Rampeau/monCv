$(document).ready(function(){
// VIBRATION DE LA FENETRE	(aka ma fusée lol)
	fonctionVibration = function(){
		$('#cadreJeu').animate({marginLeft:'-4px'},1,function(){
			$('#cadreJeu').animate({marginLeft:'+4px'},1,function(){
				$('#cadreJeu').animate({marginLeft:'-4px'},1,function(){
					$('#cadreJeu').animate({marginLeft:'+4px'},1,function(){
						$('#cadreJeu').animate({marginLeft:'-2px'},10,function(){
							$('#cadreJeu').animate({marginLeft:'+2px'},10,function(){
								$('#cadreJeu').animate({marginLeft:'-2px'},10,function(){
									$('#cadreJeu').animate({marginLeft:'+2px'},10,function(){
										$('#cadreJeu').animate({marginLeft:'0px'},10,function(){
									});
								});
							});
						});
					});
				});
			});
		});
	});
	}

});