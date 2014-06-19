var events = {
	event0:{
		title:"Momma's little helper",
		description:"Living in your parent's basement makes you very easy to be interrupted by your loved ones. Your mother needs your help typing up her new novel.",
		risk:"None.",
		reward:"$50 and a cupcake",
		penalty:"Passive-aggressively reminded that you should probably have moved out by now...",
		condition:function(){
			 return stat.codeLine>5;
		},
		chance:function(){ 
			return (Math.random()*100+1)<10;
		},
		accept:function(){ 
			console.log("ACCEPT EVENT0");
			$("#event0Terminal").empty();
			$("<div><div class='progressBar' id='eventProgressBar'></div><p class='progressbarStatus' id='eventProgressBarStatus'>0%</p></div><form><label for='target'>Start mashing your keys:</label><input id='target' type='text'></form>").appendTo("#event0Terminal");
			var triggered=0;
			var lastkey=0;
			var keys=500;
			$("#target").keydown(function(){
					$("#eventProgressBar").show();
					if (event.which == 13)
						event.preventDefault();
					if(event.which != lastkey)
						triggered++	
					lastkey = event.which;
					$("#eventProgressBar").width(triggered/keys*400+"px");
					$("#eventProgressBarStatus").text((triggered/keys*100).toFixed()+"%");
					if(triggered==keys){
						events.event0.end();	
					}
					console.log("KEYDOWN:"+event.which);	
				});
			
		},
		decline:function(){ 
			console.log("DECLINE EVENT0");
		},
		end:function(){
			$("#event0Terminal").empty();
			$("<p>Nice mashing! Here's your cupcake, and $50</p>").appendTo("#event0Terminal");
			$('<button/>', {
				type: 'button',
				'class': 'codeBtns',
				id: 'event0Collect',
				text: 'Collect',
				click: function() {
					closeTerm("event0");
					stat.money+=50.0;
					//ADD CUPCAKES HERE
					stat.addTitle("Mama's Boy");
					$(this).hide();
				}
			}).appendTo("#event0Terminal").fadeIn("slow");
		},
		active: false
	},
	event1:{
		title:"Gold farming simulator 2014",
		description:"Your experience with online video games and your brief introduction to coding have made you... not very desirable at all. But they want a program that exploits the game for gold and you are the one they asked for.",
		risk:"Future game patch that breaks your program, and potential banhammer--Say goodbye to your lvl 78 paladin.",
		reward:"10 bitcoins, 3% share of gold farmed, and some very infrequent donations on the game forums",
		penalty:"\"duude, you are such a noob...\"",
		condition:function(){
			 return stat.codeLine>16;
		},
		chance:function(){ 
			return (Math.random()*100+1)<(stat.codeLine*0.3);
		},
		accept:function(){ 
			console.log("ACCEPT EVENT1");
			$("#event1Terminal").empty();
			$("#event1Btnx").hide();
			$("<p id='event1Report'></p><br>").hide().appendTo("#event1Terminal").fadeIn(1000);
			$("<ul id='event1status'></ul>").hide().appendTo("#event1Terminal").fadeIn(2000);
			createProgressbar("event0").appendTo("#event1Terminal");
			$("<button class='codeBtns' id='event0Btn' type='button' >Program</button>").hide().appendTo("#event1Terminal").fadeIn(2000);
			
			stat.bitCoin+=10.0;
		},
		decline:function(){ 
			console.log("DECLINE EVENT1");
			stat.addTitle("Paladin Noob");
			active:true;
		},
		active: false
	}
	/*
	event[NUMBER]:{
		title:"Event title",
		description:"Story for the event",
		risk:"Consequences for the event",
		reward:"Reward for accepting",
		penalty:"Penalty for declinging",
		condition:function(){
			 return boolPreconditionForEvent;
		},
		chance:function(){ 
			return boolCalculateOccurance;
		},
		accept:function(){ 
			//accept
		},
		decline:function(){ 
			//decline
		},
		active: false//true if it is currently active, or have been actived. set it to off if its a reoccuring event
	}*/
};