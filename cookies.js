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
			console.log("SAVED stat."+prop+": "+getCookie("stat."+prop,stat[prop]));
			console.log("SAVED stat."+prop+"typeof: "+typeof getCookie("stat."+prop,stat[prop]));
		}else if(typeof stat[prop]==="number"){
			
		}
			
	}
	
}

//http://www.sitepoint.com/how-to-deal-with-cookies-in-javascript/
function createCookie(name, value, expires, path, domain) {
	var cookie = name + "=" + escape(value) + ";";
  	if (expires) {
    // If it's a date
		if(expires instanceof Date) {
			// If it isn't a valid date
			if (isNaN(expires.getTime()))
				expires = new Date();
		}else
			expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
	}else
		expires = new Date(new Date().getTime() + 1000 * 1000 * 60 * 60 * 24);
	cookie += "expires=" + expires.toGMTString() + ";";
 	if (path)
    	cookie += "path=" + path + ";";
  	if (domain)
    	cookie += "domain=" + domain + ";";
 
  	document.cookie = cookie;
}
function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}
function deleteCookie(name, path, domain) {
  // If the cookie exists
  if (getCookie(name))
    createCookie(name, "", -1, path, domain);
}
