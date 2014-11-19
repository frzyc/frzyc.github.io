var runtimeErr=false;
var transTime=3000;//should be 3000
var statusSize=20;//lines of status to save

var eventsList=[];
var codeTermWin;
var compTermWin;

var codeIni=false;//initiation bool

$(document).ready(function(){
	testingTime();//testing only
	runProgramIndex(5); //testing only
	runEventIndex(1); //testing only
	setInterval(function(){
		if(codeIni)
			gameTick();
	},
	100);
	if(loadGame()){
		graphics();
	}else{
		$(".status").css("border-bottom","1px solid white");
		$(".progress").css({"border":"1px solid white"});
		setTimeout(function(){
			$("#printCode").text("...Maybe write some code?");
		},
		transTime);
		setTimeout(function(){
			status("Comon, just try it..."); 
			$("#codeBtn").fadeIn("slow");
		},
		transTime*2);
	}
});
function gameTick(){
	stat.gameTickCount++;
	if(stat.gameTickCount%10==0)
		gameTickSec();
	if(stat.gameTickCount%100==0)
		gameTick10Sec();
}
function gameTickSec(){//triggers every 10 ticks= 1 second
	console.log("1s");
	for(var eve in events){//going through events to trigger them
		if(events[eve].active||!events[eve].condition()||!events[eve].chance())//check against active bool, event pre-conditions, and pass the pass the chance evaluation
			continue;
		status("Event: "+events[eve].title,5);//status alert
		var newTermWin = new TermWin(eve,events[eve].title);
		eventsList.push(newTermWin);
		events[eve].active=true;
		newTermWin.create("#events");
		newTermWin.hideCloseBtn();
		newTermWin.eventContent(eve);
	}
	stat.update();
	//$("*").eq(Math.floor(Math.random()*($("*").length))).rotate(Math.random()*360-180);//random rotation test
}
function gameTick10Sec(){//triggers every 100 ticks= 10 second
	console.log("10s");
	
	if(computer.computerCase>=0 && !$("#compWin").length){//generates the computer terminal
		console.log("GENERATE COMP WINDOW");
		compTermWin = new TermWin("compWin","Computer");
		compTermWin.hideCloseBtn();	
		compTermWin.create("#right");
		$("#compWin").appendTo("#right");
		computer.start();
	}
	//save();
	
	if(computer.graphics==0){
		graphic0();	
	}else if(computer.graphics==1){
		graphic1();	
	}else if(computer.graphics==2){
		graphic2();	
	}else if(computer.graphics==3){
		graphic3();	
	}
	
}
function status(strStatus, importance,id,size){
	if(!id)
		id="codeStatus";
	if(!size)
		size = statusSize;
	var list = document.getElementById(id);
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
		$("<li>"+strStatus+"</li>").css("color","rgb("+importance*51+",0,0)").prependTo("#"+id);
		
		if($("#"+id+" li:nth-child("+(size+1)+")")){
			$("#"+id+" li:nth-child("+(size+1)+")").remove();
		}
		for(var i =0, grad=1; i<size;i++,grad-=0.8/size){
			if(grad<0)
				grad=0;
			if($("#"+id+" li:nth-child("+i+")"))
				$("#"+id+" li:nth-child("+i+")").css({opacity:grad});
		}
	}
	if(!codeIni)//white out the first few status
		$(".status li").css({"border-bottom":"0px"});	
}
function runCode(){
	var programLineIndex=-1;
	for(var i=0;i<programs.programLineList.length;i++){
		if(stat.codeLine>=programs.programLineList[i]){
			programLineIndex = programs.programLineList[i];
			stat.programsWritten=i+1;
		}
		else
			break;
	}//once break out of the loop, the program would be the one the code can run
	if(codeTermWin){
		closeTerm(codeTermWin.id);
		delete codeTermWin;	
	}//close the old program first
	console.log("running program index:"+programLineIndex);
	console.log("running program:"+programs.programz["p"+programLineIndex].title);
	codeTermWin= new TermWin("code",programs.programz["p"+programLineIndex].title);
	codeTermWin.create("#codeProgram");
	programs.programz["p"+programLineIndex].elements();
	status("Running code...");
}
function runProgramIndex(programIndex){//used for testing only
	var pline = programs.programLineList[programIndex];
	codeTermWin= new TermWin("code",programs.programz["p"+pline].title);
	codeTermWin.create("#codeProgram");
	programs.programz["p"+pline].elements();
	status("Running code...");
}
function runEventIndex(eventid){//testing only
	var eventname = "event"+eventid;
	status("Event: "+events[eventname].title,5);//status alert
	var newTermWin = new TermWin(eventname,events[eventname].title);
	eventsList.push(newTermWin);
	events[eventname].active=true;
	newTermWin.create("#events");
	newTermWin.hideCloseBtn();
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
jQuery.fn.rotate = function(degrees) {//this defines a jquery function, so that you can use it like jquery functions
	console.log("ROTATE: "+degrees);
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)', /* Safari and Chrome */
                 '-moz-transform' : 'rotate('+ degrees +'deg)', /* Firefox */
                 '-o-transform' : 'rotate('+ degrees +'deg)', /* Opera */
				 '-ms-transform' : 'rotate('+ degrees +'deg)', /* IE 9 */
                 'transform' : 'rotate('+ degrees +'deg)'});
};
/* code example for rotate
var rotation = 0;
$('.rotate').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
});
*/

/*
$('#printCode').bind('DOMMouseScroll mousewheel', function(e){
	if(e.originalEvent.wheelDelta /120 > 0) {
		$(this).text('scrolling up !');
	}
	else{
		$(this).text('scrolling down !');
	}
});
*/



