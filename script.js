
var codeLine=0;
var codeSpeed=10;//should be 10 seconds
var codeExp=5;
var compileSpeed=0.5;//shoule be 0.5 seconds
var debugSpeed=10;//should be 10 seconds
var runSpeed=0.5;
var transTime=5000;//should be 5000
var statusSize=5;//5 lines of status
/*
var codeLine=0;
var codeSpeed=0.2;//should be 10 seconds
var codeExp=5;
var compileSpeed=0.1;//shoule be 0.5 seconds
var debugSpeed=1.0;//should be 10 seconds
var runSpeed=0.5;
var transTime=1000;//should be 5000
var statusSize=5;//5 lines of status
*/
var lastCompiledLines=0;
var bugs=0;
var debugged=false;
var runtimeErr=false;
var bugsSquashed=0;
var debugExp=4;
var compiled=false;
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
	//nocode
}
function printCode(){
	var line="ERROR"//error by default
	if(compiled)
		line="You have "+codeLine+" lines of COMPILED code, feel free to RUN code.";
	else if(bugs!=0)
		line="You have " + codeLine + " lines of code, with "+ bugs + " compilation errors." 
	else if(debugged)
		line="You have "+codeLine+" lines of DEBUGGED code, needs to be reCOMPILED.";
	
	else
		line="You have written " + codeLine + " lines of code.";
	document.getElementById("printCode").innerHTML = line;
}
function code() {
	console.log("CODE");
	disableButton();
	progressBarDown(codeSpeed,"Coding...");
	setTimeout(function(){
		status("You wrote one line of code!");
		if(!compileBtnIni){//initiate the compile button after first code
			setTimeout(function(){
				status("Maybe try compiling this code?");
				document.getElementById("compileBtn").style.visibility="visible";//enable compile button
				document.getElementById("compileBtn").disabled = false;//enable compile button
				document.getElementById("codeBtn").disabled = true;//disable code button
				compileBtnIni=true;
			},
			transTime);	
		}else{
			enableButton();
		}
		codeLine++;
		if(codeLine>=codeExp && (codeSpeed-0.2)>0){
			codeExp*=2;
			status("You seem to be getting this coding thing, your coding speed increased!");
			codeSpeed-=0.2;	
		}
		bugs=0;
		debugged=false;
		compiled=false;
		printCode();
	},
	codeSpeed*1000);
}
function compile(){
	console.log("COMPILE");
	if(compiled){
		status("code already compiled...");
	}else{
		disableButton();
		progressBarDown(compileSpeed*codeLine,"Compiling...");
		setTimeout(function(){
			status("You compiled your code!");
			if(!runBtnIni){//initiate the run button after first code
				setTimeout(function(){
					//document.getElementById("status").innerHTML = "Maybe try running this code?";
					status("Maybe try running this code?");
					document.getElementById("runBtn").style.visibility="visible";//enable compile button
					document.getElementById("runBtn").disabled = false;//enable compile button
					document.getElementById("codeBtn").disabled = true;//disable code button
					document.getElementById("compileBtn").disabled = true;//disable compile button
					runBtnIni=true;
					compiled=true;
					printCode();
				},
				transTime);	
			}else{
				if(bugs==0&&!debugged)
					bugs=Math.floor(Math.random()*(codeLine-lastCompiledLines)*lastCompiledLines*0.1);//refresh code not compiled
				else if(bugs==0&&debugged){
					var experienceMod=(50-bugsSquashed)/100;
					if(bugsSquashed>50)
						experienceMod=0.03;
					console.log("experienceMod = "+experienceMod);
					bugs=Math.floor(Math.random()*(codeLine-lastCompiledLines)*experienceMod);//debugged code, still may have bugs
					console.log("bugs:"+bugs);
					debugged=false;
				}
				if(bugs==0){
					compiled=true;
					lastCompiledLines=codeLine;
				}
				printCode();
				enableButton();
			}
		},
		compileSpeed*codeLine*1000);
	}
}
function run(){
	console.log("RUN");
	disableButton();
	progressBarDown(runSpeed*codeLine,"Running...");
	setTimeout(function(){
		status("Running code...");
		if(!debugBtnIni){//initiate the debug button after first code
			setTimeout(function(){
				document.getElementById("codeTermWin").style.visibility = "visible";//shows the terminal
				document.getElementById("codeTerminal").innerHTML = "Hallo Wurld!";
				status("Hmph... may needs some tweaking...");
				document.getElementById("debugBtn").style.visibility="visible";//enable debug button
				document.getElementById("debugBtn").disabled = false;//enable debug button
				document.getElementById("codeBtn").disabled = true;//disable code button
				document.getElementById("compileBtn").disabled = true;//disable compile button
				document.getElementById("runBtn").disabled = true;//disable run button
				debugBtnIni=true;
			},
			transTime);	
		}else{
			runCode(codeLine);
			printCode();
			enableButton();
		}
	},
	runSpeed*codeLine*1000);
}
function debug(){
	if(bugs>0||runtimeErr||!firstCodeIni){
	var debugTime= Math.random()*debugSpeed+debugSpeed;
	console.log("debugTime: " +debugTime);
	console.log("DEBUG");//debugging
	disableButton();
	progressBarDown(debugTime,"Debugging...");
	setTimeout(function(){
		if(!firstCodeIni){//initiate the debug button after first code
			setTimeout(function(){
				status("Some quick spell-checking...");
				document.getElementById("codeTerminal").innerHTML = "Hello World!";
				firstCodeIni=true;
				document.getElementById("debugBtn").disabled = false;//enable debug button
				document.getElementById("codeBtn").disabled = false;//enable code button
				document.getElementById("compileBtn").disabled = false;//enable compile button
				document.getElementById("runBtn").disabled = false;//enable run button
			},
			transTime);	
		}else{
			if(bugs>0){
			var debugChance=50+bugsSquashed;
			if((Math.random()*100+1)<=debugChance){
				var debugPower = Math.random()*100+1;
				if(debugPower<=5){
					status("No error removed...");
				}else if(debugPower<=15 && bugs>=3){
					bugs-=3;
					bugsSquashed+=3;
					status("Three errors removed...");
				}else if(debugPower<=30 && bugs>=2){
					bugs-=2;
					bugsSquashed+=2;
					status("Two errors removed...");
				}else{
					bugs-=1;
					bugsSquashed+=1;
					status("One error removed...");	
				}
			}else{
				status("No error removed...");	
			}
			if(bugs==0)
				debugged=true;
		}else if(runtimeErr){
			status("RUNTIME ERROR");//to be implemented	
		}
			printCode();
			enableButton();
			if(bugsSquashed>=debugExp && (debugSpeed-0.2)>0){
				debugExp*=2;
				status("You are faster at debugging your code now!");
				debugSpeed-=0.2;
			}
		}
	},
	debugTime*1000);
	}else{
		status("No error to be removed...");	
	}
}
function status(strStatus){
	var node=document.createElement("LI");
	var textnode=document.createTextNode(strStatus);
	node.appendChild(textnode);
	var list = document.getElementById("status");
	list.insertBefore(node,list.childNodes[0]);
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
function disableButton(){
	document.getElementById("debugBtn").disabled = true;//disable debug button
	document.getElementById("codeBtn").disabled = true;//disable code button
	document.getElementById("compileBtn").disabled = true;//disable compile button
	document.getElementById("runBtn").disabled = true;//disable run button
}
function enableButton(){
	document.getElementById("codeBtn").disabled = false;//enable code button
	document.getElementById("compileBtn").disabled = false;//enable compile button
	if(bugs==0 && compiled)
		document.getElementById("runBtn").disabled = false;//enable run button
	document.getElementById("debugBtn").disabled = false;//enable debug button
}
function progressBarDown(totalTime,operation){
	document.getElementById("progressbar").style.visibility="visible";//make the progressbar visible
	document.getElementById("progressbarStatus").style.visibility="visible";//make the progressbarStatus visible
	var countDown = totalTime;
	var countDowner = setInterval(function(){
		countDown-=0.1;
		document.getElementById("progressbarStatus").innerHTML = operation+"(" + countDown.toFixed(1) + ")";
		var progresspx=((countDown/totalTime)*100);
		document.getElementById("progressbar").style.width = progresspx+"%";
	},
	100);
	setTimeout(function(){
		clearInterval(countDowner);
		document.getElementById("progressbar").style.visibility="hidden";//hides the progressbar
		document.getElementById("progressbarStatus").style.visibility="hidden";//hides the progressbarstatus
	},
	totalTime*1000);
}
function runCode(lines){
	document.getElementById("codeTermWin").style.display="block";
	document.getElementById("codeTerminal").innerHTML = "running code for" + lines + " lines";
}


