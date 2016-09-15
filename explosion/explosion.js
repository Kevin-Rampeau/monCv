/******************************************************
*******************************************************
************************EXPLOSION**********************
*******************************************************
******************************************************/
window.addEventListener('load',function(){
	var explosion = document.getElementById("explosion");
	var horizontal = 0;
	var vertical = 0;
	explosion.style["left"] = "0px";
	explosion.style["top"] = "0px";
	start = null
	explosion1 = function(timestamp){
				
		var progress;
		if (start === null){
			start = timestamp;
		}
		progress = timestamp - start;
		if (progress > 50) {
			start = timestamp;
			if( horizontal > (-256)){
				horizontal = parseFloat(explosion.style["left"]);
				explosion.style["left"] = (horizontal - 128) + 'px';
			}
			else{
				explosion.style["left"]="0px";
				horizontal = 0;
				vertical = parseFloat(explosion.style["top"]);
				explosion.style["top"] = (vertical - 128) + 'px';
			};
			if(vertical == -384 ){
				cancelAnimationFrame(arret);
			};
		};
		var arret = requestAnimationFrame(explosion1);
	};
	requestAnimationFrame(explosion1);
});