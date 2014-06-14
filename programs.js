var programs = {
	currentProgram:0,
	programLineList:[2,4],
	programz:{
		/*TEMPLATE
		p[numoflines]:{
			title:"",
			elements:function(){
				//function to add elements	
			},
			extrafunctions(){
				
			}
		}
		*/
		p2:{
			title:"NameCaller",
			elements: function(){
				var $ele = $("<p>Sorry, no program here yet!</p>");
				$("#codeTerminal").append($ele);	
			}
		},
		p4:{
			title:"BirthdayCountDown",
			elements: function(){
				var $ele = $("<p>Sorry, no program here yet!</p>");
				$("#codeTerminal").append($ele);	
			}	
		}
	}
};