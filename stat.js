var stat = {
	/*/actual timing
	codeLine:0,
	programsWritten:0,
	money:0.0,
	codeSpeed:5,//should be 5 seconds
	codeExp:5,
	compileSpeed:0.5,//shoule be 0.5 seconds
	debugSpeed:5,//should be 5 seconds
	runSpeed:0.5,//should be 0.5 seconds
	*/
	
	//testing timings
	codeLine:0,
	programsWritten:0,
	money:0.0,
	codeSpeed:0.2,
	codeExp:5,
	compileSpeed:0.1,
	debugSpeed:0.1,
	runSpeed:0.1,
	
	name:"Player",
	gender:"male",
	titles:["Basement Dweller","stuff"],
	ini:false,
	nameUpdate:false,
	moneyUpdate:false,
	canEditTitles:false,
	update: function(){
		if(this.name!="Player" && !this.nameUpdate){
			console.log("name updated");
			$("<p id=statName>"+this.name+"<p>").hide().appendTo("#right").fadeIn("Slow");
			$("<p id=statTitle>"+this.titles[this.titles.length-1]+"<p>").hide().appendTo("#right").fadeIn("Slow");
			this.nameUpdate=true;
		}else if(this.nameUpdate){
			console.log("update values");
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
		}
		if(this.nameUpdate && !this.moneyUpdate){
			if(stat.money>0 && !this.moneyUpdate){
				$("<p id=statstat.money>stat.money: "+stat.money+"<p>").hide().appendTo("#right").fadeIn("Slow");
				this.moneyUpdate=true;
			}else{
				$("#statstat.money").text(stat.money);
			}
			
				
		}
	}
	
};