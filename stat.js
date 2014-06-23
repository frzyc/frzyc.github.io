var stat = {
	gameTickCount:0,
	
	codeLine:0,
	programsWritten:0,
	money:0.00,
	bitCoin:0,
	codeSpeed:5,
	codeExp:5,
	compileSpeed:0.5,
	debugSpeed:5,
	runSpeed:0.5,
	
	lastCompiledLines:0,
	bugs:0,
	debugged:false,
	bugsSquashed:0,
	debugExp:4,
	compiled:false,
	
	name:"Player",
	gender:"male",
	titles:["Basement Dweller"],
	ini:false,
	skill:{
		game:0,
		software:0,
		web:0,
		userInterface:0,
		graphics:0	
	},
	computer:{
		computerCase:0,
		cpu:1,	
		storage:1,
		graphics:0,
		api:1,
		ram:1,
		keyboard:1
	},
	update: function(){
		//update values
		if(this.gender==="male")
			$("#statName").text(this.name+"(M)");
		else if(this.gender==="female")
			$("#statName").text(this.name+"(F)");
		if(this.titles.length>10){//manual title selecter, click on current title to change to a dropdown menu
			$("#statTitle").unbind().click(function(){//only allow it to be clicked once
				$(this).replaceWith($("<select id = 'titleSel' name='titles'></select>"));
				for(t in stat.titles){
					$("<option value="+stat.titles[t]+">"+stat.titles[t]+"</option>").appendTo("#titleSel");
				}
				$("#titleSel").change(function(event){//Click event on Select has occurred
					$("option:selected", $(this)).each(function(){
						var obj = document.getElementById('titleSel').value;
						$("#titleSel").replaceWith("<p id='statTitle' >"+obj+"</p>");
					});
          		});
			});
		}else
			$("#statTitle").text(this.titles[this.titles.length-1]);		
		$("#statMoney").text("Money: "+stat.money.toFixed(2));
		$("#statBitCoin").text("BitCoins: "+stat.bitCoin);
		if($("#skills li").length==0){
			for(s in stat.skill)
				$("<li id='skill"+s+"'>"+s+": "+stat.skill[s]+"</li>").hide().appendTo("#skills");
			console.log("skills list generated");
		}
		
		//show as values change		
		if(this.name!="Player" && $("#statName").is(":hidden")){
			$("#statName").fadeIn("Slow");
			$("#statTitle").fadeIn("Slow");
		}	
		if(this.money>0 && $("#statMoney").is(":hidden"))
			$("#statMoney").fadeIn("Slow");
		if(this.bitCoin>0 && $("#statBitCoin").is(":hidden"))
			$("#statBitCoin").fadeIn("Slow");
		if(!$( "#rightWin" ).hasClass("terminalWindow")&&($("#statName").is(":visible")||$("#statMoney").is(":visible")||$("#statBitCoin").is(":visible"))){
			$("#rightWin").fadeOut("fast", function(){
				$(this).addClass("terminalWindow").fadeIn("slow");
				$("#rightBar").addClass("taskBar");
				$("#statName").addClass("taskBarTitle");
				$("#rightTerminal").addClass("terminal");
			});	
		}	
		for(s in stat.skill){
			$("#skill"+s).text(s+": "+stat.skill[s]);
			if(stat.skill[s]>0 && $("#skill"+s).is(":hidden")){
				$("#skill"+s).fadeIn("slow");
				if($("#skillsBtn").is(":hidden")){
					$("#skillsBtn").fadeIn("slow");
					$("#skillsBtn").click(function(){
						$("#skills").toggle("slow");
					});
				}
			}
		}
	},
	addTitle:function(str){
		for(s in stat.titles){
			if(stat.titles[s]===str)
				return;	
		}
		stat.titles.push(str);
	}
	
};