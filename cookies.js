function saveCookie(ob,obname){	
	for(prop in ob){
		if(typeof ob[prop]==="object"){
			console.log("SAVING OBJECT"+obname+"."+prop);
			saveCookie(ob[prop],obname+"."+prop);
		}else if(typeof stat[prop]==="string" ||typeof stat[prop]==="number"||typeof stat[prop]==="boolean"){
			console.log("SAVING "+obname+"."+prop);
			createCookie(obname+"."+prop,ob[prop]);	
			console.log("SAVED "+obname+"."+prop+": "+readCookie(obname+"."+prop));
		}	
	}
	
}
function loadCookie(ob,obname){
	for(prop in ob){
		if(typeof ob[prop]==="object"){
			var i=0;
			while(readCookie(obname+"."+prop+"."+i)){
				ob[prop][i] = readCookie(obname+"."+prop+"."+i);
				i++;
			}
			loadCookie(ob[prop],obname+"."+prop)
		}else if(typeof ob[prop]==="string"){
			ob[prop]=readCookie(obname+"."+prop);
		}else if(typeof ob[prop]==="number"){
			ob[prop]=Number(readCookie(obname+"."+prop));
		}else if(typeof ob[prop]==="boolean"){
			if(readCookie(obname+"."+prop)==="true")
				ob[prop]=true;
			else
				ob[prop]=false;
		}
		console.log("LOADING "+obname+"."+prop+" VALUE: "+ob[prop]);
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
