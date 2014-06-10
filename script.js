var codeLine=0;
var codeSpeed=1.0;//should be 10 seconds
var compileSpeed=1.0;
var runSpeed=0.5;
var transTime=1000;//should be 5000
var statusSize=5;//5 lines of status

var compileBtnIni=false;//bool to initiate the button at beginning
var runBtnIni=false;//bool to initiate the button at beginning
var debugBtnIni=false;//bool to initiate the button at beginning
var firstCodeIni=false;//bool to go through the first code

function load(){
	setInterval(function(){
		gameTick()
	},
	100);
	setTimeout(function(){
		document.getElementById("printCode").innerHTML = "...Maybe write some code?";
	},
	transTime);//should be 5000
	setTimeout(function(){
		//document.getElementById("status").innerHTML = "Comon, just try it...";
		status("Comon, just try it...");
		document.getElementById("codeBtn").style.visibility="visible";//enable code button
	},
	transTime*2);//should be 10000
}

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
	document.getElementsByClassName("codeBtns").style.disabled = true;//disable the codebuttons
	progressBarDown(codeSpeed,"code");
	setTimeout(function(){
		status("You wrote one line of code!");
		if(!compileBtnIni){//initiate the compile button after first code
			setTimeout(function(){
				status("Maybe try compiling this code?");
				document.getElementById("compileBtn").style.visibility="visible";//enable compile button
				document.getElementById("compileBtn").disabled = false;//enable compile button
				document.getElementById("codeBtn").disabled = false;//disable code button
				compileBtnIni=true;
			},
			transTime);	
		}else{
			document.getElementsByClassName("codeBtns").disabled = false;//enable the codebuttons
		}
		codeLine++;
	},
	codeSpeed*1000);
}
function compile(){
	console.log("COMPILE");//debugbing
	document.getElementsByClassName("codeBtns").disabled = true;//disable the codebuttons
	progressBarDown(compileSpeed*codeLine,"compile");
	setTimeout(function(){
		status("You compiled your code!");
		if(!runBtnIni){//initiate the run button after first code
			setTimeout(function(){
				//document.getElementById("status").innerHTML = "Maybe try running this code?";
				status("Maybe try running this code?");
				document.getElementById("runBtn").style.visibility="visible";//enable compile button
				document.getElementById("runBtn").disabled = false;//enable compile button
				document.getElementById("codeBtn").disabled = false;//disable code button
				document.getElementById("compileBtn").disabled = false;//disable compile button
				runBtnIni=true;
			},
			transTime);	
		}else{
			document.getElementsByClassName("codeBtns").disabled = false;//enable the codebuttons
		}
	},
	compileSpeed*codeLine*1000);
}
function run(){
	console.log("RUN");//debugbing
	document.getElementsByClassName("codeBtns").disabled = true;//disable the codebuttons
	progressBarDown(runSpeed*codeLine,"run");
	setTimeout(function(){
		status("Running code...");
		if(!debugBtnIni){//initiate the debug button after first code
			setTimeout(function(){
				document.getElementById("terminal").style.visibility = "visible";//shows the terminal
				document.getElementById("terminal").innerHTML = "Hallo Wurld!";
				//document.getElementById("status").innerHTML = "Hmph... may needs some tweaking...";
				status("Hmph... may needs some tweaking...");
				document.getElementById("debugBtn").style.visibility="visible";//enable debug button
				document.getElementById("debugBtn").disabled = false;//enable debug button
				document.getElementById("codeBtn").disabled = false;//disable code button
				document.getElementById("compileBtn").disabled = false;//disable compile button
				document.getElementById("runBtn").disabled = false;//disable run button
				runBtnIni=true;
			},
			transTime);	
		}else{
			document.getElementsByClassName("codeBtns").disabled = false;//enable the codebuttons
			runCode(lines);
		}
	},
	runSpeed*codeLine*1000);
}
function debug(){
	var debugTime= 3;//will be random
	console.log("DEBUG");//debugging
	document.getElementsByClassName("codeBtns").disabled = true;//disable the codebuttons
	progressBarDown(debugTime,"debug");
	setTimeout(function(){
		status("Debugging code...");
		if(!firstCodeIni){//initiate the debug button after first code
			setTimeout(function(){
				document.getElementById("status").innerHTML = "Some quick spell-checking...";
				document.getElementById("terminal").innerHTML = "Hello World!";
				firstCodeIni=true;
			},
			transTime);	
		}else{
			document.getElementsByClassName("codeBtns").disabled = false;//enable the codebuttons
			runCode(lines);
		}
	},
	debugTime*1000);
}
function status(strStatus){
	var node=document.createElement("LI");
	var textnode=document.createTextNode(strStatus);
	node.appendChild(textnode);
	var list = document.getElementById("status");
	list.insertBefore(node,list.childNodes[0]);
	console.log(list.childNodes.length);
	if(list.childNodes[statusSize]!=null)
		list.removeChild(list.childNodes[statusSize]);
	var grad=0; 
	for(var i =0; i<statusSize;i++){
		grad+=45;
		if(grad>255)
			grad=255;
		if(list.childNodes[i]!=null)
			list.childNodes[i].style.color="rgb("+grad+","+grad+","+grad+")";
	}
}
function runCode(lines){
	document.getElementById("terminal").innerHTML = "running code for" + lines + " lines";
}
function progressBarDown(totalTime,operation){
	document.getElementById("progressbar").style.visibility="visible";//make the progressbar visible
	document.getElementById("progressbarStatus").style.visibility="visible";//make the progressbarStatus visible
	var countDown = totalTime;
	var countDowner = setInterval(function(){
		countDown-=0.1;
		document.getElementById("progressbarStatus").innerHTML = "Writing "+operation+"(" + countDown.toFixed(1) + ")...";
		var progresspx=((countDown/totalTime)*200).toFixed(0);
		document.getElementById("progressbar").style.width = progresspx+"px";
	},
	100);
	setTimeout(function(){
		clearInterval(countDowner);
		document.getElementById("progressbar").style.visibility="hidden";//hides the progressbar
		document.getElementById("progressbarStatus").style.visibility="hidden";//hides the progressbarstatus
	},
	totalTime*1000);
}


