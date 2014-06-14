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
				var $ele = $("<form id='nameForm'><div>Name:<input type='text'><br><input type='radio' name='gender' value='male' checked='checked'>Male<br><input type='radio' name='gender' value='female'>Female<button type='button'>Submit</button></div></form>");
				$("#codeTerminal").append($ele);
				$("<p></p>").hide().appendTo("#nameForm");
				$("#nameForm button").click(function( event ) {
					if($("#nameForm input").val()==="")
						$( "#nameForm p" ).text( "Invalid input" ).show();
					else{
						stat.gender = $("#nameForm input:radio[name=gender]:checked").val();
						stat.name = $("#nameForm input").val();						
						if(stat.name.match(/fuck/i)||stat.name.match(/shit/i)||stat.name.match(/cunt/i)||stat.name.match(/faggot/i)||stat.name.match(/dick/i)||stat.name.match(/asshole/i)||stat.name.match(/dipstick/i)||stat.name.match(/bastard/i)||stat.name.match(/bitch/i)||stat.name.match(/cock/i)){			
							stat.titles.push("Potty Mouth");
							stat.name = "Potty Mouth";
						}
						$( "#nameForm p" ).text( "My name is "+stat.name+". I am "+stat.gender+".").show();
					}
				});
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