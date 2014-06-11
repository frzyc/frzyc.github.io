function minimizeTerm(btn,terminal){
	console.log("MIN");
	if(document.getElementById(btn).innerHTML === "_"){
		document.getElementById(terminal).style.display="none";
		document.getElementById(btn).innerHTML = "o";
	}else{
		document.getElementById(terminal).style.display="inline";
		document.getElementById(btn).innerHTML = "_";
	}
	
}
function closeTerm(termWin){
	console.log("CLOSE");
	document.getElementById(termWin).style.display="none";
}