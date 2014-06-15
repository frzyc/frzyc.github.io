function save(){	
	
	//console.log("test typeof string:"+typeof stat.name+";");
	//console.log("test typeof int:"+typeof stat.codeLine+";");
	//console.log("test typeof double:"+typeof stat.codeSpeed+";");
	//console.log("test typeof array:"+typeof stat.titles+";");
	
	for(prop in stat){
		if(typeof stat[prop]==="object"){
			
		}else if(typeof stat[prop]==="string"){
			console.log("SAVING prop:"+prop);
			createCookie("stat."+prop,stat[prop]);	
			console.log("SAVED stat."+prop+": "+readCookie("stat."+prop,stat[prop]));
			console.log("SAVED stat."+prop+"typeof: "+typeof readCookie("stat."+prop,stat[prop]));
		}else if(typeof stat[prop]==="number"){
			
		}
			
	}
	
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}else{ 
		var date = new Date();
		date.setTime(date.getTime()+(100*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
