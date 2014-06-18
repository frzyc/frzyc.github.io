var stat = {
	codeLine:0,
	programsWritten:0,
	money:0.0,
	codeSpeed:5,//should be 5 seconds
	codeExp:5,
	compileSpeed:0.5,//shoule be 0.5 seconds
	debugSpeed:5,//should be 5 seconds
	runSpeed:0.5,//should be 0.5 seconds
	
	rpsWins:0,
	
	name:"Player",
	gender:"male",
	titles:["Basement Dweller"],
	ini:false,
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
		$("#statBitCoin").text("BitCoins: "+stat.money);
				
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