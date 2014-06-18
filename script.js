var lastCompiledLines=0;
var bugs=0;
var debugged=false;
var runtimeErr=false;
var bugsSquashed=0;
var debugExp=4;
var compiled=false;

var transTime=3000;//should be 3000
var statusSize=20;//lines of status to save


var eventsList=[];
var codeTermWin;
//initiation bools
var compileBtnIni=false;//bool to initiate the button at beginning
var runBtnIni=false;//bool to initiate the button at beginning
var debugBtnIni=false;//bool to initiate the button at beginning
var firstCodeIni=false;//bool to go through the first code

$(document).ready(function(){
	//testingTime();//testing only
	//runCodeIndex(2); //testing only
	//runEventIndex(0); //testing only
	setInterval(function(){
		gameTick();
	},
	100);
	setTimeout(function(){
		document.getElementById("printCode").innerHTML = "...Maybe write some code?";
	},
	transTime);//should be 5000
	setTimeout(function(){
		status("Comon, just try it..."); 
		$("#codeBtn").fadeIn("slow");
		
	},
	transTime*2);//should be 10000
});
var gameTickCount=0;
function gameTick(){
	gameTickCount++;
	if(gameTickCount%10==0)
		gameTickSec();
	if(gameTickCount%100==0){
		gameTick10Sec();
		gameTickCount=0
	}
}
function gameTickSec(){//triggers ever 10 ticks= 1 second

	for(var eve in events){//going through events to trigger them
		if(events[eve].active||!events[eve].condition()||!events[eve].chance())//check against active bool, event pre-conditions, and pass the pass the chance evaluation
			continue;
		status("Event: "+events[eve].title,5);//status alert
		var newTermWin = new TermWin(eve,eve+"TaskBar",eve+"TaskBarTitle",events[eve].title,eve+"Btn_",eve+"Btnx",eve+"Terminal");
		eventsList.push(newTermWin);
		events[eve].active=true;
		newTermWin.create("#events");
		newTermWin.eventContent(eve);
	}
	stat.update();
}
function gameTick10Sec(){//triggers ever 10 ticks= 1 second
	console.log("SAVEEEEEEEE");
	if(compileBtnIni && runBtnIni && debugBtnIni && firstCodeIni){
		//save();
	}
}
function printCode(){
	var line="ERROR";//error by default
	var tit="ERROR";
	if(compiled){
		line="You have "+stat.codeLine+" lines of COMPILED code.";
		tit="Feel free to RUN code!";
	}else if(bugs!=0){
		line="You have " + stat.codeLine + " lines of code, with "+ bugs + " compilation errors.";
		tit="DEBUG to squash bugs!";
	}else if(debugged){
		line="You have "+stat.codeLine+" lines of DEBUGGED code.";
		tit="Needs to be reCOMPILED.";
	}else{
		line="You have written " + stat.codeLine + " lines of code.";
		tit="Write more code or compile for errors.";
	}
	$("#printCode").text(line);
	$("#printCode").attr("title",tit);
}
function code() {
	console.log("CODE");
	disableButton();
	progressBarDown(stat.codeSpeed,"Coding...","codeProgressBar","codeProgressBarStatus");
	setTimeout(function(){
		status("You wrote one line of code!");
		stat.codeLine++;
		if(!compileBtnIni){//initiate the compile button after first code
			setTimeout(function(){
				status("Maybe try compiling this code?");
				$("#compileBtn").fadeIn("slow");
				document.getElementById("compileBtn").disabled = false;//enable compile button
				document.getElementById("codeBtn").disabled = true;//disable code button
				compileBtnIni=true;
				printCode();
			},
			transTime);
			return;	
		}
		if(stat.codeLine>=stat.codeExp){
			stat.codeExp*=2;
			status("You seem to be getting this coding thing, your coding speed increased!",3);
			if((stat.codeSpeed-0.2)>=0.2)
				stat.codeSpeed-=0.2;	
		}
		bugs=0;
		debugged=false;
		compiled=false;
		if(stat.codeLine>=programs.programLineList[stat.programsWritten])
			status("Your wrote enough lines for a new program!",5);
		printCode();
		enableButton();
	},
	stat.codeSpeed*1000);
}
function compile(){
	console.log("COMPILE");
	disableButton();
	progressBarDown(stat.compileSpeed*stat.codeLine,"Compiling...","codeProgressBar","codeProgressBarStatus");
	setTimeout(function(){
		status("You compiled your code!");
		if(!runBtnIni){//initiate the run button after first code
			setTimeout(function(){
				//document.getElementById("status").innerHTML = "Maybe try running this code?";
				status("Maybe try running this code?");
				$("#runBtn").fadeIn("slow");
				document.getElementById("runBtn").disabled = false;//enable compile button
				document.getElementById("codeBtn").disabled = true;//disable code button
				document.getElementById("compileBtn").disabled = true;//disable compile button
				runBtnIni=true;
				compiled=true;
				printCode();
			},
			transTime);	
			return;
		}
		if(bugs==0&&!debugged){
			var dbugs=Math.random()*(stat.codeLine-lastCompiledLines*0.9);
			bugs=Math.floor(dbugs);//refresh code not compiled
			console.log("compiler dbugs:"+dbugs);
		}
		else if(bugs==0&&debugged){
			var experienceMod=(85-bugsSquashed*0.2)/100;
			if(bugsSquashed>(80*5))
				experienceMod=0.03;
			console.log("experienceMod:"+experienceMod);
			var ddbugs =Math.random()*stat.codeLine*0.1*experienceMod;
			bugs=Math.floor(ddbugs);//debugged code, still may have bugs\
			console.log("recompile ddbugs:"+ddbugs);
			console.log("bugs:"+bugs);
			debugged=false;
		}
		if(bugs==0){
			compiled=true;
			lastCompiledLines=stat.codeLine;
		}
		printCode();
		enableButton();
	},
	stat.compileSpeed*stat.codeLine*1000);
}
function run(){
	console.log("RUN");
	disableButton();
	progressBarDown(stat.runSpeed*stat.codeLine,"Running...","codeProgressBar","codeProgressBarStatus");
	setTimeout(function(){
		if(!debugBtnIni){//initiate the debug button after first code
			setTimeout(function(){
				stat.programsWritten++;
				runCode();
				codeTermWin.hideCloseBtn();
				status("Hmph... may needs some tweaking...");
				$("#debugBtn").fadeIn("slow");
				document.getElementById("debugBtn").disabled = false;//enable debug button
				document.getElementById("codeBtn").disabled = true;//disable code button
				document.getElementById("compileBtn").disabled = true;//disable compile button
				document.getElementById("runBtn").disabled = true;//disable run button
				debugBtnIni=true;
			},
			transTime);	
		}else{
			stat.programsWritten++;
			runCode();
			printCode();
			enableButton();
		}
	},
	stat.runSpeed*stat.codeLine*1000);
}
function debug(){
	var debugTime= Math.random()*stat.debugSpeed+stat.debugSpeed;
	console.log("debugTime: " +debugTime);
	console.log("DEBUG");//debugging
	disableButton();
	progressBarDown(debugTime,"Debugging...","codeProgressBar","codeProgressBarStatus");
	setTimeout(function(){
		if(!firstCodeIni){//initiate the debug button after first code
			setTimeout(function(){
				status("Some quick spell-checking...");
				$("#codeTerminal").text("Hello, World!");
				codeTermWin.showCloseBtn();
				firstCodeIni=true;
				document.getElementById("codeBtn").disabled = false;//enable code button
			},
			transTime);	
		}else if(runtimeErr){
				status("RUNTIME ERROR");//to be implemented	
		}else{
			var debugChance=50+bugsSquashed;
			if((Math.random()*100+1)<=debugChance){
				var debugPower = Math.random()*100+1;
				if(debugPower<=5){
					status("No error removed...");
				}else if(debugPower<=15 && bugs>=3){
					bugs-=3;
					bugsSquashed+=3;
					status("Three errors removed...",3);
				}else if(debugPower<=30 && bugs>=2){
					bugs-=2;
					bugsSquashed+=2;
					status("Two errors removed...",2);
				}else{
					bugs-=1;
					bugsSquashed+=1;
					status("One error removed...",1);	
				}
			}else{
				status("No error removed...");	
			}
			if(bugs==0)
				debugged=true;
			if(bugsSquashed>=debugExp){
				debugExp*=2;
				status("You are faster at debugging your code now!",4);
				if((stat.debugSpeed-0.2)>=0.2)
					stat.debugSpeed-=0.2;
			}
			printCode();
			enableButton();
		}
	},
	debugTime*1000);
}
function status(strStatus, importance){
	var list = document.getElementById("status");
	if(list.firstChild && list.firstChild.innerHTML.search(strStatus)!=-1){
		if(list.firstChild.innerHTML==strStatus){
			list.firstChild.innerHTML = strStatus+"(x2)";
		}else{
			var repeats = list.firstChild.innerHTML.match(/(x\d+)/);
			console.log("status repeat:"+repeats[0]);
			var rep = repeats[0].match(/\d+/);
			console.log("status rep:"+rep[0]);
			var repnum = parseInt(rep[0]);
			list.firstChild.innerHTML = strStatus+"(x"+(repnum+1)+")";
		}
	}else{
		if(!importance)
			importance=0;
		$("<li>"+strStatus+"</li>").css("color","rgb("+importance*51+",0,0)").prependTo("#status");
		
		if($("#status li:nth-child("+(statusSize+1)+")")){
			$("#status li:nth-child("+(statusSize+1)+")").remove();
		}
		for(var i =0, grad=1; i<statusSize;i++,grad-=0.8/statusSize){
			if(grad<0)
				grad=0;
			if($("#status li:nth-child("+i+")"))
				$("#status li:nth-child("+i+")").css({opacity:grad});
		}
	}
}
function disableButton(){
	document.getElementById("debugBtn").disabled = true;//disable debug button
	document.getElementById("codeBtn").disabled = true;//disable code button
	document.getElementById("compileBtn").disabled = true;//disable compile button
	document.getElementById("runBtn").disabled = true;//disable run button
}
function enableButton(){
	if(!(stat.codeLine>=programs.programLineList[stat.programsWritten])){
		document.getElementById("codeBtn").disabled = false;//enable code button
	}
	if(!compiled&&bugs==0)
		document.getElementById("compileBtn").disabled = false;//enable compile button
	if(bugs>0||runtimeErr||!firstCodeIni)
		document.getElementById("debugBtn").disabled = false;//enable debug button
	if(bugs==0 && compiled)
		document.getElementById("runBtn").disabled = false;//enable run button
}
function progressBarDown(totalTime,operation,barId,statusId){
	$("#"+barId).css('width','400px');
	$("#"+barId).show();
	document.getElementById(statusId).style.visibility="visible";//make the progressbarStatus visible
	var countDown = totalTime;
	$("#"+barId).animate({width:'0px'},totalTime*1000-1);
	var countDowner = setInterval(function(){
		countDown-=0.02;
		document.getElementById(statusId).innerHTML = operation+"(" + countDown.toFixed(2) + ")";
	},20);
	setTimeout(function(){
		clearInterval(countDowner);
		$("#"+barId).hide();
		document.getElementById(statusId).style.visibility="hidden";//hides the progressbarstatus
	},totalTime*1000);
}
function runCode(){
	var programLineIndex=-1;
	for(var ind in programs.programLineList){
		if(stat.codeLine>=programs.programLineList[ind])
			programLineIndex = programs.programLineList[ind];
		else
			break;
	}//once break out of the loop, the program would be the one the code can run
	if(codeTermWin){
		closeTerm(codeTermWin.id);
		delete codeTermWin;	
	}//close the old program first
	console.log("running program index:"+programLineIndex);
	console.log("running program:"+programs.programz["p"+programLineIndex].title);
	codeTermWin= new TermWin("codeTermWin","codeTaskBar","codeTaskBarTitle",programs.programz["p"+programLineIndex].title,"codeBtn_","codeBtnx","codeTerminal");
	codeTermWin.create("#codeProgram");
	programs.programz["p"+programLineIndex].elements();
	status("Running code...");
}
function runCodeIndex(programIndex){//used for testing only
	var pline = programs.programLineList[programIndex];
	codeTermWin= new TermWin("codeTermWin","codeTaskBar","codeTaskBarTitle",programs.programz["p"+pline].title,"codeBtn_","codeBtnx","codeTerminal");
	codeTermWin.create("#codeProgram");
	programs.programz["p"+pline].elements();
	status("Running code...");
}
function runEventIndex(eventid){//testing only
	var eventname = "event"+eventid;
	status("Event: "+events[eventname].title,5);//status alert
	var newTermWin = new TermWin(eventname,eventname+"TaskBar",eventname+"TaskBarTitle",events[eventname].title,eventname+"Btn_",eventname+"Btnx",eventname+"Terminal");
	eventsList.push(newTermWin);
	events[eventname].active=true;
	newTermWin.create("#events");
	newTermWin.eventContent(eventname);
	stat.update();
}
function testingTime(){
	stat.codeLine=0;
	stat.programsWritten=0;
	stat.money=0.0;
	stat.bitCoin=0;
	stat.codeSpeed=0.2;
	stat.codeExp=5;
	stat.compileSpeed=0.1;
	stat.debugSpeed=0.1;
	stat.runSpeed=0.1;
	transTime=100;
	
	
}




