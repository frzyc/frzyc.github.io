var stat = {
	gameTickCount:0,
	
	codeLine:0,
	programsWritten:0,
	money:0.0,
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
	titles:["Basement Dweller","stuff"],
	ini:false,
	skill:{
		game:0,
		software:0,
		web:0,
		userInterface:0,
		graphics:0	
	},
	update: function(){
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
		$("#statMoney").text("Money: "+stat.money);
		$("#statBitCoin").text("BitCoins: "+stat.bitCoin);
				
		if(this.name!="Player" && $("#statName").is(":hidden")){
			$("#statName").fadeIn("Slow");
			$("#statTitle").fadeIn("Slow");
		}	
		if(this.money>0 && $("#statMoney").is(":hidden"))
			$("#statMoney").fadeIn("Slow");
		if(this.bitCoin>0 && $("#statBitCoin").is(":hidden"))
			$("#statBitCoin").fadeIn("Slow");				

	},
	addTitle:function(str){
		for(s in stat.titles){
			if(stat.titles[s]===str)
				return;	
		}
		stat.titles.push(str);
	}
	
};