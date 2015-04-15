/*Hittest para Jquery por Salvador Gonzalez (@sgb004)*/
jQuery.fn.extend({
	hittest: function(elmB){
		var elmA_Obj = jQuery(this);
		var elmA_pos = elmA_Obj.offset();
		var elmA_posTop = elmA_pos.top;	
		var elmA_hei = elmA_posTop + elmA_Obj.height();
		var elmA_posLeft = elmA_pos.left;
		var elmA_Wid = elmA_posLeft + elmA_Obj.width();

		var elmB_Obj = $(elmB);
		var elmB_pos = elmB_Obj.offset();
		var elmB_posTop = elmB_pos.top;
		var elmB_hei = elmB_posTop + elmB_Obj.height();
		var elmB_posLeft = elmB_pos.left;
		var elmB_Wid = elmB_posLeft + elmB_Obj.width();

		var choque = 0;
		var choTop = 0;
		var choLeft = 0;
		
		if(elmB_posTop >= elmA_posTop && elmB_posTop <= elmA_hei){
			choTop = elmA_hei-elmB_posTop;
		}else if(elmB_hei >= elmA_posTop && elmB_hei <= elmA_hei){
			choTop = elmB_hei-elmA_posTop;
		}else if(elmA_posTop >= elmB_posTop && elmA_posTop <= elmB_hei) {
			choTop = elmB_hei-elmA_posTop; 
		}else if(elmA_hei >= elmB_posTop && elmA_hei <= elmB_hei){
			choTop = elmA_hei-elmB_posTop;
		}

		if(elmB_posLeft >= elmA_posLeft && elmB_posLeft <= elmA_Wid){
			choLeft = elmA_Wid-elmB_posLeft;
		}else if(elmB_Wid >= elmA_posLeft && elmB_Wid <= elmA_Wid){
			choLeft = elmB_Wid-elmA_posLeft;
		}else if(elmA_posLeft >= elmB_posLeft && elmA_posLeft <= elmB_Wid){
			choLeft = elmB_Wid-elmA_posLeft;
		}else if(elmA_Wid >= elmB_posLeft && elmA_Wid <= elmB_Wid){
			choLeft = elmA_Wid-elmB_posLeft;
		}

		choque = choTop*choLeft;
		return choque;
	}
});
