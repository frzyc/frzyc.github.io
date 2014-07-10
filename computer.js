var computer ={
	computerCase:-1,
	computerCaseArr:[
		"Heavy metal box with duct-tape",
		"Second-hand rusty case",
		"codeMaster-C00L",
		"Beowulf cluster"
	],
	computerCaseArrDesc:[
		"30 pounds of rusty, dented metal, it may be bulletproof, but it rattles and overheats like crazy, so we duct-taped an electric fan to the side",
		"Its just a brick-shaped rusty box. Kind of boring, really. Also, rat droppings in the bottom",
		"A professional computer case that incorporates a mini-fridge as cooling and food storage.",
		"A few dozen computers networked together for high-performance parallel computing. Overkill."
	],
	cpu:0,	
	cpuArr:[
		"cpu0",
		"cpu1",
		"cpu2",
		"cpu3"
	],
	cpuArrDesc:[
		"cpuDesc0",
		"cpuDesc1",
		"cpuDesc2",
		"cpuDesc3"
	],
	graphic:0,
	graphicArr:[
		"graphic0",
		"graphic1",
		"graphic2",
		"graphic3"
	],
	graphicArrDesc:[
		"graphicDesc0",
		"graphicDesc1",
		"graphicDesc2",
		"graphicDesc3"
	],
	ram:0,
	ramArr:[
		"ram0",
		"ram1",
		"ram2",
		"ram3"
	],
	ramArrDesc:[
		"ramDesc0",
		"ramDesc1",
		"ramDesc2",
		"ramDesc3"
	],
	storage:0,
	storageArr:[
		"storage0",
		"storage1",
		"storage2",
		"storage3"
	],
	storageArrDesc:[
		"storageDesc0",
		"storageDesc1",
		"storageDesc2",
		"storageDesc3"
	],
	keyboard:0,
	keyboardArr:[
		"keyboard0",
		"keyboard1",
		"keyboard2",
		"keyboard3"
	],
	keyboardArrDesc:[
		"keyboardDesc0",
		"keyboardDesc1",
		"keyboardDesc2",
		"keyboardDesc3"
	],
	currentWindowIndex:0,
	list:["My Computer"],
	start:function(){
		var THIS=this;
		$("<div id='compProgramsSwitcher'></div>").appendTo("#compTerminal").css({
			"width":"100%",
			"display":"inline-block",
			"border-bottom":"1px solid black"
		});
		$prevBtn = $('<div/>', {
			type: 'button',
			'class': 'taskBtn',
			id: 'compPrevBtn',
			text: '<',
			click: function() {
				if(THIS.list.length==1)
					return;
				var changeIndex=THIS.currentWindowIndex-1;
				if(changeIndex<0)
					changeIndex=THIS.list.length-1;				
				THIS.currentWindowIndex=changeIndex;
				$("#compCurrWindow").text(THIS.list[THIS.currentWindowIndex]);
				THIS.switchWindow(THIS.currentWindowIndex);
			}
		}).css("float","left").appendTo("#compProgramsSwitcher");
		$("<p id='compCurrWindow'>"+this.list[this.currentWindowIndex]+"</div>").css({
			"margin-left":"30px",
			"display":"inline-block"	
		}).appendTo("#compProgramsSwitcher")
		$("#compCurrWindow").click(function(){//only allow it to be clicked once		
			$(this).hide();
			$("<select id = 'compSel' name='Programs'></select>").insertAfter(this);
			$("<option value='titleSel'>Select a Window</option>").appendTo("#compSel");
			for(t in THIS.list){
				$("<option value="+t+">"+THIS.list[t]+"</option>").appendTo("#compSel");
			}
			$("#compSel").change(function(event){//Click event on Select has occurred
				var index = parseInt($(this).val());
				console.log("SELECTED INDEX: "+index);
				THIS.currentWindowIndex=index;
				THIS.switchWindow(index);
				$("#compCurrWindow").text(THIS.list[t]).show();
				$("#compSel").remove();
			});
		});
		$nextBtn = $('<div/>', {
			type: 'button',
			'class': 'taskBtn',
			id: 'compNextBtn',
			text: '>',
			click: function() {
				if(THIS.list.length==1)
					return;
				var changeIndex=THIS.currentWindowIndex+1;
				if(changeIndex>=THIS.list.length)
					changeIndex=0;			
				THIS.currentWindowIndex=changeIndex;
				$("#compCurrWindow").text(THIS.list[THIS.currentWindowIndex]);
				THIS.switchWindow(THIS.currentWindowIndex);
			}
		}).appendTo("#compProgramsSwitcher");	
		$("<div id='compProgram'></div>").appendTo("#compTerminal");
		THIS.myComputer();
	},
	switchWindow:function(index){
		$("#compProgram").children().hide("fast");
		console.log("SWITCHING WINDOW TO: "+index);
		var currentWindowName=this.list[index];
		switch(currentWindowName){
			case "My Computer":
				if(!$("#myComputer").length)
					this.myComputer();
				else
					$("#myComputer").show("fast");
				break;
			case "Stuff":
			
				break;
		}
	},
	myComputer:function(){
		var THIS=this;
		if(!$("#myComputer").length){//create stuff	
			$("<div id='myComputer'></div>").hide().appendTo("#compProgram").show("fast");
			$("<p id='computerCase'><strong>Computer Case:</strong> "+THIS.computerCaseArr[THIS.computerCase]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#computerCaseDesc").toggle("fast");});
			$("<p id='computerCaseDesc'><em>"+THIS.computerCaseArrDesc[THIS.computerCase]+"</em></p>").hide().appendTo("#myComputer");
			
			$("<p id='cpu'><strong>CPU:</strong> "+THIS.cpuArr[THIS.cpu]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#cpuDesc").toggle("fast");});
			$("<p id='cpuDesc'><em>"+THIS.cpuArrDesc[THIS.cpu]+"</em></p>").hide().appendTo("#myComputer");
			
			$("<p id='graphic'><strong>Computer Case:</strong> "+THIS.graphicArr[THIS.graphic]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#graphicDesc").toggle("fast");});
			$("<p id='graphicDesc'><em>"+THIS.graphicArrDesc[THIS.graphic]+"</em></p>").hide().appendTo("#myComputer");
			
			$("<p id='ram'><strong>RAM:</strong> "+THIS.ramArr[THIS.ram]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#ramDesc").toggle("fast");});
			$("<p id='ramDesc'><em>"+THIS.ramArrDesc[THIS.ram]+"</em></p>").hide().appendTo("#myComputer");
			
			$("<p id='storage'><strong>Storage:</strong> "+THIS.storageArr[THIS.storage]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#storageDesc").toggle("fast");});
			$("<p id='storageDesc'><em>"+THIS.storageArrDesc[THIS.storage]+"</em></p>").hide().appendTo("#myComputer");
			
			$("<p id='keyboard'><strong>Keyboard:</strong> "+THIS.keyboardArr[THIS.keyboard]+"</p>").hide().appendTo("#myComputer").show("slow").click(function(){$("#keyboardDesc").toggle("fast");});
			$("<p id='keyboardDesc'><em>"+THIS.keyboardArrDesc[THIS.keyboard]+"</em></p>").hide().appendTo("#myComputer");
		}
		$("#computerCase").html("<strong>Computer Case:</strong> "+THIS.computerCaseArr[THIS.computerCase]);
		$("#computerCaseDesc").html("<em>"+THIS.computerCaseArrDesc[THIS.computerCase]+"</em>")
		
		$("#cpu").html("<strong>CPU:</strong> "+THIS.cpuArr[THIS.cpu]);
		$("#cpuDesc").html("<em>"+THIS.cpuArrDesc[THIS.cpu]+"</em>");
		
		$("#graphic").html("<strong>Computer Case:</strong> "+THIS.graphicArr[THIS.graphic]);
		$("#graphicDesc").html("<em>"+THIS.graphicArrDesc[THIS.graphic]+"</em>");
		
		$("#ram").html("<strong>RAM:</strong> "+THIS.cpuArr[THIS.ram]);
		$("#ramDesc").html("<em>"+THIS.ramArrDesc[THIS.ram]+"</em>");
		
		$("#storage").html("<strong>CPU:</strong> "+THIS.storageArr[THIS.storage]);
		$("#storageDesc").html("<em>"+THIS.storageArrDesc[THIS.storage]+"</em>");
		
		$("#keyboard").html("<strong>CPU:</strong> "+THIS.keyboardArr[THIS.keyboard]);
		$("#keyboardDesc").html("<em>"+THIS.keyboardArrDesc[THIS.keyboard]+"</em>");
	}
};