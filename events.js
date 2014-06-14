var events = {
	event0:{
		title:"Momma's little helper",
		description:"Living in your parent's basement makes you very easy to be interrupted by your loved ones. Your mother needs your help typing up her new novel.",
		risk:"None... you can't possibly fail this... can you?",
		reward:"$50 and a plate of sloppy spaghetti",
		penalty:"Passive-aggressively reminded that you should probably have moved out by now...",
		condition:function(){
			 return stat.codeLine>3;
		},
		chance:function(){ 
			return (Math.random()*100+1)<40;
		},
		accept:function(){ 
			console.log("ACCEPT EVENT");
			money+=50.0;
		},
		decline:function(){ 
			console.log("DECLINE EVENT");
		},
		active: false//true if it is currently active, or have been actived
	},
	event1:{
		title:"Gold farming simulator 2014",
		description:"Your experience with online video games and your brief introduction to coding have made you... not very desirable at all. But it is nice to see those skills used \"productively\"",
		risk:"Future game patch that breaks your program, and potential banhammer--Say goodbye to your lvl 78 paladin.",
		reward:"10 bitcoins, 3% share of gold farmed, and some very rare donations on the game forums",
		penalty:"\"duude, you are such a noob...\"",
		condition:function(){
			 return stat.codeLine>16;
		},
		chance:function(){ 
			return (Math.random()*100+1)<(10+stat.codeLine*0.5);
		},
		accept:function(){ 
			console.log("ACCEPT EVENT");
		},
		decline:function(){ 
			console.log("DECLINE EVENT");
		},
		active: false//true if it is currently active, or have been actived
	}
};