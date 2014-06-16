function saveCookie(){	
	for(prop in stat){
		if(typeof stat[prop]==="object"){
			for(p in stat[prop]){
				console.log("SAVING stat."+prop+"."+p);
				createCookie("stat."+prop+"."+p,stat[prop][p]);	
				console.log("SAVED stat."+prop+"."+p+": "+readCookie("stat."+prop+"."+p));
			}
		}else if(typeof stat[prop]==="string" ||typeof stat[prop]==="number"||typeof stat[prop]==="boolean"){
			console.log("SAVING stat."+prop);
			createCookie("stat."+prop,stat[prop]);	
			console.log("SAVED stat."+prop+": "+readCookie("stat."+prop));
		}	
	}
	
}
function loadCookie(){
	for(prop in stat){
		if(typeof stat[prop]==="object"){
			var i=0;
			while(readCookie("stat."+prop+"."+i)){
				stat[prop].push(readCookie("stat."+prop+"."+i))
				i++
			}
		}else if(typeof stat[prop]==="string"){
			stat[prop]=readCookie("stat."+prop);
		}else if(typeof stat[prop]==="number"){
			stat[prop]=Number(readCookie("stat."+prop));
		}else if(typeof stat[prop]==="boolean"){
			if(readCookie("stat."+prop)==="true")
				stat[prop]=true;
			else
				stat[prop]=false;
			
		}
	}
}
//http://www.quirksmode.org/js/cookies.html
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
