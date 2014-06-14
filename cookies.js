function save(){
	if(getCookie("stat.codeLine"))
		console.log("SAVED stat.codeLine: "+getCookie("stat.codeLine"));
	createCookie("stat.codeLine",stat.codeLine);
		
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
    }
    else
		expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
		cookie += "expires=" + expires.toGMTString() + ";";
	}else{
		expires = new Date(new Date().getTime() + 1000 * 1000 * 60 * 60 * 24);
		cookie += "expires=" + expires.toGMTString() + ";";
  	}
 
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
