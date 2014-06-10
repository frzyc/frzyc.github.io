var codeLine=0;
var codeSpeed=1.0;//should be 10 seconds
var compileSpeed=1.0;
var transTime=5;//should be 5000

var compileBtnIni=false;//bool to initiate the button at beginning
var runBtnIni=false;//bool to initiate the button at beginning
var debugBtnIni=false;//bool to initiate the button at beginning

window.addEventListener("DOMContentLoaded", function() {
	setInterval(function(){
		gameTick()
	},
	100);
	setTimeout(function(){
		document.getElementById("printCode").innerHTML = "...Maybe write some code?";
	},
	transTime);//should be 5000
	setTimeout(function(){
		document.getElementById("status").innerHTML = "Comon, just try it...";
		document.getElementById("codeBtn").style.visibility="visible";//enable code button
	},
	transTime*2);//should be 10000
}, false);

function gameTick(){
	if(codeLine!=0){
		printCode();
	}
}
function printCode(){
	document.getElementById("printCode").innerHTML = "You have written " + codeLine + " lines of code";
}
function code() {
	console.log("CODE");//debugbing
	document.getElementById("codeBtn").disabled = true;//disable code button
	document.getElementById("compileBtn").disabled = true;//disable compile button
	document.getElementById("runBtn").disabled = true;//disable run button
	document.getElementById("progressbar").style.visibility="visible";//make the progressbar visible
	var countDowner = progressBarDown(codeSpeed,"code");
	setTimeout(function(){
		clearInterval(countDowner);
		document.getElementById("progressbar").style.visibility="hidden";//hides the progressbar
		document.getElementById("status").innerHTML = "You wrote one line of code!";
		if(!compileBtnIni){//initiate the compile button after first code
			setTimeout(function(){
				document.getElementById("status").innerHTML = "Maybe try compiling this code?";
				document.getElementById("compileBtn").style.visibility="visible";//enable compile button
				document.getElementById("compileBtn").disabled = false;//enable compile button
			},
			5000);	
		}else{
			document.getElementById("codeBtn").disabled = false;//disable code button
			document.getElementById("compileBtn").disabled = false;//enable compile button
			document.getElementById("runBtn").disabled = false;//enable run button
		}
		codeLine++;
	},
	codeSpeed*1000);
}
function compile(){
	console.log("COMPILE");//debugbing
	document.getElementById("codeBtn").disabled = true;//disable code button
	document.getElementById("compileBtn").disabled = true;//disable compile button
	document.getElementById("runBtn").disabled = true;//disable run button
	document.getElementById("progressbar").style.visibility="visible";//make the progressbar visible
	var countDowner = progressBarDown(compileSpeed*codeLine,"compile");
	setTimeout(function(){
		clearInterval(countDowner);
		document.getElementById("progressbar").style.visibility="hidden";//hides the progressbar
		document.getElementById("status").innerHTML = "You compiled your code!";
		if(!runBtnIni){//initiate the compile button after first code
			setTimeout(function(){
				document.getElementById("status").innerHTML = "Maybe try running this code?";
				document.getElementById("runBtn").style.visibility="visible";//enable compile button
				document.getElementById("runBtn").disabled = false;//enable compile button
			},
			5000);	
		}else{
			document.getElementById("codeBtn").disabled = false;//disable code button
			document.getElementById("compileBtn").disabled = false;//enable compile button
			document.getElementById("runBtn").disabled = false;//enable run button
		}
		codeLine++;
	},
	compileSpeed*codeLine*1000);
}
function run(){
	
}
function progressBarDown(totalTime,operation){
	var countDown = totalTime;
	return setInterval(function(){
		countDown-=0.1;
		document.getElementById("status").innerHTML = "Writing "+operation+"(" + countDown.toFixed(1) + ")...";
		var progresspx=((countDown/totalTime)*200).toFixed(0);
		document.getElementById("progressbar").style.width = progresspx+"px";
	},
	100);
}


