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
		declineBtn:true,
		triggered:0,
		lastkey:0,
		keys:500,
		accept:function(){ 
			console.log("ACCEPT EVENT0");
			$("#event0Terminal").empty();
			$("<div><div class='progressBar' id='event0ProgressBar'></div><p class='progressbarStatus' id='event0ProgressBarStatus'>0%</p></div><label for='target'>Start mashing your keys:</label><input id='target' type='text'>").appendTo("#event0Terminal");
			var eve = this;
			$("#target").keydown(function(){
				$("#event0ProgressBar").show();
				if (event.which == 13)
					event.preventDefault();
				if(event.which != eve.lastkey)
					eve.triggered++	
				eve.lastkey = event.which;
				$("#event0ProgressBar").width(eve.triggered/eve.keys*400+"px");
				$("#event0ProgressBarStatus").text((eve.triggered/eve.keys*100).toFixed()+"%");
				if(eve.triggered==eve.keys){
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
		title:"Package delivery",
		description:"A slightly wet box covered in duct tape arrived at your door. The note: \"ah heard fum yer parents yo' been in thet basement makin' them programs doohikies, so gotcha one of them calculato' computers off a yardsale. Hope this done make up fo' a dozen o' so missed birthdates. --Yer uncle & cousin Billy Bob Jo'\"",
		risk:"Box cutters.",
		reward:"A less-crappy computer than you have right here, FREE UPGRADE! Also, a bag of loose change.",
		condition:function(){
			 return stat.codeLine>15;
		},
		chance:function(){ 
			return (Math.random()*100+1)<30;
		},
		accept:function(){ 
			console.log("ACCEPT EVENT1");
			$("#event1").remove();
			stat.computer.computerCase++;
			stat.money+=34.87;
			graphics(1);
		},
		declineBtn:false,
		active: false
	},
	event2:{
		title:"Gold farming simulator 2014",
		description:"Your experience with online video games and your brief introduction to coding have made you... not very desirable at all. But they want a program that exploits the game for gold and you are the one they asked for the task.",
		risk:"Future game patch that breaks your program, and potential banhammer--Say goodbye to your lvl 78 paladin.",
		reward:"10 bitcoins, 3% share of gold farmed, and some very infrequent donations on the game forums",
		penalty:"\"duude, you are such a noob...\"",
		declineBtn:true,
		condition:function(){
			 return stat.codeLine>16;
		},
		chance:function(){ 
			return (Math.random()*100+1)<(stat.codeLine*0.2);
		},
		accept:function(){ 
			console.log("ACCEPT EVENT2");
			$("#event1Terminal").empty();
			$("#event2Btnx").hide();
			$("<p id='event2Report'></p><br>").hide().appendTo("#event2Terminal").fadeIn(1000);
			$("<ul id='event2status'></ul>").hide().appendTo("#event2Terminal").fadeIn(2000);
			createProgressbar("event2").appendTo("#event2Terminal");
			$("<button class='codeBtns' id='event2Btn' type='button' >Program</button>").hide().appendTo("#event2Terminal").fadeIn(2000);
			
			stat.bitCoin+=10.0;
		},
		decline:function(){ 
			console.log("DECLINE EVENT2");
			stat.addTitle("Paladin Noob");
			active:true;
		},
		active: false
	},
	event3:{
		title:"Minimum Wage",
		description:"You can't do much in this society without money. Good thing they offer services where you exchange your time and efforts for cash",
		risk:"Existential Crisis",
		reward:"Maybe you can work up the corporate ladder...",
		penalty:"NONE",
		condition:function(){
			 return stat.codeLine>8;
		},
		chance:function(){ 
			return (Math.random()*100+1)<90;
		},
		declineBtn:false,
		totalClicks:0,
		jobClick:150,
		currentJobClick:0,
		accept:function(){ 
			console.log("ACCEPT EVENT2");
			$("#event3Terminal").empty();
			//$("<div><div class='progressBar' id='event3ProgressBar'></div><p class='progressbarStatus' id='event3ProgressBarStatus'>0%</p></div>").hide().appendTo("#event3Terminal").fadeIn(1000);
			$("<ul class='status' id='event3status'></ul>").hide().appendTo("#event3Terminal").fadeIn(2000);
			$("#event3status").height("75px");
			createProgressbar("event3").appendTo("#event3Terminal");
			$("#event3Progress").show(2000);
			$("<button class='codeBtns' id='event3Btn' type='button' >WORK!</button>").hide().appendTo("#event3Terminal").fadeIn(2000);
			var eve = this;
			$("#event3Btn").click(function(){
				$("#event3ProgressBar").show();
				eve.totalClicks++;
				var workPower = Math.random()*100+1+eve.totalClicks/100;
				console.log("WORKPOWER TYPE: "+ typeof workPower);
				if(workPower>=95)
					eve.currentJobClick+=4;
				else if(workPower>=75)
					eve.currentJobClick+=3;
				else if(workPower>=60)
					eve.currentJobClick+=2;
				else
					eve.currentJobClick+=1;
				if(eve.currentJobClick>=eve.jobClick){
					$("#event3Btn").attr("disabled",true);
					setTimeout(function(){
						$("#event3Btn").attr("disabled",false);
					},eve.jobClick*100);
					eve.currentJobClick=0;
					var cash = 50 + Math.random()*(eve.totalClicks/20);
					console.log("CASH TYPE: "+ typeof cash);
					if(eve.jobClick>50 && workPower>66){
						eve.jobClick--;
						status("$"+cash.toFixed(2)+" job seems a bit easier...",5,"event3status",10)
					}else
						status("$"+cash.toFixed(2)+"",0,"event3status",10);
					stat.money+=cash;
				}
				$("#event3ProgressBar").width(eve.currentJobClick/eve.jobClick*400+"px");
				$("#event3ProgressBarStatus").text((eve.currentJobClick/eve.jobClick*100).toFixed(1)+"%");
				console.log("KEYDOWN:"+event.which);	
			});
			
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