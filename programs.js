var programs = {
	currentProgram:0,
	programLineList:[1,4,9,16,24,37,50],
	programz:{

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
p24:{
	title:"Game of pigs",
	compPoint:0,
	playerWin:0,
	compWin:0,
	elements:function(){
		var THIS=this;
		turnTot=0;
		playerPoint=0;
		playerTurn=true;
		$("<div id='player1'></div>").appendTo("#codeTerminal");
		$("<p id='p1Status'><strong>"+stat.name+"</strong> turn total:0</p>").hide().appendTo("#player1").fadeIn(1000);
		createProgressbar("pig1").appendTo("#player1");
		$("#pig1ProgressBarStatus").text("0");
		$("#pig1ProgressBar").css('width','0px').show("slow");
		$("<button class='codeBtns' id='p1BtnRoll' type='button' >ROLL</button>").hide().appendTo("#player1").fadeIn(2000);
		$("<button class='codeBtns' id='p1BtnHold' type='button' >HOLD</button>").hide().appendTo("#player1").fadeIn(3000);
		$("<div id='diceContent'><div id='pigdie'>?</div></div>").appendTo("#codeTerminal");
		$("#pigdie").css({
			"width":"40px",
			"height":"40px",
			"text-align":"center",
			"font-size":"40px",
			"border":"3px solid grey",
			"margin-left":"auto",
			"margin-right":"auto",
			"border-radius":"5px"
		});
		$("<div id='player2'></div>").appendTo("#codeTerminal");
		$("<p id='p2Status'><strong>Computer</strong> turn total:0</p>").hide().appendTo("#player2").fadeIn(1000);
		createProgressbar("pig2").appendTo("#player2");
		$("#pig2ProgressBarStatus").text("0");
		$("#pig2ProgressBar").css('width','0px').show("slow");
		$("<p id='pigHowTo'>How to play</p>").appendTo("#codeTerminal");
		$("<div id='pigInstructions'><p>Two players race to reach 100 points.<p><strong>ROLL</strong> - If the player rolls a<p>1: the player scores nothing and it becomes the opponent's turn.</p><p>2-6: the number is added to the player's turn total and the player's turn continues.</p><p><strong>HOLD</strong> - The turn total is added to the player's score and it becomes the opponent's turn.</p></div>").hide().appendTo("#codeTerminal");
		$("#pigHowTo").hover(function(){$("#pigInstructions").show("slow");}, function(){$("#pigInstructions").hide("slow");});
		$("#p1BtnHold").attr("disabled",true);
		$("#p1Status").css("color","red");
		$("#p1BtnRoll").click(function(){
			$("#p1BtnRoll").attr("disabled",true);
			var dierolling = setInterval(function(){
				$("#pigdie").text(Math.floor(Math.random()*6+1));
			},75);
			setTimeout(function(){
				clearInterval(dierolling);
				if($("#pigdie").text()==1){
					playerTurn=false;
					turnTot=0;
					$("#p1Status").html("<strong>"+stat.name+"</strong> turn total:"+turnTot);
					$("#p1BtnRoll").attr("disabled",true);
					$("#p1BtnHold").attr("disabled",true);
					compTurn();
				}else{
					turnTot+=parseInt($("#pigdie").text());
					$("#p1Status").html("<strong>"+stat.name+"</strong> turn total:"+turnTot);
					$("#p1BtnHold").attr("disabled",false);
					$("#p1BtnRoll").attr("disabled",false);	
				}
			},Math.floor(Math.random()*500+500));
		});
		$("#p1BtnHold").click(function(){
			THIS.playerPoint+=turnTot;
			turnTot=0;
			$("#p1Status").html("<strong>"+stat.name+"</strong> turn total:"+turnTot);
			$("#pig1ProgressBar").animate({width:THIS.playerPoint*4+'px'},1000);
			$("#pig1ProgressBarStatus").text(THIS.playerPoint);
			$("#p1BtnRoll").attr("disabled",true);
			$("#p1BtnHold").attr("disabled",true);
			if(THIS.playerPoint>=100){//100
				gameEnd(1);
				return;	
			}
			compTurn();
		});
		function compTurn(){
			console.log("COMP TURN");
			$("#p1Status").css("color","black");
			$("#p2Status").css("color","red");
			setTimeout(function(){
				var dierolling = setInterval(function(){
					$("#pigdie").text(Math.floor(Math.random()*6+1));
				},75);
				setTimeout(function(){
					clearInterval(dierolling);
					var compHold=((Math.random()*100+1)<(turnTot*5));
					if($("#pigdie").text()==1||compHold){
						if(compHold && $("#pigdie").text()!=1){
							compPoint+=turnTot;
							$("#pig2ProgressBar").animate({width:THIS.compPoint*4+'px'},1000);
							$("#pig2ProgressBarStatus").text(THIS.compPoint);	
							if(THIS.compPoint>=100){//100
								gameEnd(0);
								return;	
							}
						}
						turnTot=0;
						playerTurn=true;
						$("#p2Status").html("<strong>Computer</strong> turn total:"+turnTot);
						$("#p1BtnRoll").attr("disabled",false);
						$("#p1Status").css("color","red");
						$("#p2Status").css("color","black");
					}else{
						turnTot+=parseInt($("#pigdie").text());
						$("#p2Status").html("<strong>Computer</strong> turn total:"+turnTot);
						compTurn();
					}
				},Math.floor(Math.random()*500+500));
			},Math.floor(Math.random()*1000));
		}
		function gameEnd(win){
			$("#p1BtnRoll").attr("disabled",true);
			$("#p1BtnHold").attr("disabled",true);
			$("#pigdie").fadeOut("slow",function(){
				$(this).css({
					"width":"300px",
					"font-size":"16px",
				}).fadeIn("slow");
				if(win){
					THIS.playerWin++;	
					$("#pigdie").text("YOU WIN! Wins:"+THIS.playerWin+" Click this to play again.");
				}else{
					THIS.compWin++;	
					$("#pigdie").text("YOU LOSE! Loses:"+THIS.compWin+" Click this to play again.");
				}
				$("#pigdie").click(function(){
					$("#pigdie").fadeOut("slow",function(){
						$(this).css({
							"width":"40",
							"font-size":"40px",
						}).text("?").fadeIn("slow");
						$("#p1BtnRoll").attr("disabled",false);
					});						
				});
			});
		}
	}//end of elements
},//end of p24
p37:{
	title:"Calculator",
	elements:function(){
		$("<div id='calculator'><div class='calcTop'><span id='calcClear'>C</span><div id='calcScreen'></div></div><div class='calckeys'><span>7</span><span>8</span><span>9</span><span class='calcOperator'>+</span><br><span>4</span><span>5</span><span>6</span><span class='calcOperator'>-</span><br><span>1</span><span>2</span><span>3</span><span class='calcOperator'>/</span><br><span>0</span><span>.</span><span class='calcEval'>=</span><span class='calcOperator'>*</span></div></div>").appendTo("#codeTerminal");
		$(".calckeys span, #calcClear").css({
			"width":"80px",
			"height":"20px",
			"text-align":"center",
			"margin":"5px",
			"display":"inline-block",
			"cursor":"pointer",					
			"border":"1px black solid"	
		}).hover(function(){
			$(this).css("background-color","rgb(220,220,220)");
			},function(){
			$(this).css("background-color","white");
		});
		$("#calcScreen").css({
			"width":"250px",
			"height":"20px",
			"margin":"5px",
			"display":"inline-block",
			"text-align":"right",
			"float":"left",
			"border":"1px black solid",
			"background-color":"rgb(240,240,240)"
		});
		$("#calculator").css({
			"padding":"5px",
			"border":"1px solid black"
		});
		var operators = ['+', '-', '*', '/'];
		var decimalAdded = false;
		$("#calculator span").click(function(){
			if($(this).text() == 'C') {
				$('#calcScreen').text('');
				decimalAdded = false;
			}else if($(this).text() == '=') {
				var equation = $('#calcScreen').text();
				var lastChar = equation[equation.length - 1];
				if(operators.indexOf(lastChar) > -1 || lastChar == '.')
					equation = equation.replace(/.$/, '');
				if(equation)
					$('#calcScreen').text(eval(equation));
				decimalAdded = false;
			}else if(operators.indexOf($(this).text()) > -1) {
				var lastChar = $('#calcScreen').text()[$('#calcScreen').text().length - 1];
				if($('#calcScreen').text() != '' && operators.indexOf(lastChar) == -1) 
					$('#calcScreen').text($('#calcScreen').text()+$(this).text());
				else if($('#calcScreen').text() == '' && $(this).text() == '-') 
					$('#calcScreen').text($('#calcScreen').text()+$(this).text());
				if(operators.indexOf(lastChar) > -1 && $('#calcScreen').text().length > 1) {
					$('#calcScreen').text($('#calcScreen').text().replace(/.$/, btnVal));
				}
				decimalAdded =false;
			}else if($(this).text() == '.') {
				if(!decimalAdded) {
					$('#calcScreen').text($('#calcScreen').text()+$(this).text());
					decimalAdded = true;
				}
			}
			else {
				$('#calcScreen').text($('#calcScreen').text()+$(this).text());
			}
		});
	}//end of elements
},//end of p37
p50:{
	title:"2048",
	maxScore:0,
	wins:0,
	elements:function(){
		var THIS=this;
		var field=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var canMove=false;
		var score=0;
		$("<div id='2048score'></div>").appendTo("#codeTerminal");
		$("#2048score").text("Current score:"+score+"	Max score:"+THIS.maxScore);
		$("<div id='2048gameField'></div>").appendTo("#codeTerminal");
		$("#2048gameField").css({
			"border":"1px solid grey",
			"display":"inline-block"
		});
		createField();
		$(document).keydown(function(event){
			if(!$("#2048gameField"))
				$(document).unbind("keydown");
			if(event.which==13)//ENTER
		   		event.preventDefault();
		  	else if(event.which==37)//LEFT
				endGame();//moveLeft();
			else if(event.which==38)//UP
				moveUp();
			else if(event.which==39)//RIGHT
				moveRight();
			else if(event.which==40)//DOWN
				moveDown();
		});
		function createField() {
			$("#2048gameField").empty();
			field=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			for(var r=0;r<4;r++){
				for(var c=0;c<4;c++)
					$("<span></span>").hide().appendTo("#2048gameField").fadeIn((r+1)*(c+1)*200);
				$("<br>").appendTo("#2048gameField");
			}
			$("<div id='2048GameOptions'>")
			$("#2048gameField").css("font-size","80px");
			$("#2048gameField span").css({
				"width":"80px",
				"height":"80px",
				"font-size":"50px",
				"border":"2px solid grey",
				"margin":"5px",
				"display":"inline-block",
				"text-align":"center",
				"vertical-align":"middle",
				"line-height":"80px"
			});
			addTwo();
			addTwo();
			redraw();
			canMove=true;
		}
		function addTwo(){
			do{var randomValue = Math.floor(Math.random()*16);} while (field[randomValue]!=0)
			field[randomValue]=2;
		}
		function toRow(n){return Math.floor(n/4);}
		function toCol(n){return n%4;}
		function redraw(){
			$("#2048gameField span").each(function(index) {
                $(this).html("<p>"+field[index]+"</p>");
				if(field[index]<=9)
					$(this).css("font-size","80px");
				if(field[index]>9)
					$(this).css("font-size","40px");
				else if(field[index]>99)
					$(this).css("font-size","20px");
				else if(field[index]>999)
					$(this).css("font-size","10px");
				else if(field[index]>9999)
					$(this).css("font-size","5px");
            });
		}
		function moveLeft(){
			if(!canMove)
				return;
			canMove=false;
			var moved = false;
			for(var e=0;e<16;e++){
				if(field[e]==0)
					continue;
				var row = toRow(e);
				var col = toCol(e);
				if(col>0){
					var remove = false;
				 	for(i=col-1;i>=0;i--){
					 	if(field[row*4+i]!=0){
							if(field[row*4+i]==field[row*4+col]){
								remove = true;
								i--;                                             
							}
							break;
					 	}
				 	}
					if(col!=i+1){
						moved=true;
						moveTile(row*4+col,row*4+i+1,remove);
					}
			 	}
		 	}
			endMove(moved);
		}
		function moveRight(){
			if(!canMove)
				return;
			canMove=false;
			var moved = false;
			for(var e=16-1;e>=0;e--){
				if(field[e]==0)
					continue;
				var row = toRow(e);
				var col = toCol(e);
				if(col<3){
					var remove = false;
				 	for(i=col+1;i<4;i++){
					 	if(field[row*4+i]!=0){
						 	if(field[row*4+i]==field[row*4+col]){
							 	remove = true;                    
								i++;
							}
						 	break;
					 	}
				 	}
					if(col!=i-1){
						moved=true;
						moveTile(row*4+col,row*4+i-1,remove);
					}
			 	}
		 	}
			endMove(moved);
		}
		function moveUp(){
			if(!canMove)
				return;
			canMove=false;
			var moved = false;
			for(var e=0;e<16;e++){
				if(field[e]==0)
					continue;
				var row = toRow(e);
				var col = toCol(e);
				if(row>0){
					var remove = false;
				 	for(i=row-1;i>=0;i--){
					 	if(field[i*4+col]!=0){
						 	if(field[i*4+col]==field[row*4+col]){
							 	remove = true;                                          
								i--;
							}
						 	break;
					 	}
				 	}
					if(row!=i+1){
						moved=true;
						moveTile(row*4+col,(i+1)*4+col,remove);
					}
			 	}
		 	}
			endMove(moved);
		}
		function moveDown(){
			if(!canMove)
				return;
			canMove=false;
			var moved = false;
			for(var e=16-1;e>=0;e--){
				if(field[e]==0)
					continue;
				var row = toRow(e);
				var col = toCol(e);
				if(row<3){
					var remove = false;
				 	for(i=row+1;i<4;i++){
					 	if(field[i*4+col]!=0){
						 	if(field[i*4+col]==field[row*4+col]){
							 	remove = true;                                          
								i++;
							}
						 	break;
					 	}
				 	}
					if(row!=i-1){
						moved=true;
						moveTile(row*4+col,(i-1)*4+col,remove);
					}
			 	}
		 	}
			endMove(moved);
		}
		function moveTile(from, to, remove){
			if(remove){//implies that tile have been merged
				field[from]=0;
				field[to]*=2;
				score += field[to];
			}else{//implies moving to a empty tile
				field[to]=field[from];
				field[from]=0;
			}
		}
		function endMove(m){
			console.log("ENDMOVE: "+m);
        	if(m){//if moved, add another 2
            	addTwo();
				$("#2048score").text("Current score:"+score+"	Max score:"+THIS.maxScore);
				redraw();
				if(checkEnd()){
					endGame();
					return;
				}
			}
			canMove=true;
        }
		function checkEnd(){
			for(var i=0;i<16;i++)
				if(field[i]==0)
					return false;
			for(var r=0;r<4;r++)
				for(var c=0; c<3;c++)
					if(field[r*4+c]==field[r*4+c+1])
						return false;
			for(var c=0;c<4;c++)
				for(var r=0; r<3;r++)
					if(field[r*4+c]==field[(r+1)*4+c])
						return false;
			return true;
		}
		function endGame(win){
			if(THIS.maxScore<score)
				THIS.maxScore=score;
			$("#2048gameField").fadeOut(3000,function(){
				$(this).empty();
				$("<p></p>").appendTo("#2048gameField");
				if(win)
					$("#2048gameField p").text("You WIN!");
				else
					$("#2048gameField p").text("GAME OVER!");
				$("#2048gameField p").css("font-size","20px");
				$("<button class='codeBtn'>REPLAY!</button>").appendTo("#2048gameField").show();
				$("#2048gameField button").click(function(){
					score=0
					createField()
				});
				$(this).fadeIn("slow");
			});
		}
	}//end of elements
}//end of p50

/*TEMPLATE
p[numoflines]:{
	title:"",
	elements:function(){
		//function to add elements	
	}//end of elements
}//end of [numoflines]
*/

	},//end of programz
	pottyMouth:function(str){
		if(str.match(/fuck/i)||str.match(/shit/i)||str.match(/cunt/i)||str.match(/faggot/i)||str.match(/dick/i)||str.match(/asshole/i)||str.match(/dipstick/i)||str.match(/bastard/i)||str.match(/bitch/i)||str.match(/cock/i)){
			stat.addTitle("Potty Mouth");
			return true;
		}else
			return false;
	}
};