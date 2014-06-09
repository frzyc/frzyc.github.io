window.addEventListener("DOMContentLoaded", function() {
	setInterval(function(){
		gameTick()
	},
	1000);
}, false);

var codeLine=0;
function gameTick(){
	code();	
}
function code() {
	codeLine++;
    document.getElementById("demo").innerHTML = "You have written " + codeLine + " lines of code";
}


