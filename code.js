function printCode(){
	var line="ERROR";//error by default
	var tit="ERROR";
	if(stat.compiled){
		line=stat.codeLine+" lines of COMPILED code.";
		tit="Feel free to RUN code!";
	}else if(stat.bugs!=0){
		line=stat.codeLine + " lines, with "+ stat.bugs + " errors.";
		tit="DEBUG to squash bugs!";
	}else if(stat.debugged){
		line=stat.codeLine+" lines of DEBUGGED code.";
		tit="Needs to be reCOMPILED.";
	}else{
		line=stat.codeLine + " written lines of code.";
		tit="Write more code or compile for errors.";
	}
	$("#printCode").text(line);
	$("#printCode").attr("title",tit);
}
function code() {
	console.log("CODE");
	disableButton();
	progressBarDown(stat.codeSpeed,"Coding...","code");
	setTimeout(function(){
		status("You wrote one line of code!");
		stat.codeLine++;
		if(!codeIni){//initiate the compile button after first code
			setTimeout(function(){
				status("Maybe try compiling this code?");
				$("#compileBtn").fadeIn("slow");
				$("#compileBtn").attr("disabled",false);//enable compile button
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
		stat.bugs=0;
		stat.debugged=false;
		stat.compiled=false;
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
	progressBarDown(stat.compileSpeed*stat.codeLine,"Compiling...","code");
	setTimeout(function(){
		status("You compiled your code!");
		if(!codeIni){//initiate the run button after first code
			setTimeout(function(){
				status("Maybe try running this code?");
				$("#runBtn").fadeIn("slow");
				$("#runBtn").attr("disabled",false);//enable compile button
				stat.compiled=true;
				printCode();
			},
			transTime);	
			return;
		}
		if(stat.bugs==0&&!stat.debugged){
			var dbugs=Math.random()*(stat.codeLine-stat.lastCompiledLines*0.9);
			stat.bugs=Math.floor(dbugs);//refresh code not compiled
			console.log("compiler dbugs:"+dbugs);
		}
		else if(stat.bugs==0&&stat.debugged){
			var experienceMod=(85-stat.bugsSquashed*0.2)/100;
			if(stat.bugsSquashed>(80*5))
				experienceMod=0.03;
			console.log("experienceMod:"+experienceMod);
			var ddbugs =Math.random()*stat.codeLine*0.1*experienceMod;
			stat.bugs=Math.floor(ddbugs);//debugged code, still may have bugs\
			console.log("recompile ddbugs:"+ddbugs);
			console.log("bugs:"+stat.bugs);
			stat.debugged=false;
		}
		if(stat.bugs==0){
			stat.compiled=true;
			stat.lastCompiledLines=stat.codeLine;
		}
		printCode();
		enableButton();
	},
	stat.compileSpeed*stat.codeLine*1000);
}
function run(){
	console.log("RUN");
	disableButton();
	progressBarDown(stat.runSpeed*stat.codeLine,"Running...","code");
	setTimeout(function(){
		if(!codeIni){//initiate the debug button after first code
			setTimeout(function(){
				runCode();
				codeTermWin.hideCloseBtn();
				codeTermWin.hideMaxBtn();
				status("Hmph... may needs some tweaking...");
				$("#debugBtn").fadeIn("slow");
				$("#debugBtn").attr("disabled",false);//enable debug button
			},
			transTime);	
			return;
		}
		stat.programsWritten++;
		runCode();
		printCode();
		enableButton();
	},
	stat.runSpeed*stat.codeLine*1000);
}
function debug(){
	var debugTime= Math.random()*stat.debugSpeed+stat.debugSpeed;
	console.log("debugTime: " +debugTime);
	console.log("DEBUG");//debugging
	disableButton();
	progressBarDown(debugTime,"Debugging...","code");
	setTimeout(function(){
		if(!codeIni){//initiate the debug button after first code
			setTimeout(function(){
				status("Some quick spell-checking...");
				$("#codeTerminal").text("Hello, World!");
				codeTermWin.showCloseBtn();
				codeIni=true;
				$("#codeBtn").attr("disabled",false);//enable code butto
				graphics(0);              	
			},
			transTime);	
			return;
		}
		if(runtimeErr){
			status("RUNTIME ERROR");//to be implemented	
			return;
		}
		var debugChance=50+Math.sqrt(stat.bugsSquashed);
		if((Math.random()*100+1)<=debugChance){
			var debugPower = Math.random()*100+1;
			if(debugPower<=5){
				status("No error removed...");
			}else if(debugPower<=15 && stat.bugs>=3){
				stat.bugs-=3;
				stat.bugsSquashed+=3;
				status("Three errors removed...",3);
			}else if(debugPower<=30 && stat.bugs>=2){
				stat.bugs-=2;
				stat.bugsSquashed+=2;
				status("Two errors removed...",2);
			}else{
				stat.bugs-=1;
				stat.bugsSquashed+=1;
				status("One error removed...",1);	
			}
		}else{
			status("No error removed...");	
		}
		if(stat.bugs==0)
			stat.debugged=true;
		if(stat.bugsSquashed>=stat.debugExp){
			stat.debugExp*=2;
			status("You are faster at debugging your code now!",4);
			if((stat.debugSpeed-0.2)>=0.2)
				stat.debugSpeed-=0.2;
		}
		printCode();
		enableButton();
	},
	debugTime*1000);
}
function disableButton(){
	$("#debugBtn").attr("disabled",true);//disable debug button
	$("#codeBtn").attr("disabled",true);//disable code button
	$("#compileBtn").attr("disabled",true);//disable compile button
	$("#runBtn").attr("disabled",true);//disable run button
}
function enableButton(){
	if(!(stat.codeLine>=programs.programLineList[stat.programsWritten])){
		$("#codeBtn").attr("disabled",false);//enable code button
	}
	if(!stat.compiled&&stat.bugs==0)
		$("#compileBtn").attr("disabled",false);//enable compile button
	if(stat.bugs>0||runtimeErr||!codeIni)
		$("#debugBtn").attr("disabled",false);//enable debug button
	if(stat.bugs==0 && stat.compiled)
		$("#runBtn").attr("disabled",false);//enable run button
}