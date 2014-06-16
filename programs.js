var programs = {
	currentProgram:0,
	programLineList:[4,11],
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
		p4:{
			title:"NameCaller",
			elements: function(){
				var $ele = $("<form id='nameForm'><div>Name:<input type='text'><br><input type='radio' name='gender' value='male' checked='checked'>Male<br><input type='radio' name='gender' value='female'>Female<button type='button'>Submit</button></div></form>");
				$("#codeTerminal").append($ele);
				$("<p></p>").hide().appendTo("#nameForm");
				$("#nameForm").submit(function() { return false; });//disable pressing enter and refreshing the page
				$("#nameForm button").click(function( event ) {
					if($("#nameForm input").val()==="")
						$( "#nameForm p" ).text( "Invalid input" ).show();
					else{
						stat.gender = $("#nameForm input:radio[name=gender]:checked").val();
						stat.name = $("#nameForm input").val();						
						if(programs.pottyMouth(stat.name))		
							stat.name = "Potty Mouth";
						$( "#nameForm p" ).text( "My name is "+stat.name+". I am "+stat.gender+".").show();
					}
				});
			}
		},
		p11:{
			title:"Magic8Ball",
			elements: function(){
				var $ele = $("<form id='questionForm'><div>Name:<input type='text'><button type='button'>Ask the Magic 8 Ball</button></form>");
				$("#codeTerminal").append($ele);	
				$("<p></p>").hide().appendTo("#questionForm");
				$("#questionForm").submit(function() { return false; });//disable pressing enter and refreshing the page
				$("#questionForm button").click(function( event ) {
					if($("#questionForm input").val()==="")
						$( "#questionForm p" ).text( "Invalid input" ).show();
					else{
						var question = $("#questionForm input").val();	
						var answer = "I have no idea...";
						var r = Math.floor(Math.random()*12+1);
						switch(r){
							case 1:
								answer = "Yes.";
								break;
							case 2:
								answer = "No.";
								break;
							case 3:
								answer = "Maybe.";
								break;
							case 4:
								answer = "Kind of.";
								break;
							case 5:
								answer = "Not really.";
								break;
							case 6:
								answer = "I'm sure there is a chance...ish.";
								break;
							case 7:
								answer = "Quite possibly if the circumstances are right, but that's only my opinion.";
								break;
							case 8:
								answer = "That's an interesting question.";
								break;
							case 9:
								answer = "m3h.";
								break;
							case 10:
								answer = "Could God make a rock so large, he couldn't lift it?";
								break;
							case 11:
								answer = "Could there be something for nothing?";
								break;
							case 12:
								answer = "Sometimes.";
								break;
							default:
								answer = "I have absolutely no idea...";
								break;
						}
						if(programs.pottyMouth(question))
							answer = "How dare you use such language!"
						if(question.search("mom ")!=-1||question.search("your mom")!=-1||question.search("Your mom")!=-1)
							answer = "No, YOUR MOM.";
						if(question.match(/life/i)||question.match(/universe/i)||question.match(/everything/i))
							answer = "42";
						$( "#questionForm p" ).text( "Answer: "+answer).show();
					}
				});
			}	
		}
	},
	pottyMouth:function(str){
		if(str.match(/fuck/i)||str.match(/shit/i)||str.match(/cunt/i)||str.match(/faggot/i)||str.match(/dick/i)||str.match(/asshole/i)||str.match(/dipstick/i)||str.match(/bastard/i)||str.match(/bitch/i)||str.match(/cock/i)){
			stat.addTitle("Potty Mouth");
			return true;
		}else
			return false;
	}
};