var events = {
	event0:{
		title:"Momma's little helper",
		description:"Living in your parent's basement makes you very easy to be interrupted by your loved ones. Your mother needs your help typing up her new novel.",
		risk:"None.",
		reward:"$15 and a cupcake",
		penalty:"Passive-aggressively reminded that you should probably have moved out by now...",
		condition:function(){
			 return stat.codeLine>5;
		},
		chance:function(){ 
			if(!available)
				return false;
			return (Math.random()*100+1)<5;
		},
		declineBtn:true,
		triggered:0,
		lastkey:0,
		keys:500,
		accept:function(){ 
			console.log("ACCEPT EVENT0");
			var THIS = this;
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
					$("#event0Terminal").empty();
					$("<p>Nice mashing! Here's your cupcake, and $25</p>").appendTo("#event0Terminal");
					$('<button/>', {
						type: 'button',
						'class': 'codeBtns',
						id: 'event0Collect',
						text: 'Collect',
						click: function() {
							THIS.active=false;
							THIS.available=false;//not repeatable
							stat.money+=15.0;
							//ADD CUPCAKES HERE
							stat.addTitle("Mama's Boy");
							$("#event0").remove();
						}
					}).appendTo("#event0Terminal").fadeIn("slow");	
				}
				console.log("KEYDOWN:"+event.which);	
			});
			
		},
		decline:function(){ 
			console.log("DECLINE EVENT0");
		},
		active: false,
		available: true
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
			if(!available)
				return false;
			return (Math.random()*100+1)<20;
		},
		accept:function(){ 
			console.log("ACCEPT EVENT1");
			$("#event1").remove();
			stat.computer.computerCase++;
			stat.money+=1.87;
			graphics(1);
			this.available=false;//not repeatable
			this.active=false;
		},
		declineBtn:false,
		active: false,
		available: true
	},
	event2:{
		title:"Gold farming simulator 2014",
		description:"Your experience with online video games and your brief introduction to coding have made you... not very desirable at all. But they want a program that exploits the game for gold and you are the one they asked for the task.",
		risk:"Future game patch that breaks your program, and potential banhammer--Say goodbye to your lvl 78 paladin.",
		reward:"10 bitcoins, 3% share of gold farmed, and some very infrequent donations on the game forums",
		penalty:"\"duude, you are such a noob...\"",
		declineBtn:true,
		condition:function(){
			 return stat.codeLine>50;
		},
		chance:function(){
			if(!available)
				return false; 
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
			//NOT FINISHED
			stat.bitCoin+=10.0;
		},
		decline:function(){ 
			console.log("DECLINE EVENT2");
			stat.addTitle("Paladin Noob");
			active:true;
		},
		active: false,
		available: true
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
			console.log("ACCEPT EVENT3");
			$("#event3Terminal").empty();
			$("<ul class='status' id='event3status'></ul>").hide().appendTo("#event3Terminal").fadeIn(2000);
			$("#event3status").height("75px");
			createProgressbar("event3").appendTo("#event3Terminal");
			$("#event3Progress").show(2000);
			$("<button class='codeBtns' id='event3Btn' type='button' >WORK!</button>").hide().appendTo("#event3Terminal").fadeIn(2000);
			$("<p id='event3checkboxTitle'>AutoClicker:</p> <input id='event3checkbox' type='checkbox'>").hide().appendTo("#event3Terminal");
			var THIS = this;
			$("#event3Btn").click(function(){
				$("#event3ProgressBar").show();
				THIS.totalClicks++;
				var workPower = Math.random()*100+1+THIS.totalClicks/100;
				console.log("WORKPOWER TYPE: "+ typeof workPower);
				if(workPower>=95)
					THIS.currentJobClick+=4;
				else if(workPower>=75)
					THIS.currentJobClick+=3;
				else if(workPower>=60)
					THIS.currentJobClick+=2;
				else
					THIS.currentJobClick+=1;
				if(THIS.currentJobClick>=THIS.jobClick){
					$("#event3Btn").attr("disabled",true);
					setTimeout(function(){
						$("#event3Btn").attr("disabled",false);
					},THIS.jobClick*100);
					THIS.currentJobClick=0;
					var cash = 10 + Math.random()*(THIS.totalClicks/20);
					console.log("CASH TYPE: "+ typeof cash);
					if(THIS.jobClick>50 && workPower>66){
						THIS.jobClick--;
						status("$"+cash.toFixed(2)+" job seems a bit easier...",3,"event3status",10)
					}else if(THIS.jobClick<=50 && $("#event3checkbox").is(":hidden")){
						status("Your job could be MUCH easier...",5,"event3status",10)
						$("#event3checkbox").fadeIn("slow");
						$("#event3checkboxTitle").fadeIn("slow");
					}else
						status("$"+cash.toFixed(2)+"",0,"event3status",10);
					stat.money+=cash;
				}
				$("#event3ProgressBar").width(THIS.currentJobClick/THIS.jobClick*400+"px");
				$("#event3ProgressBarStatus").text((THIS.currentJobClick/THIS.jobClick*100).toFixed(1)+"%");
				console.log("KEYDOWN:"+event.which);	
			});
			$("#event3checkbox").click(function(){
				if(document.getElementById("event3checkbox").checked == true)
					var event3auto = setInterval(function(){
						if(!$("#event3Btn").is(":disabled"))
							$("#event3Btn").click();
					},400);	
				if(document.getElementById("event3checkbox").checked == false)
					clearInterval(event3auto);
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
		active: false, //true if it is currently active, 
		available: true //true if event can activate, for repeatables
	}*/
};