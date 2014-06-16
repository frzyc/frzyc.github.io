var stat = {
	//actual timing
	codeLine:0,
	programsWritten:0,
	money:0.0,
	codeSpeed:5,//should be 5 seconds
	codeExp:5,
	compileSpeed:0.5,//shoule be 0.5 seconds
	debugSpeed:5,//should be 5 seconds
	runSpeed:0.5,//should be 0.5 seconds
	
	
	/*/testing timings
	codeLine:0,
	programsWritten:0,
	money:0.0,
	bitCoin:0,
	codeSpeed:0.2,
	codeExp:5,
	compileSpeed:0.1,
	debugSpeed:0.1,
	runSpeed:0.1,
	*/
	name:"Player",
	gender:"male",
	titles:["Basement Dweller"],
	ini:false,
	canEditTitles:false,
	update: function(){
		if(this.gender==="male")
			$("#statName").text(this.name+"(M)");
		else if(this.gender==="female")
			$("#statName").text(this.name+"(F)");
		if(this.canEditTitles){
			//manual title selecter, code below is a placeholder
			//click on current title to change to a dropdown menu
			$("#statTitle").text(this.titles[this.titles.length-1]);	
		}else{
			if(this.titles.length>10)
				this.canEditTitles=true;
			$("#statTitle").text(this.titles[this.titles.length-1]);	
		}	
		$("#statBitCoin").text("Money: "+stat.bitCoin);
		$("#statMoney").text("BitCoins: "+stat.money);
				
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