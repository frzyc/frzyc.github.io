var programs = {
	currentProgram:0,
	programLineList:[1,4,9,16],
	programz:{
		/*TEMPLATE
		p[numoflines]:{
			title:"",
			elements:function(){
				//function to add elements	
			},
			extrafunctions:function(){
				
			}
		}*/
		p1:{
			title:"Terminal",
			elements:function(){
				$("#codeTerminal").text("Hallo Wurld!");
			}
		},
		p4:{
			title:"NameCaller",
			elements: function(){
				var $ele = $("<div id='nameForm'><div>Name:<input type='text'><br><input type='radio' name='gender' value='male' checked='checked'>Male<br><input type='radio' name='gender' value='female'>Female<button type='button'>Submit</button></div></div>");
				$("#codeTerminal").append($ele);
				$("<p></p>").hide().appendTo("#nameForm");
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
		p9:{
			title:"Magic8Ball",
			
			elements: function(){
				var $ele = $("<div id='questionForm'><div>Question:<input type='text'><button type='button'>Ask the Magic 8 Ball</button></div>");
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
		},
		p16:{
			title:"Rock Paper Scissors",
			upgrade:false,
			rpsWins:0,
			elements:function(){
				$("<button class='codeBtns' id='rock' type='button' onclick='programs.programz.p9.rps(1)'>Rock</button>").css("width","75px").fadeIn(1000).appendTo("#codeTerminal");	
				$("<button class='codeBtns' id='paper' type='button' onclick='programs.programz.p9.rps(2)'>Paper</button>").css("width","75px").fadeIn(2000).appendTo("#codeTerminal");	
				$("<button class='codeBtns' id='scissor' type='button' onclick='programs.programz.p9.rps(3)'>Scissor</button>").css("width","75px").fadeIn(3000).appendTo("#codeTerminal");	
				$("<button class='codeBtns' id='lizard' type='button' onclick='programs.programz.p9.rps(4)'>Lizard</button>").css("width","75px").appendTo("#codeTerminal");	
				$("<button class='codeBtns' id='spock' type='button' onclick='programs.programz.p9.rps(5)'>Spock</button>").css("width","75px").appendTo("#codeTerminal");
				$("<p id='rpsResult'>Roshambo!</p>").fadeIn(4000).appendTo("#codeTerminal");	
			},
			rps:function(i){
				var compChoice=Math.floor(Math.random()*3+1);
				if(programs.programz.p9.upgrade){
					compChoice=Math.floor(Math.random()*3+1);
				}
				var li="ERROR";
				if(i==compChoice){
					switch(i){
						case 1://Rock
							li = "<strong>ROCK</strong> vs <strong>ROCK</strong>, a TIE...";
							break;	
						case 2://Paper
							li = "<strong>PAPER</strong> vs <strong>PAPER</strong>, a TIE...";
							break;
						case 3://Scissors
							li = "<strong>SCISSORS</strong> vs <strong>SCISSORS</strong>, a TIE...";
							break;
						case 4://Lizard
							li = "<strong>LIZARD</strong> vs <strong>LIZARD</strong>, a TIE...";
							break;
						case 5://Spock
							li = "<strong>SPOCK</strong> vs <strong>SPOCK</strong>, a TIE...";
							break;
					}
				}else{
					switch(i){
						case 1://Rock
							switch(compChoice){
								case 2://Paper
									li = "<strong>PAPER</strong> covers <strong>ROCK</strong>, you LOSE!";
									break;
								case 3://Scissors
									li = "<strong>ROCK</strong> crushes <strong>SCISSORS</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 4://Lizard
									li = "<strong>ROCK</strong> crushes <strong>LIZARD</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 5://Spock
									li = "<strong>SPOCK</strong> vaporizes <strong>ROCK</strong>, you LOSE!";
									break;
							}
							break;
						case 2://Paper
							switch(compChoice){
								case 1://Rock
									li = "<strong>PAPER</strong> covers <strong>ROCK</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 3://Scissors
									li = "<strong>SCISSORS</strong> cuts <strong>PAPER</strong>, you LOSE!";
									break;
								case 4://Lizard
									li = "<strong>LIZARD</strong> eats <strong>PAPER</strong>, you LOSE!";
									break;
								case 5://Spock
									li = "<strong>PAPER</strong> disproves <strong>SPOCK</strong>, you WIN!";
									this.rpsWins++;
									break;
							}
							break;
						case 3://Scissors
							switch(compChoice){
								case 1://Rock
									li = "<strong>PAPER</strong> covers <strong>ROCK</strong>, you LOSE!";
									break;
								case 2://Paper
									li = "<strong>SCISSORS</strong> cuts <strong>PAPER</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 4://Lizard
									li = "<strong>SCISSORS</strong> decapitates <strong>LIZARD</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 5://Spock
									li = "<strong>SPOCK</strong> smashes <strong>SCISSORS</strong>, you LOSE!";
									break;
							}
							break;
						case 4://Lizard
							switch(compChoice){
								case 1://Rock
									li = "<strong>ROCK</strong> crushes <strong>LIZARD</strong>, you LOSE!";
									break;
								case 2://Paper
									li = "<strong>LIZARD</strong> eats <strong>PAPER</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 3://Scissors
									li = "<strong>SCISSORS</strong> decapitates <strong>LIZARD</strong>, you LOSE!";
									break;
								case 5://Spock
									li = "<strong>LIZARD</strong> poisons <strong>SPOCK</strong>, you WIN!";
									this.rpsWins++;
									break;
							}
							break;
						case 5://Spock
							switch(compChoice){
								case 1://Rock
									li = "<strong>SPOCK</strong> vaporizes <strong>ROCK</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 2://Paper
									li = "<strong>PAPER</strong> disproves <strong>SPOCK</strong>, you LOSE!";
									break;
								case 3://Scissors
									li = "<strong>SPOCK</strong> smashes <strong>SCISSORS</strong>, you WIN!";
									this.rpsWins++;
									break;
								case 4://Lizard
									li = "<strong>LIZARD</strong> poisons <strong>SPOCK</strong>, you LOSE!";
									break;
							}
							break;
					}
				}
				document.getElementById("rock").disabled = true;
				document.getElementById("paper").disabled = true;
				document.getElementById("scissors").disabled = true;
				document.getElementById("lizard").disabled = true;
				document.getElementById("spock").disabled = true;
				setTimeout(function(){
					document.getElementById("rock").disabled = false;
					document.getElementById("paper").disabled = false;
					document.getElementById("scissors").disabled = false;
					document.getElementById("lizard").disabled = false;
					document.getElementById("spock").disabled = false;
				},1500);
				if(this.rpsWins>=10 && !this.upgrade){
					this.upgrade=true;
					stat.addTitle("Roshambo Master");
					this.title="Rock Paper Scissors Lizard Spock";
					$("#codeTaskBarTitle").text(this.title);
					$("#lizard").fadeIn(1000);
					$("#spock").fadeIn(2000);
					$("#rpsResult").html(li+" You game have been upgraded!");
				}else{
					$("#rpsResult").html(li+" You have "+this.rpsWins+" wins.");
				}
			}
		},
		p25:{
			title:"Calculator",
			elements:function(){
				$("<div id='calcKeys'></div>")
			},
			extrafunctions:function(){
				
			}
		}
		/*TEMPLATE
		p[numoflines]:{
			title:"",
			elements:function(){
				//function to add elements	
			},
			extrafunctions:function(){
				
			}
		}*/
	},
	pottyMouth:function(str){
		if(str.match(/fuck/i)||str.match(/shit/i)||str.match(/cunt/i)||str.match(/faggot/i)||str.match(/dick/i)||str.match(/asshole/i)||str.match(/dipstick/i)||str.match(/bastard/i)||str.match(/bitch/i)||str.match(/cock/i)){
			stat.addTitle("Potty Mouth");
			return true;
		}else
			return false;
	}
};